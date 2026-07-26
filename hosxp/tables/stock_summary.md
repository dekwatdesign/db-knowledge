# `stock_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| summary_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| unit_id | int(11) | YES |  | NULL |  |  |
| summary_month | varchar(10) | YES |  | NULL |  |  |
| summary_year | varchar(10) | YES |  | NULL |  |  |
| summary_date | date | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| item_price | double(22,3) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| issue_qty | int(11) | YES |  | NULL |  |  |
| issue_price | double(22,3) | YES |  | NULL |  |  |
| receive_qty | int(11) | YES |  | NULL |  |  |
| receive_price | double(22,3) | YES |  | NULL |  |  |
| transfer_qty | int(11) | YES |  | NULL |  |  |
| transfer_price | double(22,3) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| remain_price | double(22,3) | YES |  | NULL |  |  |
| borrow_qty | int(11) | YES |  | NULL |  |  |
| borrow_price | double(22,3) | YES |  | NULL |  |  |
| return_qty | int(11) | YES |  | NULL |  |  |
| return_price | double(22,3) | YES |  | NULL |  |  |
| adjust_qty | int(11) | YES |  | NULL |  |  |
| adjust_price | double(22,3) | YES |  | NULL |  |  |
| summary_no | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
