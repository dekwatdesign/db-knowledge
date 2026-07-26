# `inv_durable_inventory_stock_bg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_inv_stock_bg_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_budgeter_id | int(11) | YES | MUL | NULL |  |  |
| stock_budget_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refinv_durable_good_budgeter1 | inv_durable_good_budgeter_id | no | 1 |
| ix_Refstock_budget_type2 | stock_budget_type_id | no | 1 |
| PRIMARY | inv_durable_inv_stock_bg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
