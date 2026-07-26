# `psych_assess_pms`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_pms_id | int(11) | NO | PRI | 0 |  |  |
| vnan | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psych_assess_pms_date | date | YES |  | NULL |  |  |
| psych_assess_pms1 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms2 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms3 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms4 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms5 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms6 | char(10) | YES |  | NULL |  |  |
| psych_assess_pms7 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms8 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms9 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms10 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms11 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms12 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms13 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms14 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms15 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms16 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms17 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms18 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms19 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms20 | varchar(5) | YES |  | NULL |  |  |
| psych_assess_pms_sum | int(11) | YES |  | NULL |  |  |
| staff_assess | varchar(50) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vnan | vnan | no | 1 |
| PRIMARY | psych_assess_pms_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
