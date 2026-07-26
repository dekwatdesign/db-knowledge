# `psych_therapy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_therapy_id | int(11) | NO | PRI | 0 |  |  |
| vn_an | varchar(13) | YES | MUL | NULL |  |  |
| psych_therapy_date | date | YES |  | NULL |  |  |
| psych_therapy_chk | char(1) | YES |  | NULL |  |  |
| psych_therapy_grp_chk | varchar(50) | YES |  | NULL |  |  |
| psych_therapy_act_chk | char(1) | YES |  | NULL |  |  |
| psych_therapy_act_grp_chk | varchar(50) | YES |  | NULL |  |  |
| psych_therapy_bhvior_chk | char(1) | YES |  | NULL |  |  |
| psych_therapy_bperson_chk | char(1) | YES |  | NULL |  |  |
| psych_therapy_bperson_grp_chk | varchar(50) | YES |  | NULL |  |  |
| psych_therapy_person_chk | char(1) | YES |  | NULL |  |  |
| psych_therapy_family_chk | char(1) | YES |  | NULL |  |  |
| psych_therapy_other_chk | char(1) | YES |  | NULL |  |  |
| psych_therapy_other_note | varchar(255) | YES |  | NULL |  |  |
| psych_therapy_note | text | YES |  | NULL |  |  |
| psych_therapy_co | varchar(10) | YES |  | NULL |  |  |
| psych_therapy_comment | varchar(10) | YES |  | NULL |  |  |
| psych_therapy_feel | varchar(10) | YES |  | NULL |  |  |
| psych_therapy_interest | varchar(10) | YES |  | NULL |  |  |
| psych_therapy_social | varchar(10) | YES |  | NULL |  |  |
| psych_therapy_group | varchar(10) | YES |  | NULL |  |  |
| psych_therapy_develop | varchar(10) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |
| staff_assessment | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_an | vn_an | no | 1 |
| PRIMARY | psych_therapy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
