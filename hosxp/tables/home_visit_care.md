# `home_visit_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| home_visit_care_id | int(11) | NO | PRI | 0 |  |  |
| doctorcode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| home_vt_care_date | date | YES |  | NULL |  |  |
| home_vt_care_starttime | time | YES |  | NULL |  |  |
| home_vt_care_endtime | time | YES |  | NULL |  |  |
| home_vt_care_health_issue | text | YES |  | NULL |  |  |
| home_vt_care_continuous | text | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| home_vt_care_other_hospcode | text | YES |  | NULL |  |  |
| home_vt_care_treat | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| home_visit_patient_type_id | int(11) | YES |  | NULL |  |  |
| home_visit_indicate_id | int(11) | YES |  | NULL |  |  |
| home_visit_treat_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | home_visit_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
