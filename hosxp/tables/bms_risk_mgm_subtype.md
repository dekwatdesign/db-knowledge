# `bms_risk_mgm_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_mgm_subtype_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_mgm_subtype_name | varchar(200) | YES | UNI | NULL |  |  |
| bms_risk_mgm_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bms_risk_mgm_subtype_name | bms_risk_mgm_subtype_name | yes | 1 |
| PRIMARY | bms_risk_mgm_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "bms_risk_mgm_subtype_id": 1,
    "bms_risk_mgm_subtype_name": "การควบคุมแบบป้องกัน",
    "bms_risk_mgm_type_id": 2
  },
  {
    "bms_risk_mgm_subtype_id": 2,
    "bms_risk_mgm_subtype_name": "การควบคุมแบบค้นพบ",
    "bms_risk_mgm_type_id": 2
  },
  {
    "bms_risk_mgm_subtype_id": 3,
    "bms_risk_mgm_subtype_name": "การควบคุมแบบแก้ไข",
    "bms_risk_mgm_type_id": 2
  },
  {
    "bms_risk_mgm_subtype_id": 4,
    "bms_risk_mgm_subtype_name": "การควบคุมแบบส่งเสริม",
    "bms_risk_mgm_type_id": 2
  }
]
```
