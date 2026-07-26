# `drp_intervention_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_intervention_group_code | varchar(5) | NO | PRI |  |  |  |
| drp_intervention_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_intervention_group_name | drp_intervention_group_name | yes | 1 |
| PRIMARY | drp_intervention_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "drp_intervention_group_code": "I0",
    "drp_intervention_group_name": "ไม่มี (No intervention)"
  },
  {
    "drp_intervention_group_code": "I1",
    "drp_intervention_group_name": "ที่ตัวผู้สั่งใช้ยา"
  },
  {
    "drp_intervention_group_code": "I2",
    "drp_intervention_group_name": "ที่ตัวผู้ป่วยหรือผู้ดูแล"
  },
  {
    "drp_intervention_group_code": "I3",
    "drp_intervention_group_name": "ที่ตัวยา (At drug level)"
  }
]
```
