# `person_vaccine_elsewhere`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_vaccine_elsewhere_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| person_vaccine_id | int(11) | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| vaccine_date | date | YES |  | NULL |  |  |
| vaccine_note | varchar(100) | YES |  | NULL |  |  |
| vaccine_lotno | varchar(50) | YES |  | NULL |  |  |
| vaccine_expire_date | date | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vaccine_hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| ix_unique | person_id | no | 1 |
| ix_unique | person_vaccine_id | no | 2 |
| PRIMARY | person_vaccine_elsewhere_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
