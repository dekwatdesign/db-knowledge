# `stock_return_stock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| return_stock_id | int(11) | NO | PRI | 0 |  |  |
| return_stock_no | varchar(50) | YES |  | NULL |  |  |
| return_stock_date | date | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| cancel_confirm | char(1) | YES |  | NULL |  |  |
| cancel_reason | varchar(100) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | return_stock_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
