<?php
// DivineAPI example: all Hindu festivals in the current month for New Delhi, with the date of each.
// Docs: https://developers.divineapi.com/indian-api/festival-api/english-calendar-specific
// Run (PHP 8.1+ with the curl extension):
//   export DIVINEAPI_API_KEY=... DIVINEAPI_AUTH_TOKEN=...   then   php quickstart.php

$url = "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals";
$apiKey = getenv("DIVINEAPI_API_KEY");
$authToken = getenv("DIVINEAPI_AUTH_TOKEN");
if (!$apiKey || !$authToken) {
    fwrite(STDERR, "Set DIVINEAPI_API_KEY and DIVINEAPI_AUTH_TOKEN (see .env.example)\n");
    exit(1);
}

$fields = [
    "api_key" => $apiKey,
    "year" => date("Y"),
    "month" => date("m"),
    "place" => "new delhi",
    "lat" => "28.6139",
    "lon" => "77.2090",
    "tzone" => "5.5",
];

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $fields, // an array makes cURL send multipart/form-data
    CURLOPT_HTTPHEADER     => ["Authorization: Bearer " . $authToken],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 60,
]);
$body = json_decode(curl_exec($ch), true);
curl_close($ch);

if (($body["success"] ?? 0) !== 1) { // legacy hosts return HTTP 200 even on errors
    fwrite(STDERR, "API error: " . json_encode($body["msg"] ?? $body) . "\n");
    exit(1);
}

// Festival shapes vary: {date}, a list of days, or smartas/vaishnavas variants.
function first_date($v) {
    if (array_is_list($v)) return first_date($v[0]);
    if (isset($v["date"])) return $v["date"];
    return first_date(reset($v));
}

foreach ($body["data"] as $name => $value) {
    echo first_date($value), " ", $name, PHP_EOL;
}
