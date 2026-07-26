# `bms_risk_mgm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_mgm_type_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_mgm_type_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | bms_risk_mgm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "bms_risk_mgm_type_id": 1,
    "bms_risk_mgm_type_name": "ยอมรับความเสี่ยง"
  },
  {
    "bms_risk_mgm_type_id": 2,
    "bms_risk_mgm_type_name": "ลด/ควบคุมความเสี่ยง"
  },
  {
    "bms_risk_mgm_type_id": 3,
    "bms_risk_mgm_type_name": "หลีกแลี่ยงความเสี่ยง"
  },
  {
    "bms_risk_mgm_type_id": 4,
    "bms_risk_mgm_type_name": "กระจาย/โอนความเสี่ยง"
  }
]
```
