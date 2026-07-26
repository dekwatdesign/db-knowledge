# `drugstock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | YES | MUL | NULL |  |  |
| lotno | varchar(50) | YES | MUL | NULL |  |  |
| minpno | varchar(9) | YES | MUL | NULL |  |  |
| costrate | double(22,3) | YES |  | NULL |  |  |
| expiredate | datetime | YES |  | NULL |  |  |
| leftqty | int(11) | YES |  | NULL |  |  |
| payqty | int(11) | YES |  | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| receivedate | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lotno | lotno | no | 1 |
| minpno | minpno | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
