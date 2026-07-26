# `risk_is_smoking`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_is_smoking_id | int(11) | NO | PRI | 0 |  |  |
| risk_is_smoking_name | varchar(50) | YES |  | NULL |  |  |
| risk_is_smoking_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_is_smoking_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "risk_is_smoking_id": 10,
    "risk_is_smoking_name": "ไม่สูบ",
    "risk_is_smoking_code": "0",
    "hos_guid": null
  },
  {
    "risk_is_smoking_id": 20,
    "risk_is_smoking_name": "สูบ",
    "risk_is_smoking_code": "1",
    "hos_guid": null
  },
  {
    "risk_is_smoking_id": 30,
    "risk_is_smoking_name": "เคยสูบแต่เลิกแล้ว",
    "risk_is_smoking_code": "9",
    "hos_guid": null
  }
]
```
