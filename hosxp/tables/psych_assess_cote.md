# `psych_assess_cote`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_cote_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| psych_assess_cote_date | date | YES |  | NULL |  |  |
| psych_assess_cote_gen_score | int(11) | YES |  | NULL |  |  |
| psych_assess_cote_interp_score | int(11) | YES |  | NULL |  |  |
| psych_assess_cote_task_score | int(11) | YES |  | NULL |  |  |
| psych_assess_cote_sum_score | int(11) | YES |  | NULL |  |  |
| staff_name | varchar(80) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_add_name | varchar(80) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_assess_cote_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
