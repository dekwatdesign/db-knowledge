# `rvp_invoice_history_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_invoice_history_item_id | int(11) | NO | PRI | 0 |  |  |
| treatid | varchar(10) | YES |  | NULL |  |  |
| treatprice | double(15,3) | YES |  | NULL |  |  |
| rvp_invoice_history_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rvp_invoice_id | rvp_invoice_history_id | no | 1 |
| PRIMARY | rvp_invoice_history_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
