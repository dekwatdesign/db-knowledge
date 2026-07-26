# `stock_expire`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_expire_id | int(11) | NO | PRI | 0 |  |  |
| transaction_date | date | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| item_lotno | varchar(50) | YES |  | NULL |  |  |
| stock_type | char(1) | YES |  | NULL |  |  |
| location_id | int(11) | YES |  | NULL |  |  |
| item_left_qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| inv_no | varchar(50) | YES |  | NULL |  |  |
| item_expire | date | YES |  | NULL |  |  |
| inv_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_expire_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
