# `survey_chanthaburi_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| survey_chanthaburi_year_id | int(11) | NO | PRI | 0 |  |  |
| survey_year_period_id | int(11) | YES |  | NULL |  |  |
| survey_chanthaburi_year_name | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | survey_chanthaburi_year_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
