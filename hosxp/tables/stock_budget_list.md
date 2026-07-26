# `stock_budget_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_budget_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_budget_detail_id | int(11) | YES |  | NULL |  |  |
| budget_id | int(11) | YES |  | NULL |  |  |
| stock_budget_year | varchar(20) | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| stock_datetime | datetime | YES |  | NULL |  |  |
| stock_budget_price | double(22,3) | YES |  | NULL |  |  |
| stock_budget_remain | double(22,3) | YES |  | NULL |  |  |
| stock_budget_use | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| stock_budget_rcv_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_budget_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
