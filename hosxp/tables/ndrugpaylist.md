# `ndrugpaylist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| expiredate | date | YES |  | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| lotno | varchar(15) | YES |  | NULL |  |  |
| minpno | varchar(9) | YES |  | NULL |  |  |
| payref | varchar(6) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unitprice | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_payref_icode_minpno_unique | icode | yes | 1 |
| ix_payref_icode_minpno_unique | lotno | yes | 2 |
| ix_payref_icode_minpno_unique | minpno | yes | 3 |
| ix_payref_icode_minpno_unique | payref | yes | 4 |
| payref_icode_minpno_unique | payref | yes | 1 |
| payref_icode_minpno_unique | icode | yes | 2 |
| payref_icode_minpno_unique | minpno | yes | 3 |
| payref_icode_minpno_unique | lotno | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
