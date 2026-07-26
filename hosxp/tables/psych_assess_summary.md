# `psych_assess_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_summary_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_summary_value | double(18,2) | YES |  | NULL |  |  |
| psych_assess_summary_result | text | YES |  | NULL |  |  |
| psych_assess_summary_note | text | YES |  | NULL |  |  |
| psych_assess_summary_status | varchar(5) | YES |  | NULL |  |  |
| psych_assess_summary_time | int(11) | YES |  | NULL |  |  |
| psych_assess_summary_mdp_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| psych_assess_setting_id | int(11) | YES | MUL | NULL |  |  |
| psych_mdp_type_id | int(11) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| psych_refer_st_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_psych_assess_setting_id | psych_assess_setting_id | no | 1 |
| ix_psych_assess_summary_mdp_id | psych_assess_summary_mdp_id | no | 1 |
| ix_psych_mdp_type_id | psych_mdp_type_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_assess_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
