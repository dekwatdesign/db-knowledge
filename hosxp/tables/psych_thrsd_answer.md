# `psych_thrsd_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_thrsd_answer_id | int(11) | NO | PRI | 0 |  |  |
| psych_thrsd_answer_name | varchar(255) | YES |  | NULL |  |  |
| psych_thrsd_answer_score | int(11) | YES |  | NULL |  |  |
| psych_thrsd_question_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_thrsd_question_id | psych_thrsd_question_id | no | 1 |
| PRIMARY | psych_thrsd_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
