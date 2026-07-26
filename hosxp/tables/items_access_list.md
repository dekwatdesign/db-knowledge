# `items_access_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| items_access_list_id | int(11) | NO | PRI | 0 |  |  |
| items_table_name | varchar(200) | YES | MUL | NULL |  |  |
| items_table_code | varchar(100) | YES |  | NULL |  |  |
| items_table_code_int | int(11) | YES |  | NULL |  |  |
| officer_group_id | int(11) | YES |  | NULL |  |  |
| grant_access | char(1) | YES |  | NULL |  |  |
| item_access_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_items_table_name | items_table_name | no | 1 |
| PRIMARY | items_access_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
