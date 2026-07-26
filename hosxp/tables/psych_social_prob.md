# `psych_social_prob`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_social_prob_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| psych_social_prob_date | date | YES |  | NULL |  |  |
| psych_social_prob_diag_doctor | varchar(7) | YES |  | NULL |  |  |
| psych_social_prob_result_note | text | YES |  | NULL |  |  |
| psych_social_prob_note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| psych_refer_st_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_social_prob_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
