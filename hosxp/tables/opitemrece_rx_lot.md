# `opitemrece_rx_lot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_rx_lot_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| vn | varchar(20) | YES |  | NULL |  |  |
| lot_no | varchar(100) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| supplier_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opitemrece_rx_lot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
