# `house_survey_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_survey_summary_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| house_survey_item_id | int(11) | YES |  | NULL |  |  |
| house_item_value | varchar(25) | YES |  | NULL |  |  |
| house_item_value_text | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_id | house_id | no | 1 |
| ix_house_id_item_id | house_id | no | 1 |
| ix_house_id_item_id | house_survey_item_id | no | 2 |
| PRIMARY | house_survey_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
