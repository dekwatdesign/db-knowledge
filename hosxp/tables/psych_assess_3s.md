# `psych_assess_3s`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_3s_id | int(11) | NO | PRI | 0 |  |  |
| vn_an | varchar(13) | YES | MUL | NULL |  |  |
| psych_assess_3s_date | date | YES |  | NULL |  |  |
| psych_assess_3s_resistance_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_resistance_chk11 | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_resistance_chk12 | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_adit_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_narcotic_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_smiv_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_smiv_chk_grp | text | YES |  | NULL |  |  |
| psych_assess_3s_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_law_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_law_chk_grp | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |
| psych_assess_3s_re_admit_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_fam_chk | char(1) | YES |  | NULL |  |  |
| psych_assess_3s_fam_chk_grp | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_an | vn_an | no | 1 |
| PRIMARY | psych_assess_3s_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
