# `sti_patient_register_appointment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_appointment_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_id | int(11) | YES |  | NULL |  |  |
| appointment_date | date | YES |  | NULL |  |  |
| appointment_note | text | YES |  | NULL |  |  |
| sti_patient_register_appointment_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sti_patient_register_appointment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
