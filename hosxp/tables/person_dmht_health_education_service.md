# `person_dmht_health_education_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_health_education_service_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| person_dmht_health_education_type_id | int(11) | YES |  | NULL |  |  |
| service_date | date | YES |  | NULL |  |  |
| service_note | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_dmht_health_education_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
