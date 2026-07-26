# `village_toilet_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_toilet_survey_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| village_toilet_type_id | int(11) | YES | MUL | NULL |  |  |
| village_toilet_survey_name | varchar(250) | YES |  | NULL |  |  |
| village_toilet_survey_date | date | YES |  | NULL |  |  |
| has_pass | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| ix_village_toilet_type_id | village_toilet_type_id | no | 1 |
| PRIMARY | village_toilet_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
