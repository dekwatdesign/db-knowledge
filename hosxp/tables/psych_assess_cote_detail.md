# `psych_assess_cote_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_cote_detail_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_cote_detail_score | int(11) | YES |  | NULL |  |  |
| psych_assess_question_id | int(11) | YES |  | NULL |  |  |
| psych_assess_answer_id | int(11) | YES |  | NULL |  |  |
| psych_assess_cote_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpsych_assess_cote21 | psych_assess_cote_id | no | 1 |
| PRIMARY | psych_assess_cote_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
