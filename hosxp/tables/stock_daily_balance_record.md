# `stock_daily_balance_record`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_daily_balance_record_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| balance_day | int(11) | YES |  | NULL |  |  |
| balance_date | date | YES | MUL | NULL |  |  |
| opening_balance_qty | int(11) | YES |  | NULL |  |  |
| in_qty | int(11) | YES |  | NULL |  |  |
| out_qty | int(11) | YES |  | NULL |  |  |
| onhand_qty | int(11) | YES |  | NULL |  |  |
| physical_onhand_qty | int(11) | YES |  | NULL |  |  |
| deviation_qty | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| balance_year_month | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bym | balance_year_month | no | 1 |
| ix_bym_wi | balance_year_month | no | 1 |
| ix_bym_wi | warehouse_id | no | 2 |
| ix_bym_wi | item_id | no | 3 |
| ix_bym_wi_index | balance_year_month | no | 1 |
| ix_bym_wi_index | item_id | no | 2 |
| ix_bym_wi_index | warehouse_id | no | 3 |
| ix_unique | warehouse_id | yes | 1 |
| ix_unique | item_id | yes | 2 |
| ix_unique | balance_date | yes | 3 |
| ix_unique_index | balance_date | yes | 1 |
| ix_unique_index | item_id | yes | 2 |
| ix_unique_index | warehouse_id | yes | 3 |
| ix_wi | warehouse_id | no | 1 |
| ix_wi | item_id | no | 2 |
| ix_wi_index | item_id | no | 1 |
| ix_wi_index | warehouse_id | no | 2 |
| PRIMARY | stock_daily_balance_record_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
