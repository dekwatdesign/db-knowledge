# `risk_condom_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_condom_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_condom_name | varchar(50) | YES |  | NULL |  |  |
| risk_condom_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_condom_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "risk_condom_type_id": 10,
    "risk_condom_name": "ใช้ทุกครั้ง",
    "risk_condom_code": "0",
    "hos_guid": null
  },
  {
    "risk_condom_type_id": 20,
    "risk_condom_name": "ใช้เมื่อถูกขอร้อง",
    "risk_condom_code": "1",
    "hos_guid": null
  },
  {
    "risk_condom_type_id": 30,
    "risk_condom_name": "ไม่ใช้",
    "risk_condom_code": "2",
    "hos_guid": null
  },
  {
    "risk_condom_type_id": 40,
    "risk_condom_name": "ไม่เคยมีเพศสัมพันธ์กับผู้ที่ไม่ใช่สามีหรือภรรยาของ",
    "risk_condom_code": "3",
    "hos_guid": null
  },
  {
    "risk_condom_type_id": 50,
    "risk_condom_name": "ไม่ตอบ",
    "risk_condom_code": "9",
    "hos_guid": null
  }
]
```
