# `stock_drugitems_price`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_drugitems_price_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| cost | double(15,3) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| update_ok | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| ix_update_ok | update_ok | no | 1 |
| PRIMARY | stock_drugitems_price_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
