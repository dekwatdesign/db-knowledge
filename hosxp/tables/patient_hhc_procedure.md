# `patient_hhc_procedure`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_procedure_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |
| procedure_name | varchar(160) | YES |  | NULL |  |  |
| procedure_date | datetime | YES |  | NULL |  |  |
| equipment_list | varchar(255) | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_procedure_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
