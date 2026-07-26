# `person_vaccine_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_vaccine_list_id | int(11) | NO | PRI | 0 |  |  |
| person_vaccine_id | int(11) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| vaccine_date | date | YES | MUL | NULL |  |  |
| vaccine_note | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| flag | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| ix_person_vaccine_id | person_vaccine_id | no | 1 |
| ix_unique | person_id | yes | 1 |
| ix_unique | person_vaccine_id | yes | 2 |
| ix_vaccine_date | vaccine_date | no | 1 |
| PRIMARY | person_vaccine_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
