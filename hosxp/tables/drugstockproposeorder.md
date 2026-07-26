# `drugstockproposeorder`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| podate | date | YES |  | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| dflag | char(1) | YES |  | NULL |  |  |
| islock | smallint(6) | YES |  | NULL |  |  |
| orderqty | int(11) | YES |  | NULL |  |  |
| unitprice | double(22,3) | YES |  | NULL |  |  |
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
