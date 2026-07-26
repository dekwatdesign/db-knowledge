# `ems_patient_pttype_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_patient_pttype_list_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_patient_list_id | int(11) | YES | MUL | NULL |  |  |
| ems_patient_pttype_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique_index | ems_command_patient_list_id | yes | 1 |
| ix_unique_index | ems_patient_pttype_id | yes | 2 |
| PRIMARY | ems_patient_pttype_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
