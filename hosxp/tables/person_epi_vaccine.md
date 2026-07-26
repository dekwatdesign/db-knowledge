# `person_epi_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_epi_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| person_epi_id | int(11) | YES | MUL | NULL |  |  |
| vaccine_date | date | YES |  | NULL |  |  |
| person_epi_place_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| vaccine_time | time | YES |  | NULL |  |  |
| old_visitno | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| provider_hospcode | varchar(9) | YES |  | NULL |  |  |
| father_school_check | char(1) | YES |  | NULL |  |  |
| mother_school_check | char(1) | YES |  | NULL |  |  |
| relative_school_check | char(1) | YES |  | NULL |  |  |
| epi_autistic_screen_type_id | int(11) | YES |  | NULL |  |  |
| wbc_transfer_id | int(11) | YES |  | NULL |  |  |
| wbc_development_assess_id | int(11) | YES |  | NULL |  |  |
| dental_prevention | char(1) | YES |  | NULL |  |  |
| teeth_count | int(11) | YES |  | NULL |  |  |
| teeth_decayed_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_old_visitno | old_visitno | no | 1 |
| ix_person_epi_id | person_epi_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | person_epi_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
