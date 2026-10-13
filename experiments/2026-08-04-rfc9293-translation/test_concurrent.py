import os
import urllib.request
import json
import concurrent.futures
import time

url = os.environ.get("ANTHROPIC_BASE_URL") + "/v1/messages"
headers = {
    "x-api-key": os.environ.get("ANTHROPIC_API_KEY"),
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
}

def make_call(i):
    data = {
        "model": "gemini-3.1-pro-high",
        "max_tokens": 100,
        "messages": [{"role": "user", "content": f"say hi {i}"}]
    }
    req = urllib.request.Request(url, headers=headers, data=json.dumps(data).encode("utf-8"))
    try:
        t0 = time.time()
        with urllib.request.urlopen(req) as response:
            res = response.read().decode("utf-8")
        return time.time() - t0
    except Exception as e:
        return str(e)

with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
    results = list(executor.map(make_call, range(5)))
print(results)
