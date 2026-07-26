# `stock_permission`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_permission_id | int(11) | NO | PRI | 0 |  |  |
| stock_permission_role_id | int(11) | NO | PRI | 0 |  |  |
| stock_right_id | int(11) | NO | PRI | 0 |  |  |
| stock_permission_type_id | int(11) | YES |  | NULL |  |  |
| stock_permission_entry | varchar(1) | YES |  | NULL |  |  |
| stock_permission_edit | varchar(1) | YES |  | NULL |  |  |
| stock_permission_delete | varchar(1) | YES |  | NULL |  |  |
| stock_permission_cancel | varchar(1) | YES |  | NULL |  |  |
| stock_permission_approve | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_1 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_2 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_3 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_4 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_5 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_6 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_7 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_8 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_9 | varchar(1) | YES |  | NULL |  |  |
| stock_permission_option_10 | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_permission_id | yes | 1 |
| PRIMARY | stock_permission_role_id | yes | 2 |
| PRIMARY | stock_right_id | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
