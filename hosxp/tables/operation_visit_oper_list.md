# `operation_visit_oper_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_visit_oper_list_id | int(11) | NO | PRI | 0 |  |  |
| operation_visit_list_id | int(11) | YES | MUL | NULL |  |  |
| operation_name | varchar(200) | YES |  | NULL |  |  |
| operation_item_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | operation_visit_list_id | no | 1 |
| PRIMARY | operation_visit_oper_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
