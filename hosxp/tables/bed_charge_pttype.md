# `bed_charge_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bed_charge_pttype_id | int(11) | NO | PRI | 0 |  |  |
| bedno | varchar(6) | YES | MUL | NULL |  |  |
| charge_type | varchar(10) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| charge_price | double(15,3) | YES |  | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bedno_pttype_charge_type | bedno | no | 1 |
| ix_bedno_pttype_charge_type | pttype | no | 2 |
| ix_bedno_pttype_charge_type | charge_type | no | 3 |
| ix_bedno_pttype_charge_type_index | bedno | no | 1 |
| ix_bedno_pttype_charge_type_index | charge_type | no | 2 |
| ix_bedno_pttype_charge_type_index | pttype | no | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | bedno | no | 1 |
| ix_unique | pttype | no | 2 |
| ix_unique | icode | no | 3 |
| ix_unique | charge_type | no | 4 |
| ix_unique_index | bedno | no | 1 |
| ix_unique_index | charge_type | no | 2 |
| ix_unique_index | icode | no | 3 |
| ix_unique_index | pttype | no | 4 |
| PRIMARY | bed_charge_pttype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
