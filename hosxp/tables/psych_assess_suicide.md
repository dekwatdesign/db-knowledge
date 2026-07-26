# `psych_assess_suicide`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_suicide_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| psych_assess_suicide_date | date | YES |  | NULL |  |  |
| psych_assess_suicide_time | time | YES |  | NULL |  |  |
| psych_assess_suicide_degree | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_note | char(5) | YES |  | NULL |  |  |
| psych_assess_suicide_status | char(1) | YES |  | NULL |  |  |
| suicide_datebegin_watch | date | YES |  | NULL |  |  |
| suicide_dateend_watch | date | YES |  | NULL |  |  |
| psych_assess_suicide_dateend | date | YES |  | NULL |  |  |
| psych_assess_suicide_a | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_v | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_e | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_r | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_i | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_co | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_ect | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_ni | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_ci | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_adr | char(1) | YES |  | NULL |  |  |
| psych_assess_suicide_506s | char(1) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psych_assess_suicide_resuicide | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_assess_suicide_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
