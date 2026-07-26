# `psych_assess_child`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_child_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_child_age_year | int(11) | YES |  | NULL |  |  |
| psych_assess_child_age_month | int(11) | YES |  | NULL |  |  |
| psych_assess_child_gm_year | int(11) | YES |  | NULL |  |  |
| psych_assess_child_gm_month | int(11) | YES |  | NULL |  |  |
| psych_assess_child_fm_year | int(11) | YES |  | NULL |  |  |
| psych_assess_child_fm_month | int(11) | YES |  | NULL |  |  |
| psych_assess_child_rl_year | int(11) | YES |  | NULL |  |  |
| psych_assess_child_rl_month | int(11) | YES |  | NULL |  |  |
| psych_assess_child_el_year | int(11) | YES |  | NULL |  |  |
| psych_assess_child_el_month | int(11) | YES |  | NULL |  |  |
| psych_assess_child_ps_year | int(11) | YES |  | NULL |  |  |
| psych_assess_child_ps_month | int(11) | YES |  | NULL |  |  |
| psych_assess_head_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_head_id | psych_assess_head_id | no | 1 |
| PRIMARY | psych_assess_child_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
