# `risk_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_pttype_id | int(11) | NO | PRI | 0 |  |  |
| risk_pttype_name | varchar(50) | YES |  | NULL |  |  |
| risk_pttype_code | varchar(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_pttype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "risk_pttype_id": 10,
    "risk_pttype_name": "ผู้ประกันตน",
    "risk_pttype_code": "OCC",
    "hos_guid": null
  },
  {
    "risk_pttype_id": 20,
    "risk_pttype_name": "ข้าราชการ",
    "risk_pttype_code": "GOV",
    "hos_guid": null
  },
  {
    "risk_pttype_id": 30,
    "risk_pttype_name": "สิทธิหลักประกันสุขภาพ",
    "risk_pttype_code": "UCS",
    "hos_guid": null
  }
]
```
