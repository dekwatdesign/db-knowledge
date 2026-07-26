# `ndrugitems`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | YES | UNI | NULL |  |  |
| istatus | char(1) | YES |  | NULL |  |  |
| isdurable | char(1) | YES |  | NULL |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| nflag | varchar(50) | YES | MUL | NULL |  |  |
| ngroup | varchar(100) | YES |  | NULL |  |  |
| packqty | int(11) | YES | MUL | NULL |  |  |
| packunit | varchar(100) | YES | MUL | NULL |  |  |
| stdprice | double(22,3) | YES |  | NULL |  |  |
| unitprice | double(22,3) | YES |  | NULL |  |  |
| units | varchar(100) | YES | MUL | NULL |  |  |
| vorder | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode_unique | icode | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| nflag | nflag | no | 1 |
| packqty | packqty | no | 1 |
| packunit | packunit | no | 1 |
| units | units | no | 1 |
| vorder | vorder | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
