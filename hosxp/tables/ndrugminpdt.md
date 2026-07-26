# `ndrugminpdt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| costrate | double(22,3) | YES |  | NULL |  |  |
| expdate | datetime | YES |  | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| inpqty | int(11) | YES |  | NULL |  |  |
| lotno | varchar(50) | YES | MUL | NULL |  |  |
| minpno | varchar(9) | YES |  | NULL |  |  |
| packqty | int(11) | YES |  | NULL |  |  |
| vatamt | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lotno_minpno_icode | icode | no | 1 |
| ix_lotno_minpno_icode | lotno | no | 2 |
| ix_lotno_minpno_icode | minpno | no | 3 |
| lotno_minpno_icode | lotno | no | 1 |
| lotno_minpno_icode | minpno | no | 2 |
| lotno_minpno_icode | icode | no | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
