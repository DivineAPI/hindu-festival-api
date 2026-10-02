#!/usr/bin/env bash
# DivineAPI example: all Hindu festivals in the current month for New Delhi, with the date of each.
# Docs: https://developers.divineapi.com/indian-api/festival-api/english-calendar-specific
# Run:  export DIVINEAPI_API_KEY=... DIVINEAPI_AUTH_TOKEN=...   then   bash curl.sh
set -euo pipefail

API_KEY="${DIVINEAPI_API_KEY:?Set DIVINEAPI_API_KEY (see .env.example)}"
AUTH_TOKEN="${DIVINEAPI_AUTH_TOKEN:?Set DIVINEAPI_AUTH_TOKEN (see .env.example)}"

DAY=$(date +%d); MONTH=$(date +%m); YEAR=$(date +%Y)   # today's date

response=$(curl -s -X POST "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals" \
  -H "Authorization: Bearer ${AUTH_TOKEN}" \
  -F "api_key=${API_KEY}" \
  -F "year=${YEAR}" \
  -F "month=${MONTH}" \
  -F "place=new delhi" \
  -F "lat=28.6139" \
  -F "lon=77.2090" \
  -F "tzone=5.5")

# Legacy hosts answer HTTP 200 even on errors: check "success" in the body (1 = OK).
if ! printf '%s' "$response" | grep -Eq '"success": ?1[,}]'; then
  echo "API error: $response" >&2
  exit 1
fi

if command -v jq >/dev/null 2>&1; then
  printf '%s' "$response" | jq .
else
  printf '%s\n' "$response"
fi
