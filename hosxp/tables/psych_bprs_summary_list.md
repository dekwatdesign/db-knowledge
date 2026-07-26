# `psych_bprs_summary_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_bprs_summary_list_id | int(11) | NO | PRI | 0 |  |  |
| psych_bprs_summary_id | int(11) | YES | MUL | NULL |  |  |
| psych_bprs_question_id | int(11) | YES | MUL | NULL |  |  |
| psych_bprs_answer_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_bprs_answer_id | psych_bprs_answer_id | no | 1 |
| ix_psych_bprs_question_id | psych_bprs_question_id | no | 1 |
| ix_psych_bprs_summary_id | psych_bprs_summary_id | no | 1 |
| PRIMARY | psych_bprs_summary_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
