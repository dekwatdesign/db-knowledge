# `items_access_user_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| items_access_user_list_id | int(11) | NO | PRI | 0 |  |  |
| items_table_name | varchar(200) | YES |  | NULL |  |  |
| items_table_code | varchar(100) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| grant_access | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | items_access_user_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
