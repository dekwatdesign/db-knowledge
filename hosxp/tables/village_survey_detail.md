# `village_survey_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_survey_detail_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| village_survey_item_id | int(11) | YES | MUL | NULL |  |  |
| survey_value | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| ix_village_si | village_survey_item_id | no | 1 |
| PRIMARY | village_survey_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
