# `operation_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_id | int(11) | NO | PRI | 0 |  |  |
| operation_cancel_type_id | int(11) | YES |  | NULL |  |  |
| operation_cancel_note | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| request_date | date | YES | MUL | NULL |  |  |
| request_time | time | YES |  | NULL |  |  |
| request_doctor | varchar(6) | YES |  | NULL |  |  |
| operation_date | date | YES |  | NULL |  |  |
| operation_time | time | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| finish | char(1) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| room_id | varchar(5) | YES |  | NULL |  |  |
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
| status_id | int(11) | YES |  | NULL |  |  |
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
| request_operation_date | date | YES | MUL | NULL |  |  |
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
| coma_score_v | int(11) | YES |  | NULL |  |  |
| operation_sum_price | double(15,3) | YES |  | NULL |  |  |
| operation_list_anes_type_id | int(11) | YES |  | NULL |  |  |
| patient_type | char(3) | YES |  | NULL |  |  |
| on_call | char(1) | YES |  | NULL |  |  |
| post_diagnosis | varchar(7) | YES |  | NULL |  |  |
| cancel_staff | varchar(50) | YES |  | NULL |  |  |
| cancel_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_reqdate | request_date | no | 1 |
| ix_reqdate2 | request_operation_date | no | 1 |
| PRIMARY | operation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
