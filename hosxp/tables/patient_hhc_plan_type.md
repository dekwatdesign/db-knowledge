# `patient_hhc_plan_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_plan_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_plan_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_plan_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "patient_hhc_plan_type_id": 1,
    "patient_hhc_plan_type_name": "เยี่ยมต่อเนื่อง"
  },
  {
    "patient_hhc_plan_type_id": 2,
    "patient_hhc_plan_type_name": "เยี่ยมครั้งเดี่ยว"
  }
]
```
