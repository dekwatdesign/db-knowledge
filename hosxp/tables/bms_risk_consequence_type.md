# `bms_risk_consequence_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_consequence_type_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_consequence_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bms_risk_consequence_type_name | bms_risk_consequence_type_name | yes | 1 |
| PRIMARY | bms_risk_consequence_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "bms_risk_consequence_type_id": 5,
    "bms_risk_consequence_type_name": "ความหายนะ"
  },
  {
    "bms_risk_consequence_type_id": 3,
    "bms_risk_consequence_type_name": "ปานกลาง"
  },
  {
    "bms_risk_consequence_type_id": 4,
    "bms_risk_consequence_type_name": "มาก"
  },
  {
    "bms_risk_consequence_type_id": 1,
    "bms_risk_consequence_type_name": "ไม่รุนแรง"
  },
  {
    "bms_risk_consequence_type_id": 2,
    "bms_risk_consequence_type_name": "เล็กน้อย"
  }
]
```
