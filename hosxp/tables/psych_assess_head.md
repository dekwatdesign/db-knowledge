# `psych_assess_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_head_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| psych_assess_head_score | int(11) | YES |  | NULL |  |  |
| psych_assess_head_evalueate | varchar(255) | YES |  | NULL |  |  |
| psych_assess_head_vip | int(11) | YES |  | NULL |  |  |
| psych_assess_head_piq | int(11) | YES |  | NULL |  |  |
| psych_assess_head_fiq | int(11) | YES |  | NULL |  |  |
| psych_assess_head_note | text | YES |  | NULL |  |  |
| psych_assess_head_consult | text | YES |  | NULL |  |  |
| psych_assess_head_summary_note | text | YES |  | NULL |  |  |
| psych_assess_disabled_level_name | varchar(100) | YES |  | NULL |  |  |
| psych_assess_head_mdp_id | int(11) | YES |  | NULL |  |  |
| date_assessment | date | YES |  | NULL |  |  |
| psych_assess_topic_id | int(11) | YES |  | NULL |  |  |
| psych_assess_iq_level_id | int(11) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_assess_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
