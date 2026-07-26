# `house_mosquitoes_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_mosquitoes_survey_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| jar1_count | int(11) | YES |  | NULL |  |  |
| jar1_found | int(11) | YES |  | NULL |  |  |
| jar2_count | int(11) | YES |  | NULL |  |  |
| jar2_found | int(11) | YES |  | NULL |  |  |
| jar3_count | int(11) | YES |  | NULL |  |  |
| jar3_found | int(11) | YES |  | NULL |  |  |
| toilet_jar_count | int(11) | YES |  | NULL |  |  |
| toilet_jar_found | int(11) | YES |  | NULL |  |  |
| cabinet_jar_count | int(11) | YES |  | NULL |  |  |
| cabinet_jar_found | int(11) | YES |  | NULL |  |  |
| other_jar_count | int(11) | YES |  | NULL |  |  |
| other_jar_found | int(11) | YES |  | NULL |  |  |
| survey_date | date | YES |  | NULL |  |  |
| survey_staff | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_id | house_id | no | 1 |
| PRIMARY | house_mosquitoes_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
