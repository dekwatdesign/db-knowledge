# `blb_pay_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_pay_status_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_pay_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "blb_pay_status_id": 1,
    "blb_pay_status_name": "จอง"
  },
  {
    "blb_pay_status_id": 2,
    "blb_pay_status_name": "พร้อมจ่าย"
  },
  {
    "blb_pay_status_id": 3,
    "blb_pay_status_name": "จ่ายแล้ว"
  },
  {
    "blb_pay_status_id": 4,
    "blb_pay_status_name": "Cross-match ไม่ผ่าน"
  },
  {
    "blb_pay_status_id": 5,
    "blb_pay_status_name": "ด่วนมาก ไม่รอ Cross-match"
  },
  {
    "blb_pay_status_id": 6,
    "blb_pay_status_name": "เบิก"
  },
  {
    "blb_pay_status_id": 7,
    "blb_pay_status_name": "คืน"
  }
]
```
