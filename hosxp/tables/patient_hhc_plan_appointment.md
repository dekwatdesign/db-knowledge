# `patient_hhc_plan_appointment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_plan_appointment_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_plan_id | int(11) | YES | MUL | NULL |  |  |
| appointment_date | date | YES |  | NULL |  |  |
| appointment_note | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_hhc_plan_id | patient_hhc_plan_id | no | 1 |
| PRIMARY | patient_hhc_plan_appointment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
