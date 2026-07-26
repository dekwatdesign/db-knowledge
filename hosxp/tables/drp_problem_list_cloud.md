# `drp_problem_list_cloud`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_guid | varchar(38) | NO | PRI |  |  |  |
| hospital_code | varchar(9) | YES | MUL | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| drp_problem_list_id | int(11) | YES | MUL | NULL |  |  |
| drp_regist_id | int(11) | YES | MUL | NULL |  |  |
| drp_problem_id | int(11) | YES |  | NULL |  |  |
| drp_problem_note | text | YES |  | NULL |  |  |
| drp_problem_type_id | int(11) | YES |  | NULL |  |  |
| drp_discover_type_id | int(11) | YES |  | NULL |  |  |
| drp_cause_id | int(11) | YES |  | NULL |  |  |
| drp_intervention_type_id_1 | int(11) | YES |  | NULL |  |  |
| drp_intervention_type_id_2 | int(11) | YES |  | NULL |  |  |
| drp_intervention_type_id_3 | int(11) | YES |  | NULL |  |  |
| intervention_note | varchar(250) | YES |  | NULL |  |  |
| drp_datetime | datetime | YES | MUL | NULL |  |  |
| need_follow_up | char(1) | YES |  | NULL |  |  |
| drp_outcome_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| drp_cause_group_code | varchar(5) | YES |  | NULL |  |  |
| medication_name | varchar(200) | YES |  | NULL |  |  |
| medication_atc_code | varchar(20) | YES |  | NULL |  |  |
| medication_atc_name | varchar(200) | YES |  | NULL |  |  |
| medication_atc_desc | varchar(250) | YES |  | NULL |  |  |
| medication_taken_qty | double(22,3) | YES |  | NULL |  |  |
| drp_problem_source_text | varchar(200) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| drp_problem_discover_text | varchar(200) | YES |  | NULL |  |  |
| drp_problem_group_code | varchar(5) | YES |  | NULL |  |  |
| intervention_time_min | int(11) | YES |  | NULL |  |  |
| drp_acceptance_type_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| is_potential_problem | char(1) | YES |  | NULL |  |  |
| is_manifest_problem | char(1) | YES |  | NULL |  |  |
| drp_problem_text | varchar(250) | YES |  | NULL |  |  |
| drp_acceptance_text | varchar(250) | YES |  | NULL |  |  |
| drp_outcome_text | varchar(250) | YES |  | NULL |  |  |
| officer_name_text | varchar(50) | YES |  | NULL |  |  |
| drp_active | char(1) | YES | MUL | NULL |  |  |
| drp_cause_text | varchar(2000) | YES |  | NULL |  |  |
| drp_intervention_text | varchar(2000) | YES |  | NULL |  |  |
| update_flag | int(11) | YES |  | NULL |  |  |
| hospital_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_drp_datetime | drp_datetime | no | 1 |
| ix_drp_regist_id | drp_regist_id | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hn | hospital_code | no | 2 |
| ix_hn_active | drp_active | no | 1 |
| ix_hn_active | hn | no | 2 |
| ix_hn_active | hospital_code | no | 3 |
| ix_hospital_code | hospital_code | no | 1 |
| ix_hospital_code_index | drp_problem_list_id | yes | 1 |
| ix_hospital_code_index | hospital_code | yes | 2 |
| PRIMARY | drp_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
