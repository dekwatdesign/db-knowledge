# `stock_cost_center`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cost_center_id | int(11) | NO | PRI | 0 |  |  |
| stock_cost_center_name | varchar(200) | YES | UNI | NULL |  |  |
| stock_cost_center_code | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_cost_center_name | stock_cost_center_name | yes | 1 |
| PRIMARY | stock_cost_center_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
