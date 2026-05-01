# Hindu Festival API - DivineAPI

> Free **Hindu Festival API** for developers. 15+ REST endpoints for Hindu festival dates by Gregorian month, Hindu lunar month, or festival name, with festival images and fasting/parana times. Plain JSON over HTTPS, 25 languages, no SDK required.

[![Get API Key](https://img.shields.io/badge/Get%20API%20Key-cb22e6?style=for-the-badge&logoColor=white)](https://divineapi.com/register)
[![Live Docs](https://img.shields.io/badge/Live%20Docs-4F46E5?style=for-the-badge&logoColor=white)](https://developers.divineapi.com/indian-api/festival-api)
[![API Status](https://img.shields.io/badge/API%20Status-10b981?style=for-the-badge&logoColor=white)](https://status.divineapi.com)
[![14-Day Free Trial](https://img.shields.io/badge/14--Day%20Free%20Trial-039BE5?style=for-the-badge&logoColor=white)](https://divineapi.com/register)
[![Postman](https://img.shields.io/badge/Run%20in%20Postman-FF6C37?style=for-the-badge&logoColor=white)](https://documenter.getpostman.com/view/26759678/2sBXitCnDX)

<p align="center">
  <img src="https://developers.divineapi.com/public/assets/web/images/divineIcon.svg" alt="DivineAPI, Hindu Festival API for developers" width="120" />
</p>

---

## What is the Hindu Festival API?

The **Hindu Festival API** by DivineAPI is a suite of 15+ REST endpoints for Hindu festival calendars. Query by Gregorian month, by Hindu lunar month (Chaitra, Vaishakha, ... Phalguna), by specific date, or by festival name. Get back dates, fasting and parana (break-fast) times, and hosted festival images, ready to drop into a calendar or reminder app. Plain JSON over HTTPS, 25 languages, no SDK required.

Part of the broader [DivineAPI platform](https://github.com/DivineAPI/astrology-api) (300+ astrology, horoscope, tarot and numerology endpoints).

## Why choose DivineAPI's Hindu Festival API?

- **15+ REST endpoints** covering every major Hindu festival lookup pattern
- **Query three ways**: by Gregorian month, by Hindu lunar month, or by festival name
- **Parana (fasting break) times** for Ekadashi, Pradosha, and other vrats
- **Hosted festival images** included in every response, ready to embed
- **Accurate calculations** with Smartas and Vaishnavas tradition variants
- **Global coverage**: festivals calculated for any latitude/longitude/timezone
- **25-language output**: English, Hindi, Sanskrit, and more
- **No SDK lock-in**: plain JSON over HTTPS, works with every language
- **Live status page**: uptime monitored at [status.divineapi.com](https://status.divineapi.com)

## All endpoints in the Hindu Festival API

### General Festival Lookups

| Endpoint | Docs |
|---|---|
| English Calendar Specific Festivals | [link](https://developers.divineapi.com/indian-api/festival-api/english-calendar-specific) |
| Date Specific Festivals | [link](https://developers.divineapi.com/indian-api/festival-api/date-specific-festivals) |
| Festival Specific (lookup by name) | [link](https://developers.divineapi.com/indian-api/festival-api/festival-specific) |

### Hindu Lunar Months (Jan - Jun)

| Endpoint | Docs |
|---|---|
| Find Magha Festivals (Jan - Feb) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-magha-festivals) |
| Find Phalguna Festivals (Feb - Mar) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-phalguna-festivals) |
| Find Chaitra Festivals (Mar - Apr) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-chaitra-festivals) |
| Find Vaishakha Festivals (Apr - May) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-vaishakha-festivals) |
| Find Jyeshtha Festivals (May - Jun) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-jyeshtha-festivals) |
| Find Ashadha Festivals (Jun - Jul) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-ashadha-festivals) |

### Hindu Lunar Months (Jul - Dec)

| Endpoint | Docs |
|---|---|
| Find Shravana Festivals (Jul - Aug) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-shravana-festivals) |
| Find Bhadrapada Festivals (Aug - Sep) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-bhadrapada-festivals) |
| Find Ashwin Festivals (Sep - Oct) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-ashwin-festivals) |
| Find Kartik Festivals (Oct - Nov) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-kartik-festivals) |
| Find Margashirsha Festivals (Nov - Dec) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-margashirsha-festivals) |
| Find Paush Festivals (Dec - Jan) | [link](https://developers.divineapi.com/indian-api/festival-api/hindu-calendar-specific/find-paush-festivals) |

Full reference, request/response samples, and live "try-it" console → **[developers.divineapi.com/indian-api/festival-api](https://developers.divineapi.com/indian-api/festival-api)**

---

## Quick start

1. **Get your API key** → [divineapi.com/register](https://divineapi.com/register) (14-day free trial, no credit card)
2. **Make your first call** - see the walkthrough below
3. **Browse all endpoints** → [developers.divineapi.com/indian-api/festival-api](https://developers.divineapi.com/indian-api/festival-api)

---

## Walkthrough: English Calendar Specific Festivals

The flagship endpoint. Give a Gregorian year and month, get back every Hindu festival in that window with dates, fasting/parana times (where applicable), and image URLs.

```http
POST https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals
```

Authenticate with a Bearer token in the `Authorization` header **and** pass `api_key` in the request body (both required).

### Request body

| Parameter | Type | Required | Description | Example |
|---|---|:---:|---|---|
| `api_key` | string | ✓ | Your DivineAPI key | `YOUR_API_KEY` |
| `year` | integer | ✓ | Gregorian year | `2025` |
| `month` | integer | ✓ | Gregorian month (1-12) | `11` |
| `place` | string | - | Place name (optional) | `New Delhi` |
| `lat` | float | ✓ | Latitude | `28.7041` |
| `lon` | float | ✓ | Longitude | `77.1025` |
| `tzone` | float | ✓ | Timezone offset from UTC | `5.5` |

Full docs → **[developers.divineapi.com/indian-api/festival-api/english-calendar-specific/english-calendar-specific-festivals-api](https://developers.divineapi.com/indian-api/festival-api/english-calendar-specific)**

### Sample response

```json
{
  "success": 1,
  "data": {
    "kalabhairav_jayanti": {
      "date": "2023-12-05",
      "image": "https://astroapi-6.divineapi.com/public/assets/vedic/festivals/images/main/Kaal Bhairava Jayanti.png"
    },
    "utpanna_ekadashi": {
      "smartas": {
        "date": "2023-12-08",
        "parana": {
          "start_time": "2023-12-09 13:07:29",
          "end_time":   "2023-12-09 15:13:29"
        },
        "image": "https://astroapi-6.divineapi.com/public/assets/vedic/festivals/images/main/Utpanna Ekadashi.png"
      },
      "vaishnavas": {
        "date": "2023-12-09",
        "parana": {
          "start_time": "2023-12-10 06:53:11",
          "end_time":   "2023-12-10 07:13:00"
        },
        "image": "https://astroapi-6.divineapi.com/public/assets/vedic/festivals/images/main/Utpanna Ekadashi.png"
      }
    },
    "vivah_panchanmi": {
      "date": "2023-12-17",
      "image": "https://astroapi-6.divineapi.com/public/assets/vedic/festivals/images/main/Vivah Panchanmi.png"
    }
    // ... all other festivals in the month, keyed by festival name
  }
}
```

Note: fasting days like Ekadashi and Pradosha return both `smartas` and `vaishnavas` tradition variants with their own dates and parana windows.

---

## Code examples

### cURL

```bash
curl -X POST "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "api_key=YOUR_API_KEY" \
  --data-urlencode "year=2025" \
  --data-urlencode "month=11" \
  --data-urlencode "place=New Delhi" \
  --data-urlencode "lat=28.7041" \
  --data-urlencode "lon=77.1025" \
  --data-urlencode "tzone=5.5"
```

### Python (requests)

```python
import requests

url = "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals"

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/x-www-form-urlencoded",
}

payload = {
    "api_key": "YOUR_API_KEY",
    "year":    2025,
    "month":   11,
    "place":   "New Delhi",
    "lat":     28.7041,
    "lon":     77.1025,
    "tzone":   5.5,
}

response = requests.post(url, headers=headers, data=payload)
print(response.json())
```

### JavaScript (browser, fetch)

```javascript
const url = "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals";

const body = new URLSearchParams({
  api_key: "YOUR_API_KEY",
  year:  2025,
  month: 11,
  place: "New Delhi",
  lat:   28.7041,
  lon:   77.1025,
  tzone: 5.5,
});

const response = await fetch(url, {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type":  "application/x-www-form-urlencoded",
  },
  body,
});

const data = await response.json();
console.log(data);
```

### Node.js (fetch, Node 18+)

```javascript
// Node.js 18+ ships with fetch built-in, no dependencies needed.

async function getFestivals() {
  const url = "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals";

  const body = new URLSearchParams({
    api_key: "YOUR_API_KEY",
    year:  2025,
    month: 11,
    place: "New Delhi",
    lat:   28.7041,
    lon:   77.1025,
    tzone: 5.5,
  });

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type":  "application/x-www-form-urlencoded",
    },
    body,
  });

  const data = await res.json();
  console.log(data);
}

getFestivals();
```

### PHP (curl)

```php
<?php
$url = "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals";

$payload = http_build_query([
    "api_key" => "YOUR_API_KEY",
    "year"    => 2025,
    "month"   => 11,
    "place"   => "New Delhi",
    "lat"     => 28.7041,
    "lon"     => 77.1025,
    "tzone"   => 5.5,
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/x-www-form-urlencoded",
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
```

### Go (net/http)

```go
package main

import (
    "fmt"
    "io"
    "net/http"
    "net/url"
    "strings"
)

func main() {
    endpoint := "https://astroapi-3.divineapi.com/indian-api/v1/english-calendar-festivals"

    form := url.Values{}
    form.Set("api_key", "YOUR_API_KEY")
    form.Set("year",    "2025")
    form.Set("month",   "11")
    form.Set("place",   "New Delhi")
    form.Set("lat",     "28.7041")
    form.Set("lon",     "77.1025")
    form.Set("tzone",   "5.5")

    req, _ := http.NewRequest("POST", endpoint, strings.NewReader(form.Encode()))
    req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Set("Content-Type",  "application/x-www-form-urlencoded")

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}
```

---

## Other APIs by DivineAPI

[![Astrology API (hub)](https://img.shields.io/badge/Astrology%20API%20(hub)-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/astrology-api)
[![Kundali API](https://img.shields.io/badge/Kundali%20API-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/kundali-api)
[![Birth Chart API](https://img.shields.io/badge/Birth%20Chart%20API-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/birth-chart-api)
[![Panchang API](https://img.shields.io/badge/Panchang%20API-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/panchang-api)
[![Numerology API](https://img.shields.io/badge/Numerology%20API-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/numerology-api)
[![Horoscope API](https://img.shields.io/badge/Horoscope%20API-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/horoscope-api)
[![Daily Tarot](https://img.shields.io/badge/Daily%20Tarot-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/daily-tarot)
[![Yes or No Tarot](https://img.shields.io/badge/Yes%20or%20No%20Tarot-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/yes-or-no-tarot)
[![Fortune Cookie](https://img.shields.io/badge/Fortune%20Cookie-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/fortune-cookie)
[![Coffee Cup Reading](https://img.shields.io/badge/Coffee%20Cup%20Reading-cb22e6?style=for-the-badge&logoColor=white)](https://github.com/DivineAPI/coffee-cup-reading)

---

## Resources

- **Full documentation** → [developers.divineapi.com/indian-api/festival-api](https://developers.divineapi.com/indian-api/festival-api)
- **Parent platform README** → [github.com/DivineAPI/astrology-api](https://github.com/DivineAPI/astrology-api)
- **API status** → [status.divineapi.com](https://status.divineapi.com)
- **Postman collection** → [Run in Postman](https://documenter.getpostman.com/view/26759678/2sBXitCnDX)
- **Changelog** → [developers.divineapi.com/changelog](https://developers.divineapi.com/changelog)
- **Support** → [admin@divineapi.com](mailto:admin@divineapi.com)

---

## License & Usage

Code samples on this page are free to copy into your own projects, no attribution required. Marketing copy, logos, and the **DivineAPI** name are © 2026 DivineAPI, all rights reserved.

For the terms that govern the API service itself, see [divineapi.com/terms](https://divineapi.com/terms-service).

## Contact

Questions, feature requests or partnership enquiries → **[admin@divineapi.com](mailto:admin@divineapi.com)**
