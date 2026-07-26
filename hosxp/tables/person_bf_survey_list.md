# `person_bf_survey_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bf_survey_list_id | int(11) | NO | PRI | 0 |  |  |
| person_bf_survey_id | int(11) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| breast_feed_status_id | int(11) | YES |  | NULL |  |  |
| house_id | int(11) | YES |  | NULL |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| age_month | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| wbc_development_assess_id | int(11) | YES |  | NULL |  |  |
| dental_prevention | char(1) | YES |  | NULL |  |  |
| wbc_transfer_id | int(11) | YES |  | NULL |  |  |
| parent_school | char(1) | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_bf_survey_id | person_bf_survey_id | no | 1 |
| PRIMARY | person_bf_survey_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
