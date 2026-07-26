# `person_vaccine_lot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_vaccine_lot_id | int(11) | NO | PRI | 0 |  |  |
| person_vaccine_id | int(11) | YES |  | NULL |  |  |
| vaccine_lot | varchar(100) | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| receive_qty | int(11) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| vaccine_lot_active | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_vaccine_lot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
