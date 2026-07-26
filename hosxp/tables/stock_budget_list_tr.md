# `stock_budget_list_tr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_budget_list_tr_id | int(11) | NO | PRI | 0 |  |  |
| stock_budget_list_id | int(11) | YES | MUL | NULL |  |  |
| budget_price | double(22,3) | YES |  | NULL |  |  |
| budget_date | date | YES |  | NULL |  |  |
| budget_note | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bli | stock_budget_list_id | no | 1 |
| PRIMARY | stock_budget_list_tr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
