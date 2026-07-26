# `ndrugstock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| costrate | double(22,3) | YES | MUL | NULL |  |  |
| expiredate | date | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| leftqty | int(11) | YES | MUL | NULL |  |  |
| lotno | varchar(50) | YES | MUL | NULL |  |  |
| minpno | varchar(9) | YES | MUL | NULL |  |  |
| payqty | int(11) | YES | MUL | NULL |  |  |
| quantity | int(11) | YES | MUL | NULL |  |  |
| receivedate | date | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| costrate | costrate | no | 1 |
| expiredate | expiredate | no | 1 |
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| leftqty | leftqty | no | 1 |
| lotno | lotno | no | 1 |
| minpno | minpno | no | 1 |
| payqty | payqty | no | 1 |
| quantity | quantity | no | 1 |
| receivedate | receivedate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
