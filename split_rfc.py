# -*- coding: utf-8 -*-
"""Split g-rfc-9293-tcp-zh.md into a multi-page VitePress section under rfc9293/."""
import re
import os
import shutil
import sys

io_enc = 'utf-8'
SRC = 'notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/g-rfc-9293-tcp-zh.md'
OUT_DIR = 'notes/2026/08/04/tcp-from-zero-to-diagnostics/08-appendices/rfc9293'

with open(SRC, 'r', encoding=io_enc) as f:
    content = f.read()

# ---- 1. Split into chunks -------------------------------------------------
# Split before every "## " (h2) line, but not "### " (h3).
parts = re.split(r'(?m)(?=^## (?!#))', content)
parts = [p.strip('\n') for p in parts if p.strip()]

# Map: header-regex -> (filename, frontmatter title override or None)
TOP_MAP = [
    (r'^## 1\.',   '01-purpose-and-scope.md'),
    (r'^## 2\.',   '02-introduction.md'),
    (r'^## 4\.',   '04-glossary.md'),
    (r'^## 5\.',   '05-changes-from-rfc-793.md'),
    (r'^## 6\.',   '06-iana-considerations.md'),
    (r'^## 7\.',   '07-security-and-privacy.md'),
    (r'^## 8\.',   '08-references.md'),
    (r'^## 附录 A', 'appendix-a.md'),
    (r'^## 附录 B', 'appendix-b.md'),
    (r'^## 致谢',   'acknowledgments.md'),
    (r'^## 作者地址', 'authors-address.md'),
]
SEC3_MAP = {
    '3.1':  '03-01-header-format.md',
    '3.2':  '03-02-specific-options.md',
    '3.3':  '03-03-terminology.md',
    '3.4':  '03-04-sequence-numbers.md',
    '3.5':  '03-05-establishing-a-connection.md',
    '3.6':  '03-06-closing-a-connection.md',
    '3.7':  '03-07-segmentation.md',
    '3.8':  '03-08-data-communication.md',
    '3.9':  '03-09-interfaces.md',
    '3.10': '03-10-event-processing.md',
}

chunks = []          # list of dicts: {filename, title, body}
sec3_subs = []       # (num, title) for landing-page nav

index_body = []       # preamble pieces (incl. 阅读导航/元数据/摘要/版权 h2 sections)
seen_mapped = False

for part in parts:
    first_line = part.split('\n', 1)[0].strip()
    is_known = first_line.startswith('## 3.') or any(
        re.match(rx, first_line) for rx, _ in TOP_MAP)
    if not is_known:
        if seen_mapped:
            print('UNMAPPED CHUNK AFTER CONTENT START:', first_line)
            sys.exit(1)
        index_body.append(part)
        continue
    seen_mapped = True
    if first_line.startswith('## 3.'):
        # Split chapter 3 further at "### 3.x." boundaries
        subs = re.split(r'(?m)(?=^### 3\.\d+\.)', part)
        head = subs[0].strip('\n')   # "## 3. 功能规范" + anchor, no real text
        for sub in subs[1:]:
            sub = sub.strip('\n')
            m = re.match(r'^### (3\.\d+)\.\s*(.+)', sub)
            num, ttl = m.group(1), m.group(2).strip()
            fname = SEC3_MAP[num]
            # Promote the first heading from ### to ##
            sub = re.sub(r'^### ', '## ', sub, count=1)
            chunks.append({'filename': fname, 'title': f'{num}. {ttl}',
                           'body': sub, 'has_frontmatter': False})
            sec3_subs.append((num, ttl, fname))
        # Landing page for chapter 3
        nav = '\n'.join(f'- [{n}. {t}](./{f})' for n, t, f in sec3_subs)
        landing = head + '\n\n本章拆分为以下小节：\n\n' + nav
        chunks.append({'filename': '03-functional-specification.md',
                       'title': '3. 功能规范', 'body': landing,
                       'has_frontmatter': False})
        continue
    fname = None
    for rx, fn in TOP_MAP:
        if re.match(rx, first_line):
            fname = fn
            break
    if fname is None:
        print('UNMAPPED CHUNK:', first_line)
        sys.exit(1)
    title = first_line.lstrip('#').strip()
    chunks.append({'filename': fname, 'title': title,
                   'body': part, 'has_frontmatter': False})

# Insert the merged preamble as the index page, preserving original order
chunks.insert(0, {'filename': 'index.md', 'title': None,
                  'body': '\n\n'.join(index_body), 'has_frontmatter': True})

# ---- 2. Anchor -> file map ------------------------------------------------
anchor_file = {}
for c in chunks:
    for m in re.finditer(r'<a id="([^"]+)"\s*></a>', c['body']):
        anchor_file[m.group(1)] = c['filename']

# ---- 3. Rewrite cross-file internal links ---------------------------------
link_rx = re.compile(r'\]\(#([A-Za-z0-9_-]+)\)')
for c in chunks:
    def repl(m, cur=c['filename']):
        target = anchor_file.get(m.group(1))
        if target and target != cur:
            return f'](./{target}#{m.group(1)})'
        return m.group(0)
    c['body'] = link_rx.sub(repl, c['body'])

# ---- 4. Emit files --------------------------------------------------------
if os.path.exists(OUT_DIR):
    shutil.rmtree(OUT_DIR)
os.makedirs(OUT_DIR)

for c in chunks:
    body = c['body']
    if not c['has_frontmatter']:
        fm = f"---\ntitle: {c['title']}\noutline: deep\nlastUpdated: false\n---\n\n"
        body = fm + body
    with open(os.path.join(OUT_DIR, c['filename']), 'w', encoding=io_enc) as f:
        f.write(body + '\n')
    print('wrote', c['filename'])

print('total:', len(chunks))
