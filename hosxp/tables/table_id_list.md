# `table_id_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_id_list_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(200) | YES | MUL | NULL |  |  |
| id_int | int(11) | YES |  | NULL |  |  |
| id_str | varchar(200) | YES |  | NULL |  |  |
| id_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cn | computer_name | no | 1 |
| PRIMARY | table_id_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
