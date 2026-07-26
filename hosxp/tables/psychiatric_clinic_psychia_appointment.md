# `psychiatric_clinic_psychia_appointment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_psychia_appointment_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_psychia_appointment_date | date | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_appointment_type_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_appointment_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_psychia_appointment_user_appointment | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_psychia_appointment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
