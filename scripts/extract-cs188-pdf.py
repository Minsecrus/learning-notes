"""Extract the CS188 PDF into ordered, image-aware Markdown drafts.

The generated drafts are an intermediate representation: they retain page
markers and the position of figures, but they are not a translation.  This
keeps PDF extraction reproducible while the final Chinese Markdown remains
editable in the notes directory.
"""

from __future__ import annotations

import argparse
import html
import re
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path


CHAPTER_FILES = {
    0: "00-front-matter.md",
    1: "01-search.md",
    2: "02-constraint-satisfaction-problems.md",
    3: "03-games.md",
    4: "04-markov-decision-processes.md",
    5: "05-reinforcement-learning.md",
    6: "06-bayesian-networks.md",
    7: "07-decision-networks-and-vpi.md",
    8: "08-hidden-markov-models.md",
    9: "09-machine-learning.md",
    10: "10-logic.md",
}


@dataclass
class Item:
    kind: str
    top: float
    left: float
    width: float
    height: float
    value: str
    font_family: str = ""
    source: Path | None = None


def find_executable(name: str, explicit: str | None) -> Path:
    if explicit:
        path = Path(explicit)
        if not path.is_file():
            raise FileNotFoundError(path)
        return path

    candidates = [
        Path(r"C:\Users\29728\AppData\Local\Programs\MiKTeX\miktex\bin\x64")
        / name,
    ]
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    raise FileNotFoundError(
        f"Could not find {name}; pass --{name.removesuffix('.exe')} explicitly."
    )


def render_inline(element: ET.Element) -> str:
    """Render the small inline HTML vocabulary emitted by pdftohtml."""

    tag = element.tag.rsplit("}", 1)[-1]
    parts = [element.text or ""]
    for child in element:
        child_text = render_inline(child)
        child_tag = child.tag.rsplit("}", 1)[-1]
        if child_tag == "b":
            child_text = f"**{child_text}**"
        elif child_tag == "i":
            child_text = f"*{child_text}*"
        parts.append(child_text)
        parts.append(child.tail or "")
    value = "".join(parts)
    if tag == "br":
        return "\n"
    return html.unescape(value)


def parse_pages(xml_path: Path) -> list[list[Item]]:
    root = ET.parse(xml_path).getroot()
    font_families = {
        spec.attrib.get("id", ""): spec.attrib.get("family", "")
        for spec in root.findall("fontspec")
    }
    pages: list[list[Item]] = []
    for page in root.findall("page"):
        page_items: list[Item] = []
        for child in page:
            tag = child.tag.rsplit("}", 1)[-1]
            if tag not in {"text", "image"}:
                continue
            try:
                top = float(child.attrib.get("top", "0"))
                left = float(child.attrib.get("left", "0"))
                width = float(child.attrib.get("width", "0"))
                height = float(child.attrib.get("height", "0"))
            except ValueError:
                continue
            if tag == "image":
                source = Path(child.attrib["src"])
                page_items.append(Item("image", top, left, width, height, "", source=source))
            else:
                value = render_inline(child).replace("\u00a0", " ").strip()
                if not value:
                    continue
                family = font_families.get(child.attrib.get("font", ""), "")
                page_items.append(Item("text", top, left, width, height, value, family))
        pages.append(sorted(page_items, key=lambda item: (item.top, item.left)))
    return pages


def merge_text_items(items: list[Item]) -> list[Item]:
    """Merge XML fragments that belong to one visual line."""

    merged: list[Item] = []
    for item in items:
        if not merged or abs(item.top - merged[-1].top) > 6:
            merged.append(Item(item.kind, item.top, item.left, item.width, item.height, item.value, item.font_family))
            continue
        current = merged[-1]
        gap = item.left - (current.left + current.width)
        separator = "" if gap < 3 or current.value.endswith((" ", "(", "[")) else " "
        current.value += separator + item.value
        current.width = max(current.width, item.left + item.width - current.left)
        current.height = max(current.height, item.height)
        current.top = min(current.top, item.top)
    return merged


def page_markdown(page_number: int, items: list[Item], asset_names: dict[Path, str]) -> str:
    # Omit the running header and printed page number.  The body heading and
    # the page marker below provide the useful source traceability.
    visible = [
        item
        for item in items
        if not (item.kind == "text" and (item.top < 250 or item.top > 1100))
    ]
    blocks: list[str] = [f"<!-- PDF page {page_number} -->"]
    text_items = merge_text_items([item for item in visible if item.kind == "text"])
    image_items = [item for item in visible if item.kind == "image"]
    all_items = sorted(text_items + image_items, key=lambda item: (item.top, item.left))

    current_lines: list[str] = []
    previous_top: float | None = None
    in_code = False

    def flush() -> None:
        if current_lines:
            blocks.append(" ".join(line.strip() for line in current_lines if line.strip()))
            current_lines.clear()

    def flush_code() -> None:
        nonlocal in_code
        if in_code:
            blocks.append("```")
            in_code = False

    for item in all_items:
        if item.kind == "image":
            flush()
            flush_code()
            asset_name = asset_names[item.source]  # type: ignore[index]
            blocks.append(f"![原 PDF 图像（第 {page_number} 页）](./assets/{asset_name})")
            previous_top = item.top
            continue

        if "Mono" in item.font_family:
            flush()
            if not in_code:
                blocks.append("```text")
                in_code = True
            blocks.append(item.value.strip())
            previous_top = item.top
            continue

        flush_code()

        if previous_top is not None and item.top - previous_top > 25:
            flush()
        current_lines.append(item.value)
        previous_top = item.top
    flush()
    flush_code()
    return "\n\n".join(blocks)


def chapter_starts(pages: list[list[Item]]) -> dict[int, int]:
    starts = {0: 1}
    pattern = re.compile(r"^(10|[1-9])\.\s+[A-Za-z]")
    for index, items in enumerate(pages, start=1):
        candidates = [item.value for item in items if 250 <= item.top <= 400]
        for value in candidates:
            plain_value = re.sub(r"[*_]", "", value)
            match = pattern.match(plain_value)
            if match:
                chapter = int(match.group(1))
                starts.setdefault(chapter, index)
    return starts


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", required=True)
    parser.add_argument("--output-dir", required=True)
    parser.add_argument("--draft-dir", required=True)
    parser.add_argument("--pdftohtml")
    args = parser.parse_args()

    pdf = Path(args.pdf).resolve()
    output_dir = Path(args.output_dir).resolve()
    draft_dir = Path(args.draft_dir).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    draft_dir.mkdir(parents=True, exist_ok=True)
    assets_dir = output_dir / "assets"
    assets_dir.mkdir(parents=True, exist_ok=True)

    executable = find_executable("pdftohtml.exe", args.pdftohtml)
    with tempfile.TemporaryDirectory(prefix="cs188-pdftohtml-") as temp_name:
        work_dir = Path(temp_name)
        xml_path = work_dir / "cs188.xml"
        subprocess.run(
            [
                str(executable),
                "-q",
                "-xml",
                "-hidden",
                "-noroundcoord",
                "-enc",
                "UTF-8",
                str(pdf),
                str(xml_path),
            ],
            check=True,
        )
        pages = parse_pages(xml_path)

        asset_names: dict[Path, str] = {}
        for page_number, items in enumerate(pages, start=1):
            image_number = 0
            for item in items:
                if item.kind != "image" or item.source is None:
                    continue
                image_number += 1
                name = f"p{page_number:03d}-image-{image_number:02d}.png"
                destination = assets_dir / name
                shutil.copyfile(item.source, destination)
                asset_names[item.source] = name

        starts = chapter_starts(pages)
        ordered = sorted(starts.items())
        for position, (chapter, first_page) in enumerate(ordered):
            last_page = ordered[position + 1][1] - 1 if position + 1 < len(ordered) else len(pages)
            sections = [page_markdown(page, pages[page - 1], asset_names) for page in range(first_page, last_page + 1)]
            draft_name = CHAPTER_FILES[chapter]
            (draft_dir / draft_name).write_text(
                "\n\n".join(sections) + "\n",
                encoding="utf-8",
            )

    print(f"pages={len(pages)}")
    print(f"chapters={len(starts) - 1}")
    print(f"images={len(asset_names)}")
    print("starts=" + ",".join(f"{chapter}:{page}" for chapter, page in sorted(starts.items())))


if __name__ == "__main__":
    main()
