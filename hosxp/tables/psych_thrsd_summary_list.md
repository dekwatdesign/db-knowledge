# `psych_thrsd_summary_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_thrsd_summary_list_id | int(11) | NO | PRI | 0 |  |  |
| psych_thrsd_summary_id | int(11) | YES | MUL | NULL |  |  |
| psych_thrsd_question_id | int(11) | YES | MUL | NULL |  |  |
| psych_thrsd_answer_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_thrsd_answer_id | psych_thrsd_answer_id | no | 1 |
| ix_psych_thrsd_question_id | psych_thrsd_question_id | no | 1 |
| ix_psych_thrsd_summary_id | psych_thrsd_summary_id | no | 1 |
| PRIMARY | psych_thrsd_summary_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
