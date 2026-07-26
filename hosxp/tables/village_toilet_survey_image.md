# `village_toilet_survey_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_toilet_survey_image_id | int(11) | NO | PRI | 0 |  |  |
| village_toilet_survey_id | int(11) | YES | MUL | NULL |  |  |
| image_no | int(11) | YES |  | NULL |  |  |
| image_data | longblob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_toilet_survey_id | village_toilet_survey_id | no | 1 |
| PRIMARY | village_toilet_survey_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
