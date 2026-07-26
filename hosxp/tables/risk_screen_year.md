# `risk_screen_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_year_id | int(11) | NO | PRI | 0 |  |  |
| risk_year | int(11) | YES |  | NULL |  |  |
| risk_taget_count | int(11) | YES |  | NULL |  |  |
| risk_total_screen_count | int(11) | YES |  | NULL |  |  |
| risk_year_no | int(11) | YES |  | NULL |  |  |
| risk_year_date_begin | date | YES |  | NULL |  |  |
| risk_year_date_end | date | YES |  | NULL |  |  |
| risk_screen_age_id | int(11) | YES |  | NULL |  |  |
| result_risk | int(11) | YES |  | NULL |  |  |
| result_sick | int(11) | YES |  | NULL |  |  |
| result_default | int(11) | YES |  | NULL |  |  |
| result_job | int(11) | YES |  | NULL |  |  |
| risk_chronic_dm | int(11) | YES |  | NULL |  |  |
| risk_chronic_ht | int(11) | YES |  | NULL |  |  |
| risk_chronic_stk | int(11) | YES |  | NULL |  |  |
| risk_chronic_ob | int(11) | YES |  | NULL |  |  |
| sick_chronic_dm | int(11) | YES |  | NULL |  |  |
| sick_chronic_ht | int(11) | YES |  | NULL |  |  |
| sick_chronic_stk | int(11) | YES |  | NULL |  |  |
| sick_chronic_ob | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_screen_year_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
