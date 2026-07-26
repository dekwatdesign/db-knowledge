# `village_student_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_student_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| village_student_id | int(11) | YES | MUL | NULL |  |  |
| vaccine_date | date | YES |  | NULL |  |  |
| vaccine_time | time | YES |  | NULL |  |  |
| student_vaccine_place_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| provider_hospcode | varchar(9) | YES |  | NULL |  |  |
| epi_autistic_screen_type_id | int(11) | YES |  | NULL |  |  |
| village_school_service_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_student_id | village_student_id | no | 1 |
| PRIMARY | village_student_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
