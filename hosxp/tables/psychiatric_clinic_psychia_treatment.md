# `psychiatric_clinic_psychia_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_psychia_treatment_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_psychia_treatment_date | date | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_type_group_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_group_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_type_personal_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_personal_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_problem | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_result_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_user | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_doctor | varchar(6) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_treatment_send_doctor | varchar(6) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_service_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_psychia_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
