# `xe_table_script`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_table_script_id | int(11) | NO | PRI | 0 |  |  |
| table_name | varchar(200) | YES |  | NULL |  |  |
| table_op | int(11) | YES |  | NULL |  |  |
| xe_app_script_id | int(11) | YES |  | NULL |  |  |
| run_before | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_u1 | run_before | yes | 1 |
| ix_u1 | table_name | yes | 2 |
| ix_u1 | table_op | yes | 3 |
| PRIMARY | xe_table_script_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
