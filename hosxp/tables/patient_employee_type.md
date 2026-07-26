# `patient_employee_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_employee_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_employee_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_employee_type_name | patient_employee_type_name | yes | 1 |
| PRIMARY | patient_employee_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "patient_employee_type_id": 2,
    "patient_employee_type_name": "เกษตรกรรม"
  },
  {
    "patient_employee_type_id": 1,
    "patient_employee_type_name": "ประมง"
  },
  {
    "patient_employee_type_id": 9,
    "patient_employee_type_name": "อื่นๆ"
  },
  {
    "patient_employee_type_id": 3,
    "patient_employee_type_name": "อุตสาหกรรม"
  }
]
```
