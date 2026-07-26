# `fdh_claim_status_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fdh_claim_status_detail_id | int(11) | NO | PRI | 0 |  |  |
| fdh_claim_status_id | int(11) | YES |  | NULL |  |  |
| fdh_error_code | varchar(100) | YES |  | NULL |  |  |
| fdh_error_desc | varchar(255) | YES |  | NULL |  |  |
| fdh_error_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | fdh_claim_status_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "fdh_claim_status_detail_id": 1,
    "fdh_claim_status_id": 895,
    "fdh_error_code": "301",
    "fdh_error_desc": "ไม่มีค่าใช้จ่ายในการรักษา หรือ ค่ารักษาพยาบาลเป็นลบ",
    "fdh_error_status": "N"
  },
  {
    "fdh_claim_status_detail_id": 2,
    "fdh_claim_status_id": 910,
    "fdh_error_code": "349",
    "fdh_error_desc": "ไม่พบข้อมูลการ Authentication",
    "fdh_error_status": "N"
  },
  {
    "fdh_claim_status_detail_id": 3,
    "fdh_claim_status_id": 911,
    "fdh_error_code": "349",
    "fdh_error_desc": "ไม่พบข้อมูลการ Authentication",
    "fdh_error_status": "N"
  },
  {
    "fdh_claim_status_detail_id": 4,
    "fdh_claim_status_id": 912,
    "fdh_error_code": "301",
    "fdh_error_desc": "ไม่มีค่าใช้จ่ายในการรักษา หรือ ค่ารักษาพยาบาลเป็นลบ",
    "fdh_error_status": "N"
  },
  {
    "fdh_claim_status_detail_id": 5,
    "fdh_claim_status_id": 913,
    "fdh_error_code": "301",
    "fdh_error_desc": "ไม่มีค่าใช้จ่ายในการรักษา หรือ ค่ารักษาพยาบาลเป็นลบ",
    "fdh_error_status": "N"
  },
  {
    "fdh_claim_status_detail_id": 6,
    "fdh_claim_status_id": 914,
    "fdh_error_code": "349",
    "fdh_error_desc": "ไม่พบข้อมูลการ Authentication",
    "fdh_error_status": "N"
  },
  {
    "fdh_claim_status_detail_id": 7,
    "fdh_claim_status_id": 915,
    "fdh_error_code": "301",
    "fdh_error_desc": "ไม่มีค่าใช้จ่ายในการรักษา หรือ ค่ารักษาพยาบาลเป็นลบ",
    "fdh_error_status": "N"
  },
  {
    "fdh_claim_status_detail_id": 8,
    "fdh_claim_status_id": 920,
    "fdh_error_code": "804",
    "fdh_error_desc": "รหัสหัตถการใช้ไม่ได้ (ผิดหลักการให้ ICD9)",
    "fdh_error_status": "N"
  }
]
```
