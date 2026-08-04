import os
import urllib.request
import json
import re
import time
import sys

filepath = r"D:\Projects\learning-notes\notes\2026\08\04\tcp-from-zero-to-diagnostics\08-appendices\g-rfc-9293-tcp-zh.md"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

chunks = []
current_chunk = []
current_length = 0
in_code_block = False

for line in content.splitlines(True):
    if line.strip().startswith('```'):
        in_code_block = not in_code_block

    if not in_code_block and re.match(r'^#{2,3} ', line) and current_length > 8000:
        chunks.append("".join(current_chunk))
        current_chunk = [line]
        current_length = len(line)
    else:
        current_chunk.append(line)
        current_length += len(line)

if current_chunk:
    chunks.append("".join(current_chunk))

print(f"Split into {len(chunks)} chunks.", flush=True)

url = os.environ.get("ANTHROPIC_BASE_URL") + "/v1/messages"
headers = {
    "x-api-key": os.environ.get("ANTHROPIC_API_KEY"),
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
}

def polish_chunk(index, chunk_text):
    prompt = """You are an expert technical editor and Chinese localization specialist.
Rewrite the following Markdown text (which is a section from an RFC 9293 TCP translation) to eliminate "translationese" (翻译腔), break excessively long sentences, convert awkward passive voice into natural active voice, and ensure technical terms (like Sequence Number, Congestion Control, Segment, Window) are used idiomatically by Chinese developers.
Make the language highly readable, conversational, and natural for a native Chinese reader, suitable for a high-quality technical blog or tutorial.

IMPORTANT:
- Preserve ALL Markdown formatting perfectly (including headings, lists, bold, italics, tables, and HTML tags like <details> or <a>).
- Preserve ALL code blocks perfectly. DO NOT translate English text inside code blocks unless it is obviously a translatable comment.
- Preserve ALL links and their URLs exactly as they are.
- Do not remove any technical information, explanations, or conceptual depth.
- ONLY output the rewritten text. Do not include introductory or concluding conversational filler (e.g. "Here is the rewritten text:").
- Keep the overall structural hierarchy exactly the same. Do not add markdown code fences (```markdown) around your output if the input doesn't have them at the boundary.

Text to polish:
""" + chunk_text

    data = {
        "model": "gemini-3.1-pro-high",
        "max_tokens": 8192,
        "temperature": 0.2,
        "messages": [{"role": "user", "content": prompt}]
    }

    max_retries = 3
    for attempt in range(max_retries):
        try:
            print(f"Processing chunk {index+1}/{len(chunks)} (attempt {attempt+1})... length {len(chunk_text)}", flush=True)
            req = urllib.request.Request(url, headers=headers, data=json.dumps(data).encode("utf-8"))
            t0 = time.time()
            with urllib.request.urlopen(req, timeout=300) as response:
                res_body = response.read().decode("utf-8")
                res_json = json.loads(res_body)
                polished = res_json["content"][0]["text"]

                if polished.startswith("```markdown\n") and polished.endswith("```") and not chunk_text.startswith("```markdown"):
                    polished = polished[12:-3].strip() + "\n"
                elif polished.startswith("```\n") and polished.endswith("```") and not chunk_text.startswith("```\n"):
                    polished = polished[4:-3].strip() + "\n"

                print(f"Chunk {index+1} finished in {time.time()-t0:.1f}s, new length {len(polished)}", flush=True)
                with open(f"chunk_{index}.md", "w", encoding="utf-8") as f_out:
                    f_out.write(polished)
                return polished
        except Exception as e:
            err_msg = str(e)
            if hasattr(e, "read"):
                err_msg += " " + e.read().decode("utf-8")
            print(f"Error on chunk {index+1}, attempt {attempt+1}: {err_msg}", flush=True)
            time.sleep(10)

    print(f"Failed to process chunk {index+1}, returning original text.", flush=True)
    return chunk_text

polished_chunks = []
for i, chunk in enumerate(chunks):
    chunk_file = f"chunk_{i}.md"
    if os.path.exists(chunk_file):
        print(f"Chunk {i+1} already processed, skipping...", flush=True)
        with open(chunk_file, "r", encoding="utf-8") as f:
            polished_chunks.append(f.read())
    else:
        polished = polish_chunk(i, chunk)
        polished_chunks.append(polished)

final_text = "".join(polished_chunks)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(final_text)

print("Finished rewriting and saved to file.", flush=True)
