# `cm_ckd_stage_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_ckd_stage_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_ckd_stage_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_ckd_stage_type_name | cm_ckd_stage_type_name | yes | 1 |
| PRIMARY | cm_ckd_stage_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cm_ckd_stage_type_id": 1,
    "cm_ckd_stage_type_name": "Stage 1 normal GFR (>90 mL/minute/1.73 m2) and persistent albuminuria"
  },
  {
    "cm_ckd_stage_type_id": 2,
    "cm_ckd_stage_type_name": "Stage 2 GFR between 60 to 89 mL/minute/1.73 m2 and persistent albuminuria"
  },
  {
    "cm_ckd_stage_type_id": 3,
    "cm_ckd_stage_type_name": "Stage 3 GFR between 30 and 59 mL/minute/1.73 m2"
  },
  {
    "cm_ckd_stage_type_id": 4,
    "cm_ckd_stage_type_name": "Stage 4 GFR between 15 and 29 mL/minute/1.73 m2"
  },
  {
    "cm_ckd_stage_type_id": 5,
    "cm_ckd_stage_type_name": "Stage 5 GFR of <15 mL/minute/1.73 m2 or ESRD"
  }
]
```
