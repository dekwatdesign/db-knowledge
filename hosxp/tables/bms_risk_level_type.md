# `bms_risk_level_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_level_type_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_level_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bms_risk_level_type_name | bms_risk_level_type_name | yes | 1 |
| PRIMARY | bms_risk_level_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "bms_risk_level_type_id": 1,
    "bms_risk_level_type_name": "เกือบพลาด"
  },
  {
    "bms_risk_level_type_id": 2,
    "bms_risk_level_type_name": "รุนแรงต่ำ"
  },
  {
    "bms_risk_level_type_id": 3,
    "bms_risk_level_type_name": "รุนแรงสูง"
  },
  {
    "bms_risk_level_type_id": 4,
    "bms_risk_level_type_name": "รุนแรงสูงมาก"
  }
]
```
