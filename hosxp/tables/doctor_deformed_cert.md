# `doctor_deformed_cert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_deformed_cert_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| cert_date | date | YES |  | NULL |  |  |
| found_deformed | char(1) | YES |  | NULL |  |  |
| doctor_deformed_status_id | int(11) | YES |  | NULL |  |  |
| doctor_deformed_status_text | text | YES |  | NULL |  |  |
| cert_time | time | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| doctor_cert_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_cert_id | doctor_cert_id | no | 1 |
| PRIMARY | doctor_deformed_cert_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "doctor_deformed_cert_id": 1,
    "hn": "610000386",
    "doctor_code": "187",
    "cert_date": "2024-08-01",
    "found_deformed": "Y",
    "doctor_deformed_status_id": 1,
    "doctor_deformed_status_text": "ทอลองการออกเอกสาร",
    "cert_time": "11:31:36",
    "update_datetime": "2024-08-01 11:33:16",
    "doctor_cert_id": 7132,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "doctor_deformed_cert_id": 3,
    "hn": "610000386",
    "doctor_code": "068",
    "cert_date": "2025-02-07",
    "found_deformed": "Y",
    "doctor_deformed_status_id": 1,
    "doctor_deformed_status_text": "ทอลองการออกเอกสาร",
    "cert_time": "13:15:14",
    "update_datetime": "2025-02-07 13:17:16",
    "doctor_cert_id": 7158,
    "staff": "[MASKED_FULLNAME]"
  }
]
```
