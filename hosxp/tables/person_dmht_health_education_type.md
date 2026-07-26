# `person_dmht_health_education_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_health_education_type_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_health_education_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_health_education_type_name | person_dmht_health_education_type_name | yes | 1 |
| PRIMARY | person_dmht_health_education_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
