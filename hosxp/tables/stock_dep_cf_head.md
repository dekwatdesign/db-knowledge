# `stock_dep_cf_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_cf_head_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_cf_month | int(11) | YES |  | NULL |  |  |
| stock_cf_year | int(11) | YES |  | NULL |  |  |
| stock_cf_date | date | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| total_amount | double(22,3) | YES |  | NULL |  |  |
| stock_cf_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_dep_cf_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
