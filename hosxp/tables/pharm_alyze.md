# `pharm_alyze`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_workload_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| pharm_workload_flag | char(1) | YES |  | NULL |  |  |
| pharm_workload_startdate | date | YES |  | NULL |  |  |
| pharm_workload_starttime | time | YES |  | NULL |  |  |
| pharm_workload_staff | varchar(15) | YES |  | NULL |  |  |
| phama_patient_type | varchar(20) | YES |  | NULL |  |  |
| pharm_med_note | longtext | YES |  | NULL |  |  |
| pharm_problem_note | longtext | YES |  | NULL |  |  |
| pharm_plan_note | longtext | YES |  | NULL |  |  |
| pharm_follow_date | date | YES |  | NULL |  |  |
| pharm_follow_note | varchar(200) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| pharm_cause_follow_id | int(11) | YES | MUL | NULL |  |  |
| pharm_type_id | int(11) | YES | MUL | NULL |  |  |
| med_recon_id | int(11) | YES | MUL | NULL |  |  |
| drp_regist_id | int(11) | YES | MUL | NULL |  |  |
| drug_counseling_id | int(11) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| dep_type | varchar(3) | YES |  | NULL |  |  |
| pharm_workload_entrydatetime | datetime | YES |  | NULL |  |  |
| pharm_workload_patient_status | varchar(20) | YES |  | NULL |  |  |
| pharm_workload_enddate | date | YES |  | NULL |  |  |
| pharm_workload_endtime | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdrp_regist78_copy1 | drp_regist_id | no | 1 |
| ix_Refdrug_counseling_list97_copy1 | drug_counseling_id | no | 1 |
| ix_Refmed_recon76_copy1 | med_recon_id | no | 1 |
| ix_Refpharm_cause_follow29_copy1 | pharm_cause_follow_id | no | 1 |
| ix_Refpharm_type17_copy1 | pharm_type_id | no | 1 |
| PRIMARY | pharm_workload_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
