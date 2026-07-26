# `stock_budget_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_budget_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_budget_type_name | varchar(200) | YES | UNI | NULL |  |  |
| acc_po_budget_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_budget_type_name | stock_budget_type_name | yes | 1 |
| PRIMARY | stock_budget_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
