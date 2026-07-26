# `risk_drink_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_drink_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_drink_name | varchar(50) | YES |  | NULL |  |  |
| risk_drink_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_drink_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "risk_drink_type_id": 10,
    "risk_drink_name": "ไม่ดื่ม",
    "risk_drink_code": "0",
    "hos_guid": null
  },
  {
    "risk_drink_type_id": 20,
    "risk_drink_name": "ดื่ม",
    "risk_drink_code": "1",
    "hos_guid": null
  },
  {
    "risk_drink_type_id": 30,
    "risk_drink_name": "เคยดื่มแต่เลิกแล้ว",
    "risk_drink_code": "9",
    "hos_guid": null
  }
]
```
