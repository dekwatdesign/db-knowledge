# `treatment_plan_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| treatment_plan_group_id | int(11) | NO | PRI | 0 |  |  |
| treatment_plan_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_treatment_plan_group_name | treatment_plan_group_name | yes | 1 |
| PRIMARY | treatment_plan_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "treatment_plan_group_id": 1,
    "treatment_plan_group_name": "การให้ Vaccine"
  },
  {
    "treatment_plan_group_id": 2,
    "treatment_plan_group_name": "การทำหัตถการทันตกรรม"
  },
  {
    "treatment_plan_group_id": 3,
    "treatment_plan_group_name": "การทำหัตถการห้องฉุกเฉิน"
  }
]
```
