# `risk_taste_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_taste_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_taste_name | varchar(50) | YES |  | NULL |  |  |
| risk_taste_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_taste_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "risk_taste_type_id": 10,
    "risk_taste_name": "หวาน",
    "risk_taste_code": "1",
    "hos_guid": null
  },
  {
    "risk_taste_type_id": 20,
    "risk_taste_name": "เค็ม",
    "risk_taste_code": "2",
    "hos_guid": null
  },
  {
    "risk_taste_type_id": 30,
    "risk_taste_name": "มัน",
    "risk_taste_code": "3",
    "hos_guid": null
  },
  {
    "risk_taste_type_id": 40,
    "risk_taste_name": "ไม่ชอบทุกข้อ",
    "risk_taste_code": "4",
    "hos_guid": null
  }
]
```
