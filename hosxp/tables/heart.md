# `heart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(20) | NO | PRI |  |  |  |
| symptoms | varchar(250) | YES |  | NULL |  |  |
| heart_date | datetime | YES |  | NULL |  |  |
| heart_time | varchar(5) | YES |  | NULL |  |  |
| angina_id | varchar(5) | YES |  | NULL |  |  |
| dyspnea_id | varchar(5) | YES |  | NULL |  |  |
| syncope | varchar(5) | YES |  | NULL |  |  |
| cardiac_arrest | varchar(5) | YES |  | NULL |  |  |
| note_pi | text | YES |  | NULL |  |  |
| dm | varchar(5) | YES |  | NULL |  |  |
| family | varchar(5) | YES |  | NULL |  |  |
| dyslipidemia | varchar(5) | YES |  | NULL |  |  |
| prior_ptca | varchar(5) | YES |  | NULL |  |  |
| ht | varchar(5) | YES |  | NULL |  |  |
| smoking | varchar(5) | YES |  | NULL |  |  |
| prior_cabg | varchar(5) | YES |  | NULL |  |  |
| asa | varchar(5) | YES |  | NULL |  |  |
| heparin_lmwh | varchar(5) | YES |  | NULL |  |  |
| beta_blocker | varchar(5) | YES |  | NULL |  |  |
| apd_inhibitor | varchar(5) | YES |  | NULL |  |  |
| gp_inhibitor | varchar(5) | YES |  | NULL |  |  |
| acei_arb | varchar(5) | YES |  | NULL |  |  |
| warfarin | varchar(5) | YES |  | NULL |  |  |
| direct_antithrombin | varchar(5) | YES |  | NULL |  |  |
| statin | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | refer_no | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
