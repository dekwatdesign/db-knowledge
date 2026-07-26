# `hospital_volunteer_excellent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_volunteer_excellent_id | int(11) | NO | PRI | 0 |  |  |
| hospital_volunteer_id | int(11) | YES | MUL | NULL |  |  |
| hospital_volunteer_excellent_type_id | int(11) | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hospital_volunteer_id | hospital_volunteer_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_volunteer_excellent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
