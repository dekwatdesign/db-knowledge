# `person_women_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_women_service_id | int(11) | NO | PRI | 0 |  |  |
| person_women_id | int(11) | YES | MUL | NULL |  |  |
| service_date | date | YES |  | NULL |  |  |
| service_time | time | YES |  | NULL |  |  |
| women_service_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| provider_hospcode | varchar(9) | YES |  | NULL |  |  |
| women_birth_control_id | int(11) | YES |  | NULL |  |  |
| breast_checkup_educate | char(1) | YES |  | NULL |  |  |
| breast_checkup_evaluate | char(1) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_women_id | person_women_id | no | 1 |
| PRIMARY | person_women_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
