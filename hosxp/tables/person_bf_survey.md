# `person_bf_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bf_survey_id | int(11) | NO | PRI | 0 |  |  |
| survey_year_period_id | int(11) | YES | MUL | NULL |  |  |
| person_bf_survey_year | int(11) | YES |  | NULL |  |  |
| total_person_count | int(11) | YES |  | NULL |  |  |
| survey_person_count | int(11) | YES |  | NULL |  |  |
| survey_person_percent | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_survey_year_period_id | survey_year_period_id | no | 1 |
| PRIMARY | person_bf_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
