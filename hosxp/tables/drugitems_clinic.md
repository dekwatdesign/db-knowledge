# `drugitems_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_clinic_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| clinic | char(3) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic | clinic | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| ix_unique | icode | no | 1 |
| ix_unique | clinic | no | 2 |
| ix_unique_index | clinic | no | 1 |
| ix_unique_index | icode | no | 2 |
| PRIMARY | drugitems_clinic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
