# `stock_dep_request_pr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_request_pr_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_request_id | int(11) | YES | MUL | NULL |  |  |
| pr_no | varchar(50) | YES |  | NULL |  |  |
| pr_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_dep_request_id | stock_dep_request_id | no | 1 |
| PRIMARY | stock_dep_request_pr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
