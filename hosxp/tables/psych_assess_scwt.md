# `psych_assess_scwt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_scwt_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_head_id | int(11) | YES | MUL | NULL |  |  |
| psych_assess_scwt_word | text | YES |  | NULL |  |  |
| psych_assess_scwt_color | text | YES |  | NULL |  |  |
| psych_assess_scwt_evaluate | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_head_id | psych_assess_head_id | no | 1 |
| PRIMARY | psych_assess_scwt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
