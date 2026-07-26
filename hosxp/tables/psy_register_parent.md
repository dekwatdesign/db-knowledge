# `psy_register_parent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_parent_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_parent_pname | varchar(100) | YES |  | NULL |  |  |
| psy_register_parent_fname | varchar(100) | YES |  | NULL |  |  |
| psy_register_parent_lname | varchar(100) | YES |  | NULL |  |  |
| psy_register_parent_tel | varchar(10) | YES |  | NULL |  |  |
| psy_register_parent_cid | varchar(13) | YES |  | NULL |  |  |
| psy_register_id | int(11) | YES | MUL | NULL |  |  |
| parent_type_id | int(11) | YES | MUL | NULL |  |  |
| psy_register_parent_staff | varchar(10) | YES | MUL | NULL |  |  |
| psy_register_parent_pic | longblob | YES |  | NULL |  |  |
| psy_register_parent_address | varchar(255) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Ref268 | psy_register_id | no | 1 |
| ix_Ref5470 | psy_register_parent_staff | no | 1 |
| ix_Ref5569 | parent_type_id | no | 1 |
| PRIMARY | psy_register_parent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
