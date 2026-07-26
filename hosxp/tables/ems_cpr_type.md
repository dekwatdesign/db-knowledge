# `ems_cpr_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_cpr_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_cpr_type_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_cpr_type_code | varchar(10) | YES |  | NULL |  |  |
| ems_cpr_type_level_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_cpr_type_name | ems_cpr_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_cpr_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
