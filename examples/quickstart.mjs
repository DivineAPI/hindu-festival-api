// DivineAPI example: all Hindu festivals in the current month for New Delhi, with the date of each.
// Docs: https://developers.divineapi.com/indian-api/festival-api/english-calendar-specific
// Run (Node 18+):  export DIVINEAPI_API_KEY=... DIVINEAPI_AUTH_TOKEN=...   then   node quickstart.mjs
// Node 20.6+ can also read the .env file:   node --env-file=.env quickstart.mjs

const URL = "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals";
const API_KEY = process.env.DIVINEAPI_API_KEY;
const AUTH_TOKEN = process.env.DIVINEAPI_AUTH_TOKEN;
if (!API_KEY || !AUTH_TOKEN) {
  console.error("Set DIVINEAPI_API_KEY and DIVINEAPI_AUTH_TOKEN (see .env.example)");
  process.exit(1);
}

const now = new Date();
const pad = (n) => String(n).padStart(2, "0");

const fields = {
  api_key: API_KEY,
  year: String(now.getFullYear()),
  month: pad(now.getMonth() + 1),
  place: "new delhi",
  lat: "28.6139",
  lon: "77.2090",
  tzone: "5.5",
};
const form = new FormData(); // multipart/form-data, which every DivineAPI endpoint expects
for (const [k, v] of Object.entries(fields)) form.append(k, v);

const res = await fetch(URL, {
  method: "POST",
  headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
  body: form,
});
const body = await res.json();
// legacy hosts return HTTP 200 even on errors: check "success" in the body
if (body.success !== 1) {
  console.error("API error:", JSON.stringify(body.msg ?? body));
  process.exitCode = 1;
} else {
  printResult(body);
}

function printResult(body) {
  // Festival shapes vary: {date}, a list of days, or smartas/vaishnavas variants.
  const firstDate = (v) =>
    Array.isArray(v) ? firstDate(v[0]) : v.date ?? firstDate(Object.values(v)[0]);

  for (const [name, value] of Object.entries(body.data)) {
    console.log(firstDate(value), name);
  }
}
