# `opd_qs_room_sub_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_room_s_queue_id | int(11) | NO | PRI | 0 |  |  |
| queue_slot_number | varchar(50) | YES |  | NULL |  |  |
| opd_qs_room_s_queue_start_date | date | YES |  | NULL |  |  |
| opd_qs_room_s_queue_start_time | time | YES |  | NULL |  |  |
| opd_qs_room_s_queue_status | char(1) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| cur_dep | varchar(3) | YES |  | NULL |  |  |
| opd_qs_call_status | char(1) | YES |  | NULL |  |  |
| opd_qs_doctor_call_status | char(1) | YES |  | NULL |  |  |
| opd_qs_doctor_call_time | time | YES |  | NULL |  |  |
| opd_qs_dispensary_call_status | char(1) | YES |  | NULL |  |  |
| opd_qs_kind_call | char(1) | YES |  | NULL |  |  |
| opd_qs_room_sub_id | int(11) | YES | MUL | NULL |  |  |
| opd_qs_slot_id | int(11) | YES |  | NULL |  |  |
| ovst_doctor_sign_id | int(11) | YES |  | NULL |  |  |
| opd_qs_dispensary_channel | int(11) | YES |  | NULL |  |  |
| opd_qs_financial_status | char(1) | YES |  | NULL |  |  |
| opd_qs_location_id_consult | int(11) | YES |  | NULL |  |  |
| opd_qs_doctor_sub_room | varchar(150) | YES |  | NULL |  |  |
| opd_qs_service_point_status | char(1) | YES |  | NULL |  |  |
| opd_qs_room_service_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refopd_qs_room_sub2 | opd_qs_room_sub_id | no | 1 |
| PRIMARY | opd_qs_room_s_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
