# `sys_db_table_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sys_db_table_check_id | int(11) | NO | PRI | 0 |  |  |
| table_name | varchar(200) | YES | MUL | NULL |  |  |
| field_name | varchar(200) | YES | MUL | NULL |  |  |
| is_not_null | char(1) | YES |  | NULL |  |  |
| warning_message | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_tb_field_name | table_name | yes | 1 |
| ix_tb_field_name | field_name | yes | 2 |
| ix_tb_field_name_index | field_name | yes | 1 |
| ix_tb_field_name_index | table_name | yes | 2 |
| PRIMARY | sys_db_table_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
