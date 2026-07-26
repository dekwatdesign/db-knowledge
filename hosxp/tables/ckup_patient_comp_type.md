# `ckup_patient_comp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_patient_comp_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_patient_comp_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_patient_comp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ckup_patient_comp_type_id": 1,
    "ckup_patient_comp_type_name": "ทำงานประจำ"
  },
  {
    "ckup_patient_comp_type_id": 2,
    "ckup_patient_comp_type_name": "ทดลองงาน"
  },
  {
    "ckup_patient_comp_type_id": 3,
    "ckup_patient_comp_type_name": "นักศึกษาฝึกงาน"
  }
]
```
