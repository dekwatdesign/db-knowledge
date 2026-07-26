# `stock_plan_list_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_plan_list_history_id | int(11) | NO | PRI | 0 |  |  |
| stock_plan_id | int(11) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| plan_data_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_plan_id | stock_plan_id | no | 1 |
| PRIMARY | stock_plan_list_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
