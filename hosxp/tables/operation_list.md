# `operation_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_id | int(11) | NO | PRI | 0 |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_time | time | YES | MUL | NULL |  |  |
| request_doctor | varchar(6) | YES | MUL | NULL |  |  |
| operation_date | date | YES |  | NULL |  |  |
| operation_time | time | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| finish | char(1) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| room_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| patient_department | char(3) | YES |  | NULL |  |  |
| provision_diagnosis | varchar(9) | YES |  | NULL |  |  |
| provision_diagnosis_text | varchar(200) | YES |  | NULL |  |  |
| operation_name | varchar(250) | YES |  | NULL |  |  |
| operation_position | varchar(250) | YES |  | NULL |  |  |
| operation_side | varchar(250) | YES |  | NULL |  |  |
| require_anes | char(1) | YES |  | NULL |  |  |
| require_icu | char(1) | YES |  | NULL |  |  |
| status_id | int(11) | YES | MUL | NULL |  |  |
| emergency_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| enter_date | date | YES |  | NULL |  |  |
| enter_time | time | YES |  | NULL |  |  |
| leave_date | date | YES |  | NULL |  |  |
| leave_time | time | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| age_text | varchar(50) | YES |  | NULL |  |  |
| disease_text | varchar(100) | YES |  | NULL |  |  |
| npo_date_time | datetime | YES |  | NULL |  |  |
| send_spclty | char(2) | YES |  | NULL |  |  |
| operation_type_id | int(11) | YES |  | NULL |  |  |
| operation_time_type_id | int(11) | YES |  | NULL |  |  |
| request_operation_date | date | YES |  | NULL |  |  |
| request_operation_time | time | YES |  | NULL |  |  |
| confirm_receive | char(1) | YES |  | NULL |  |  |
| confirm_complete | char(1) | YES |  | NULL |  |  |
| anes_complete | char(1) | YES |  | NULL |  |  |
| send_depcode | char(3) | YES |  | NULL |  |  |
| chronic_disease | varchar(250) | YES |  | NULL |  |  |
| operation_note | text | YES |  | NULL |  |  |
| operation_anes_physical_status_id | int(11) | YES |  | NULL |  |  |
| operation_consciousness_id | int(11) | YES |  | NULL |  |  |
| operation_respiration_id | int(11) | YES |  | NULL |  |  |
| coma_score_e | int(11) | YES |  | NULL |  |  |
| coma_score_m | int(11) | YES |  | NULL |  |  |
| coma_score_v | char(1) | YES |  | NULL |  |  |
| operation_sum_price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| operation_list_anes_type_id | int(11) | YES |  | NULL |  |  |
| patient_type | char(3) | YES |  | NULL |  |  |
| on_call | char(1) | YES |  | NULL |  |  |
| post_diagnosis | varchar(7) | YES |  | NULL |  |  |
| pre_diagnosis_text_list | text | YES |  | NULL |  |  |
| post_diagnosis_text_list | text | YES |  | NULL |  |  |
| pre_anes_operation_note | text | YES |  | NULL |  |  |
| intra_anes_operation_note | text | YES |  | NULL |  |  |
| post_anes_operation_note | text | YES |  | NULL |  |  |
| operation_check_date | date | YES |  | NULL |  |  |
| operation_check_time | time | YES |  | NULL |  |  |
| arrive_date | date | YES |  | NULL |  |  |
| arrive_time | time | YES |  | NULL |  |  |
| doctor_incision_date | date | YES |  | NULL |  |  |
| doctor_incision_time | time | YES |  | NULL |  |  |
| doctor_closing_date | date | YES |  | NULL |  |  |
| doctor_closing_time | time | YES |  | NULL |  |  |
| operation_facility_id | int(11) | YES |  | NULL |  |  |
| operation_set_id | int(11) | YES | MUL | NULL |  |  |
| sub_spclty_id | int(11) | YES |  | NULL |  |  |
| dx_note | text | YES |  | NULL |  |  |
| send_operation_room_id | int(11) | YES |  | NULL |  |  |
| re_operation | char(1) | YES |  | NULL |  |  |
| asset_text | text | YES |  | NULL |  |  |
| sp_med_text | text | YES |  | NULL |  |  |
| prepare_text | text | YES |  | NULL |  |  |
| blood_loss | double(15,3) | YES |  | NULL |  |  |
| note_rtf | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| operation_detail_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_set_id | operation_set_id | no | 1 |
| PRIMARY | operation_id | yes | 1 |
| request_date | request_date | no | 1 |
| request_doctor | request_doctor | no | 1 |
| request_time | request_time | no | 1 |
| status_id | status_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
