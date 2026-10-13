import os
import urllib.request
import json

url = os.environ.get("ANTHROPIC_BASE_URL") + "/v1/messages"
headers = {
    "x-api-key": os.environ.get("ANTHROPIC_API_KEY"),
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
}
data = {
    "model": "gemini-3.1-pro-high",
    "max_tokens": 100,
    "messages": [{"role": "user", "content": "say hi"}]
}
req = urllib.request.Request(url, headers=headers, data=json.dumps(data).encode("utf-8"))
try:
    with urllib.request.urlopen(req) as response:
        print(response.read().decode("utf-8"))
except Exception as e:
    print(f"Error: {e}")
    if hasattr(e, "read"):
        print(e.read().decode("utf-8"))
