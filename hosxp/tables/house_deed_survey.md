# `house_deed_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_deed_survey_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| house_deed_id | int(11) | YES |  | NULL |  |  |
| house_deed_no | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_id | house_id | no | 1 |
| PRIMARY | house_deed_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
