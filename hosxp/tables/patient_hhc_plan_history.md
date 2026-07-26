# `patient_hhc_plan_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_plan_history_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_plan_id | int(11) | YES | MUL | NULL |  |  |
| appointment_old_date | date | YES |  | NULL |  |  |
| appointment_old_time | time | YES |  | NULL |  |  |
| appointment_date | date | YES |  | NULL |  |  |
| appointment_time | time | YES |  | NULL |  |  |
| reason | varchar(250) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_hhc_plan_history_patient_hhc_plan_id_idx | patient_hhc_plan_id | no | 1 |
| PRIMARY | patient_hhc_plan_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
