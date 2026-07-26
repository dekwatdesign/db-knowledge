# `patient_coc_visit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_visit_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_visit_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_coc_visit_type_name | patient_coc_visit_type_name | yes | 1 |
| PRIMARY | patient_coc_visit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "patient_coc_visit_type_id": 1,
    "patient_coc_visit_type_name": "ผู้ป่วยรายใหม่"
  },
  {
    "patient_coc_visit_type_id": 2,
    "patient_coc_visit_type_name": "ผู้ป่วย Re-admit"
  }
]
```
