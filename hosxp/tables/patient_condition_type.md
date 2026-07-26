# `patient_condition_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_condition_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_condition_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_condition_type_name | patient_condition_type_name | yes | 1 |
| PRIMARY | patient_condition_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_condition_type_id": 1,
    "patient_condition_type_name": "ผู้ป่วยโรคเบาหวาน"
  },
  {
    "patient_condition_type_id": 2,
    "patient_condition_type_name": "ผู้ป่วยโรคความดัน"
  },
  {
    "patient_condition_type_id": 3,
    "patient_condition_type_name": "ผู้ป่วยโรคไตวาย"
  }
]
```
