# `opd_qs_slot`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_slot_id | int(11) | NO | PRI | 0 |  |  |
| schedule_date | date | YES | MUL | NULL |  |  |
| opd_queue_schedule_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| queue_slot_number | varchar(50) | YES |  | NULL |  |  |
| start_time | time | YES |  | NULL |  |  |
| finish_time | time | YES |  | NULL |  |  |
| opd_queue_register_id | int(11) | YES |  | NULL |  |  |
| time_second | int(11) | YES |  | NULL |  |  |
| slot_key | varchar(200) | YES |  | NULL |  |  |
| slot_busy | char(1) | YES |  | NULL |  |  |
| opd_queue_slot_type_id | int(11) | YES |  | NULL |  |  |
| ref_key | varchar(25) | YES | MUL | NULL |  |  |
| slot_register | char(1) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| call_status | char(1) | YES | MUL | NULL |  |  |
| call_datetime | datetime | YES |  | NULL |  |  |
| call_ok | char(1) | YES |  | NULL |  |  |
| queue_slot_number_int | int(11) | YES |  | NULL |  |  |
| service_time_second | int(11) | YES |  | NULL |  |  |
| opd_qs_room_id | int(11) | YES | MUL | NULL |  |  |
| register_staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| call_opd_qs_room_id | int(11) | YES |  | NULL |  |  |
| queue_datetime | datetime | YES |  | NULL |  |  |
| opd_qs_schedule_tmpl_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_room_id_vn_date | opd_qs_room_id | no | 1 |
| ix_opd_qs_room_id_vn_date | schedule_date | no | 2 |
| ix_opd_qs_room_id_vn_date | vn | no | 3 |
| ix_ref_key | ref_key | no | 1 |
| ix_sc1 | schedule_date | no | 1 |
| ix_sc1 | doctor_code | no | 2 |
| ix_sc1 | call_status | no | 3 |
| ix_sc1_index | call_status | no | 1 |
| ix_sc1_index | doctor_code | no | 2 |
| ix_sc1_index | schedule_date | no | 3 |
| ix_schedule_date_doctor_code | schedule_date | no | 1 |
| ix_schedule_date_doctor_code | doctor_code | no | 2 |
| ix_schedule_date_doctor_code_index | doctor_code | no | 1 |
| ix_schedule_date_doctor_code_index | schedule_date | no | 2 |
| ix_schedule_date_doctor_st | doctor_code | no | 1 |
| ix_schedule_date_doctor_st | opd_queue_slot_type_id | no | 2 |
| ix_schedule_date_doctor_st | schedule_date | no | 3 |
| ix_schedule_date_doctor_type | doctor_code | no | 1 |
| ix_schedule_date_doctor_type | opd_qs_schedule_tmpl_type_id | no | 2 |
| ix_schedule_date_doctor_type | schedule_date | no | 3 |
| ix_vn | vn | no | 1 |
| PRIMARY | opd_qs_slot_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
