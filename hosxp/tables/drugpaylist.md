# `drugpaylist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| payref | varchar(6) | YES | MUL | NULL |  |  |
| expiredate | datetime | YES |  | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| lotno | varchar(15) | YES | MUL | NULL |  |  |
| minpno | varchar(9) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unitprice | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lotno | lotno | no | 1 |
| payref | payref | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
