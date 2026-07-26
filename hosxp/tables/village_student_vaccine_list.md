# `village_student_vaccine_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_student_vaccine_list_id | int(11) | NO | PRI | 0 |  |  |
| village_student_vaccine_id | int(11) | YES | MUL | NULL |  |  |
| student_vaccine_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vaccine_lotno | varchar(50) | YES |  | NULL |  |  |
| vaccine_expire_date | date | YES |  | NULL |  |  |
| epi_autistic_screen_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_student_vaccine_id | village_student_vaccine_id | no | 1 |
| PRIMARY | village_student_vaccine_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
