# `person_bw_survey_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bw_survey_list_id | int(11) | NO | PRI | 0 |  |  |
| person_bw_survey_id | int(11) | YES |  | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| bmi_level_id | int(11) | YES |  | NULL |  |  |
| survey_date | date | YES |  | NULL |  |  |
| body_weight | double(15,3) | YES |  | NULL |  |  |
| age_month | int(11) | YES |  | NULL |  |  |
| house_id | int(11) | YES |  | NULL |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_bw_survey_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
