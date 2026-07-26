# `sys_lab_link`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sys_lab_link_id | int(11) | NO | PRI | 0 |  |  |
| sys_lab_code_id | int(11) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_code_id | sys_lab_code_id | no | 1 |
| ix_sys_lab_link_unique | sys_lab_code_id | yes | 1 |
| ix_sys_lab_link_unique | lab_items_code | yes | 2 |
| ix_sys_lab_link_unique_index | lab_items_code | yes | 1 |
| ix_sys_lab_link_unique_index | sys_lab_code_id | yes | 2 |
| PRIMARY | sys_lab_link_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
