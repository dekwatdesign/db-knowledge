# `ovst_nhso_op_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_nhso_op_status_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| nhso_direct_status_id | int(11) | YES |  | NULL |  |  |
| nhso_direct_update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | ovst_nhso_op_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
