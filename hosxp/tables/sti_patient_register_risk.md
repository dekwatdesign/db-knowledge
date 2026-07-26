# `sti_patient_register_risk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_risk_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_id | int(11) | YES | MUL | NULL |  |  |
| sti_patient_register_risk_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | sti_patient_register_id | no | 1 |
| ix_unique | sti_patient_register_risk_type_id | no | 2 |
| PRIMARY | sti_patient_register_risk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
