import re

with open(r"D:\Projects\learning-notes\notes\2026\08\04\tcp-from-zero-to-diagnostics\08-appendices\g-rfc-9293-tcp-zh.md", "r", encoding="utf-8") as f:
    content = f.read()

# Find all heading levels 2 and 3
headings = []
for m in re.finditer(r'\n(##{1,2} [^\n]+)', content):
    headings.append((m.start(), m.group(1)))

print(f"Total length: {len(content)}")
print(f"Number of h2/h3 headings: {len(headings)}")
for h in headings[:10]:
    print(h)
