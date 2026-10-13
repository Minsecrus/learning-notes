import os
import urllib.request
import json
import time

url = os.environ.get("ANTHROPIC_BASE_URL") + "/v1/messages"
headers = {
    "x-api-key": os.environ.get("ANTHROPIC_API_KEY"),
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
}

data = {
    "model": "gemini-3.1-pro-high",
    "max_tokens": 8192,
    "temperature": 0.1,
    "messages": [{"role": "user", "content": "Please output the numbers 1 to 10."}]
}
req = urllib.request.Request(url, headers=headers, data=json.dumps(data).encode("utf-8"))

t0 = time.time()
try:
    with urllib.request.urlopen(req, timeout=600) as response:
        res_body = response.read().decode("utf-8")
        print(f"Success! Finished in {time.time()-t0:.1f}s")
        print(res_body)
except Exception as e:
    print(f"Error: {e}")
