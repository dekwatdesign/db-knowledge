# `diagai_operation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagai_operation_id | varchar(36) | NO | PRI |  |  |  |
| diagai_operation_name | varchar(200) | YES |  | NULL |  |  |
| diagai_operation_icd | varchar(9) | YES |  | NULL |  |  |
| diagai_operation_icdversion | varchar(20) | YES |  | NULL |  |  |
| diagai_operation_snomedct | varchar(20) | YES |  | NULL |  |  |
| diagai_operation_recordername | varchar(200) | YES |  | NULL |  |  |
| diagai_operation_finalversion | char(1) | YES |  | NULL |  |  |
| diagai_encounter_id | int(11) | YES | MUL | NULL |  |  |
| diagai_operation_recorder | varchar(250) | YES |  | NULL |  |  |
| diagai_operation_performer | varchar(250) | YES |  | NULL |  |  |
| iptoprt_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_diagai_operation_diagai_encounter_id_idx | diagai_encounter_id | no | 1 |
| ix_diagai_operation_iptoprt_id | iptoprt_id | no | 1 |
| PRIMARY | diagai_operation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
