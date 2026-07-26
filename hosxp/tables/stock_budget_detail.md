# `stock_budget_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_budget_year | varchar(20) | YES |  | NULL |  |  |
| stock_budget_detail_id | int(11) | NO | PRI | 0 |  |  |
| budget_id | int(11) | YES | MUL | NULL |  |  |
| stock_budget_price | double(22,8) | YES |  | NULL |  |  |
| stock_budget_remain | double(22,8) | YES |  | NULL |  |  |
| stock_budget_use | double(22,8) | YES |  | NULL |  |  |
| stock_budget_inv | double(22,8) | YES |  | NULL |  |  |
| stock_budget_master_price | double(22,8) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_id_year | budget_id | no | 1 |
| ix_id_year | stock_budget_year | no | 2 |
| PRIMARY | stock_budget_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
