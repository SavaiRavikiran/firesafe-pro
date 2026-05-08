# FireSafe Pro IoT Integration API

## Webhook Endpoint

`POST /api/iot/webhook`

### Required Headers

- `x-api-key`: Partner API key issued via FireSafe Pro admin.
- `content-type: application/json`

### Sample Payload

```json
{
  "premiseId": "cuid_here",
  "timestamp": "2026-03-26T10:00:00.000Z",
  "smokeLevel": 62,
  "temperatureC": 48.3,
  "alarm": true
}
```

### Response

- `202 Accepted` when data is queued for processing.
