# `stock_item_month_rate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_month_rate_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| item_year | int(11) | YES | MUL | NULL |  |  |
| item_month | int(11) | YES | MUL | NULL |  |  |
| item_date | date | YES |  | NULL |  |  |
| receive_qty | int(11) | YES |  | NULL |  |  |
| pay_qty | int(11) | YES |  | NULL |  |  |
| balance_qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| receive_amount | double(15,3) | YES |  | NULL |  |  |
| pay_amount | double(15,3) | YES |  | NULL |  |  |
| balance_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_id | item_id | no | 1 |
| ix_item_year_month | item_year | no | 1 |
| ix_item_year_month | item_month | no | 2 |
| ix_item_year_month_index | item_month | no | 1 |
| ix_item_year_month_index | item_year | no | 2 |
| PRIMARY | stock_item_month_rate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
