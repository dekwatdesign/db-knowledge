# `drugstore_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pn | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| drugusage | varchar(4) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| print | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| pn | pn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
