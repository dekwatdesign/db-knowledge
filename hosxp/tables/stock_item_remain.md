# `stock_item_remain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_id | int(11) | YES |  | NULL |  |  |
| item_remain_date | date | YES |  | NULL |  |  |
| receive_price | double(22,3) | YES |  | NULL |  |  |
| receive_amount | int(11) | YES |  | NULL |  |  |
| issue_price | double(22,3) | YES |  | NULL |  |  |
| issue_amount | int(11) | YES |  | NULL |  |  |
| remain_date | varchar(10) | YES |  | NULL |  |  |
| remain_month | varchar(10) | YES |  | NULL |  |  |
| remain_year | varchar(10) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| unit_id | int(11) | YES |  | NULL |  |  |
| item_total_price | double(22,3) | YES |  | NULL |  |  |
| item_total_amount | int(11) | YES |  | NULL |  |  |
| adjust_price | double(22,3) | YES |  | NULL |  |  |
| adjust_amount | int(11) | YES |  | NULL |  |  |
| item_old_price | double(22,3) | YES |  | NULL |  |  |
| item_old_amount | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
