# `village_basis_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_basis_doctor_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| village_basis_doctor_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| PRIMARY | village_basis_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
