# `operation_set`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_set_id | int(11) | NO | PRI | 0 |  |  |
| operation_set_type_id | int(11) | YES |  | NULL |  |  |
| operation_request_date | date | YES |  | NULL |  |  |
| operation_request_time | time | YES |  | NULL |  |  |
| operation_set_doctor_code | varchar(25) | YES |  | NULL |  |  |
| operation_set_date | date | YES | MUL | NULL |  |  |
| operation_set_time | time | YES |  | NULL |  |  |
| operation_time_type_id | int(11) | YES |  | NULL |  |  |
| operation_name | varchar(250) | YES |  | NULL |  |  |
| operation_position | varchar(100) | YES |  | NULL |  |  |
| operation_side | varchar(100) | YES |  | NULL |  |  |
| emergency_id | int(11) | YES |  | NULL |  |  |
| room_id | int(11) | YES | MUL | NULL |  |  |
| operation_type_id | int(11) | YES |  | NULL |  |  |
| operation_list_anes_type_id | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| provision_diagnosis_text | text | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| operation_list_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| operation_set_finish_date | date | YES |  | NULL |  |  |
| operation_set_finish_time | time | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| set_complete | char(1) | YES | MUL | NULL |  |  |
| duration_hour | int(11) | YES |  | NULL |  |  |
| duration_minute | int(11) | YES |  | NULL |  |  |
| operation_set_cmpn_id | int(11) | YES |  | NULL |  |  |
| anes_doctor_code | varchar(10) | YES |  | NULL |  |  |
| screen_text | text | YES |  | NULL |  |  |
| charge_vn | varchar(12) | YES |  | NULL |  |  |
| operation_set_npo_date | date | YES |  | NULL |  |  |
| operation_set_npo_time | time | YES |  | NULL |  |  |
| set_tf | char(1) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| operation_set_pc_type_id | int(11) | YES |  | NULL |  |  |
| gcs_scale_eye_type_id | int(11) | YES |  | NULL |  |  |
| gcs_scale_motor_type_id | int(11) | YES |  | NULL |  |  |
| gcs_scale_verbal_type_id | int(11) | YES |  | NULL |  |  |
| operation_set_depcode | varchar(3) | YES |  | NULL |  |  |
| operation_set_resp_type_id | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| temperature | double(15,2) | YES |  | NULL |  |  |
| schedule_ok | char(1) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| height_cm | double(15,1) | YES |  | NULL |  |  |
| bmi | double(15,2) | YES |  | NULL |  |  |
| send_notify | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_id | oapp_id | no | 1 |
| ix_operation_list_id | operation_list_id | no | 1 |
| ix_room_id | room_id | no | 1 |
| ix_room_id_date | room_id | no | 1 |
| ix_room_id_date | operation_set_date | no | 2 |
| ix_room_id_date_index | operation_set_date | no | 1 |
| ix_room_id_date_index | room_id | no | 2 |
| ix_set_complete | set_complete | no | 1 |
| ix_set_date | operation_set_date | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | operation_set_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
