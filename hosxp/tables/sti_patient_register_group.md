# `sti_patient_register_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_group_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_id | int(11) | YES | MUL | NULL |  |  |
| sti_patient_register_group_note | varchar(200) | YES |  | NULL |  |  |
| sti_patient_group_type_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_iunique | sti_patient_register_id | yes | 1 |
| ix_iunique | sti_patient_group_type_id | yes | 2 |
| ix_iunique_index | sti_patient_group_type_id | yes | 1 |
| ix_iunique_index | sti_patient_register_id | yes | 2 |
| ix_sti_patient_register_id | sti_patient_register_id | no | 1 |
| PRIMARY | sti_patient_register_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
