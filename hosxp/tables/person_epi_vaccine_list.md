# `person_epi_vaccine_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_epi_vaccine_list_id | int(11) | NO | PRI | 0 |  |  |
| person_epi_vaccine_id | int(11) | YES | MUL | NULL |  |  |
| epi_vaccine_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vaccine_lotno | varchar(50) | YES |  | NULL |  |  |
| vaccine_expire_date | date | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| abnormal_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_epi_vaccine_id | epi_vaccine_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_epi_vaccine_id | person_epi_vaccine_id | no | 1 |
| PRIMARY | person_epi_vaccine_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
