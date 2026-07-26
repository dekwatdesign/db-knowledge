# `blb_finance`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_finance_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| blb_finance_qty | int(11) | YES | MUL | NULL |  |  |
| blb_finance_unitprice | double(22,3) | YES | MUL | NULL |  |  |
| blb_finance_sumprice | double(22,3) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_finance_qty | blb_finance_qty | no | 1 |
| ix_blb_finance_sumprice | blb_finance_sumprice | no | 1 |
| ix_blb_finance_unitprice | blb_finance_unitprice | no | 1 |
| ix_blb_request_id | blb_request_id | no | 1 |
| PRIMARY | blb_finance_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
