import os
import urllib.request
import json
import re
import time

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

print(f"Split into {len(chunks)} chunks.")
for i, c in enumerate(chunks):
    print(f"Chunk {i+1}: length {len(c)}")

# Test processing the first chunk
url = os.environ.get("ANTHROPIC_BASE_URL") + "/v1/messages"
headers = {
    "x-api-key": os.environ.get("ANTHROPIC_API_KEY"),
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
}

prompt = """You are an expert technical editor and Chinese localization specialist.
Rewrite the following Markdown text (which is a section from an RFC 9293 TCP translation) to eliminate "translationese" (翻译腔), break excessively long sentences, convert awkward passive voice into natural active voice, and ensure technical terms (like Sequence Number, Congestion Control, Segment, Window) are used idiomatically by Chinese developers.
Make the language highly readable, conversational, and natural for a native Chinese reader, suitable for a high-quality technical blog or tutorial.

IMPORTANT:
- Preserve ALL Markdown formatting (including headings, lists, bold, italics, tables, and HTML tags like <details> or <a>).
- Preserve ALL code blocks Perfectly. DO NOT translate English text inside code blocks unless it is obviously a translatable comment.
- Preserve ALL links and their URLs.
- Do not remove any technical information, explanations, or conceptual depth.
- ONLY output the rewritten text. Do not include introductory or concluding conversational filler.
- Keep the overall structural hierarchy exactly the same.

Text to polish:
""" + chunks[0]

data = {
    "model": "gemini-3.1-pro-high",
    "max_tokens": 8192,
    "temperature": 0.1,
    "messages": [{"role": "user", "content": prompt}]
}
req = urllib.request.Request(url, headers=headers, data=json.dumps(data).encode("utf-8"))

try:
    print("Testing first chunk...")
    t0 = time.time()
    with urllib.request.urlopen(req, timeout=120) as response:
        res_body = response.read().decode("utf-8")
        res_json = json.loads(res_body)
        polished = res_json["content"][0]["text"]
        print(f"Success! Finished in {time.time()-t0:.1f}s")
        print(f"Original length: {len(chunks[0])}, Polished length: {len(polished)}")
        with open("chunk0_test.md", "w", encoding="utf-8") as f:
            f.write(polished)
except Exception as e:
    print(f"Error: {e}")
    if hasattr(e, "read"):
        print(e.read().decode("utf-8"))
