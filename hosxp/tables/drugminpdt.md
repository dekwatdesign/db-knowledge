# `drugminpdt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| minpno | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| costrate | double(22,3) | YES |  | NULL |  |  |
| expdate | datetime | YES |  | NULL |  |  |
| inpqty | int(11) | YES |  | NULL |  |  |
| lotno | varchar(50) | YES |  | NULL |  |  |
| packqty | int(11) | YES |  | NULL |  |  |
| vatamt | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_minpno_lotno_icode_unique | icode | yes | 1 |
| ix_minpno_lotno_icode_unique | lotno | yes | 2 |
| ix_minpno_lotno_icode_unique | minpno | yes | 3 |
| minpno | minpno | no | 1 |
| minpno_lotno_icode_unique | minpno | yes | 1 |
| minpno_lotno_icode_unique | lotno | yes | 2 |
| minpno_lotno_icode_unique | icode | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
