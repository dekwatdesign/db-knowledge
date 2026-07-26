# `survey_satisfy_head_pcu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| survey_satisfy_head_id | int(11) | NO | PRI | 0 |  |  |
| survey_satisfy_age | int(11) | YES |  | NULL |  |  |
| survey_satisfy_suggest | text | YES |  | NULL |  |  |
| survey_satisfy_date | datetime | YES |  | NULL |  |  |
| survey_satisfy_sum_1 | int(11) | YES |  | NULL |  |  |
| survey_satisfy_sum_2 | int(11) | YES |  | NULL |  |  |
| survey_satisfy_sum_3 | int(11) | YES |  | NULL |  |  |
| survey_satisfy_sum_4 | int(11) | YES |  | NULL |  |  |
| survey_satisfy_sum_5 | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | survey_satisfy_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
