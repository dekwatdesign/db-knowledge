# `drugstockpropose`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| po_number | varchar(50) | YES | UNI | NULL |  |  |
| po_reg | varchar(25) | YES |  | NULL |  |  |
| po_date | date | YES |  | NULL |  |  |
| phmdlr | char(3) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| po_type | tinyint(4) | YES |  | NULL |  |  |
| i_type | char(1) | YES |  | NULL |  |  |
| bdgtype | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| po_number_unique | po_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
