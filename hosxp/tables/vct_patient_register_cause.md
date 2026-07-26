# `vct_patient_register_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vct_patient_register_cause_id | int(11) | NO | PRI | 0 |  |  |
| vct_patient_register_id | int(11) | YES | MUL | NULL |  |  |
| vct_patient_register_cause_type_id | int(11) | YES |  | NULL |  |  |
| vct_patient_register_cause_note | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vct_patient_register_id | vct_patient_register_id | no | 1 |
| PRIMARY | vct_patient_register_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
