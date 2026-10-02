"""DivineAPI example: all Hindu festivals in the current month for New Delhi, with the date of each.

Docs: https://developers.divineapi.com/indian-api/festival-api/english-calendar-specific
Run:  pip install requests
      export DIVINEAPI_API_KEY=... DIVINEAPI_AUTH_TOKEN=...
      python quickstart.py
"""
import os
import sys
from datetime import date

import requests

URL = "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals"
API_KEY = os.environ.get("DIVINEAPI_API_KEY")
AUTH_TOKEN = os.environ.get("DIVINEAPI_AUTH_TOKEN")
if not API_KEY or not AUTH_TOKEN:
    sys.exit("Set DIVINEAPI_API_KEY and DIVINEAPI_AUTH_TOKEN (see .env.example)")

today = date.today()

fields = {
    "api_key": API_KEY,
    "year": today.strftime("%Y"),
    "month": today.strftime("%m"),
    "place": "new delhi",
    "lat": "28.6139",
    "lon": "77.2090",
    "tzone": "5.5",
}

# files= sends multipart/form-data, which every DivineAPI endpoint expects
resp = requests.post(
    URL,
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    files={k: (None, v) for k, v in fields.items()},
    timeout=60,
)
body = resp.json()
if body.get("success") != 1:  # legacy hosts return HTTP 200 even on errors
    sys.exit(f"API error: {body.get('msg', body)}")

def first_date(value):
    """Festival shapes vary: {date}, a list of days, or smartas/vaishnavas variants."""
    if isinstance(value, list):
        return first_date(value[0])
    if "date" in value:
        return value["date"]
    return first_date(next(iter(value.values())))


for name, value in body["data"].items():
    print(first_date(value), name)
