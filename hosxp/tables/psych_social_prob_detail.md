# `psych_social_prob_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_social_prob_detail_id | int(11) | NO | PRI | 0 |  |  |
| psych_social_prob_id | int(11) | YES | MUL | NULL |  |  |
| psych_social_prob_items_code | char(4) | YES |  | NULL |  |  |
| psych_social_prob_detail_note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| psych_social_prob_items_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_social_prob_id | psych_social_prob_id | no | 1 |
| PRIMARY | psych_social_prob_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
