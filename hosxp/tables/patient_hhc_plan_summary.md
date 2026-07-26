# `patient_hhc_plan_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_plan_summary_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| clinic_list_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| patient_hhc_status_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_plan_summary_num | varchar(8) | YES |  | NULL |  |  |
| patient_hhc_plan_summary_date | date | YES |  | NULL |  |  |
| disease_group_list_text | varchar(250) | YES |  | NULL |  |  |
| hhc_summary_cc | text | YES |  | NULL |  |  |
| hhc_summary_hpi | text | YES |  | NULL |  |  |
| hhc_summary_diag_text | text | YES |  | NULL |  |  |
| hhc_summary_reason_text | text | YES |  | NULL |  |  |
| hhc_summary_problem_text | text | YES |  | NULL |  |  |
| hhc_summary_medical_text | text | YES |  | NULL |  |  |
| social_environmental_aspects | text | YES |  | NULL |  |  |
| forward_status | char(1) | YES |  | NULL |  |  |
| forward_hospcode | varchar(9) | YES |  | NULL |  |  |
| send_cloud_status | varchar(1) | YES |  | NULL |  |  |
| send_cloud_date | date | YES |  | NULL |  |  |
| family_members | int(11) | YES |  | NULL |  |  |
| member_relationships | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| doctor_name | varchar(150) | YES |  | NULL |  |  |
| oldcode | varchar(17) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| hhc_summary_medical_rtf | longtext | YES |  | NULL |  |  |
| hhc_summary_reason_rtf | longtext | YES |  | NULL |  |  |
| received_hospcode | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_hhc_plan_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
