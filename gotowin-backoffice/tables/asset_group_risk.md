# `asset_group_risk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RISK_TYPE_ID | varchar(10) | NO | PRI | NULL |  |  |
| RISK_TYPE_NAME | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RISK_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "RISK_TYPE_ID": "0",
    "RISK_TYPE_NAME": "ต่ำ"
  },
  {
    "RISK_TYPE_ID": "1",
    "RISK_TYPE_NAME": "กลาง"
  },
  {
    "RISK_TYPE_ID": "2",
    "RISK_TYPE_NAME": "สูง"
  }
]
```
