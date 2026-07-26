# `home_visit_follow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| home_visit_follow_id | int(11) | NO | PRI | 0 |  |  |
| doctorcode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| home_vt_follow_date | date | YES |  | NULL |  |  |
| home_vt_follow_starttime | time | YES |  | NULL |  |  |
| home_vt_follow_endtime | time | YES |  | NULL |  |  |
| home_vt_follow_count | int(11) | YES |  | NULL |  |  |
| home_visit_health_issue_id | int(11) | YES |  | NULL |  |  |
| home_vt_follow_health_issue | text | YES |  | NULL |  |  |
| home_visit_health_check_id | int(11) | YES |  | NULL |  |  |
| home_vt_follow_health_check | text | YES |  | NULL |  |  |
| home_vt_follow_next_date | date | YES |  | NULL |  |  |
| home_vt_follow_next_starttime | time | YES |  | NULL |  |  |
| home_vt_follow_next_endtime | time | YES |  | NULL |  |  |
| home_vt_follow_next_plan | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| home_visit_care_id | int(11) | YES |  | NULL |  |  |
| home_vt_patient_signed_id | int(11) | YES |  | NULL |  |  |
| home_vt_staff_signed_id | int(11) | YES |  | NULL |  |  |
| home_visit_relation_id | int(11) | YES |  | NULL |  |  |
| home_vt_relative_signed_id | int(11) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | home_visit_follow_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
