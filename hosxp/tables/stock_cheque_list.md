# `stock_cheque_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_user_id | int(11) | YES |  | NULL |  |  |
| cheque_no | varchar(30) | YES |  | NULL |  |  |
| cheque_date | datetime | YES |  | NULL |  |  |
| cheque_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
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
