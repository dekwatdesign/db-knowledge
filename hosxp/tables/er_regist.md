# `er_regist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| er_period | int(4) | YES | MUL | NULL |  |  |
| er_pt_type | int(4) | YES | MUL | NULL |  |  |
| er_emergency_type | int(4) | YES |  | NULL |  |  |
| er_dch_type | int(4) | YES |  | NULL |  |  |
| er_doctor | varchar(7) | YES | MUL | NULL |  |  |
| er_legal_action | char(1) | YES |  | NULL |  |  |
| er_time_1 | time | YES |  | NULL |  |  |
| er_time_2 | time | YES |  | NULL |  |  |
| er_time_3 | time | YES |  | NULL |  |  |
| dba | char(1) | YES |  | NULL |  |  |
| er_list | varchar(250) | YES |  | NULL |  |  |
| oper_note | varchar(250) | YES |  | NULL |  |  |
| enter_er_time | datetime | YES |  | NULL |  |  |
| doctor_tx_time | datetime | YES |  | NULL |  |  |
| finish_time | datetime | YES |  | NULL |  |  |
| vn_guid | varchar(38) | YES | MUL | NULL |  |  |
| observe | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| ems_command_list_id | int(11) | YES |  | NULL |  |  |
| er_screen | char(1) | YES |  | NULL |  |  |
| er_emergency_level_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(50) | YES |  | NULL |  |  |
| er_depcode | varchar(3) | YES |  | NULL |  |  |
| leave_datetime | datetime | YES |  | NULL |  |  |
| er_leave_status_id | int(11) | YES |  | NULL |  |  |
| er_indication_type_id | int(11) | YES |  | NULL |  |  |
| door_to_doctor_second | int(11) | YES |  | NULL |  |  |
| length_of_stay_second | int(11) | YES |  | NULL |  |  |
| time_to_triage_second | int(11) | YES |  | NULL |  |  |
| triage_datetime | datetime | YES |  | NULL |  |  |
| unplanned_return | char(1) | YES |  | NULL |  |  |
| last_visit_er_hour | int(11) | YES |  | NULL |  |  |
| stroke_needle_datetime | datetime | YES |  | NULL |  |  |
| stemi_balloon_datetime | datetime | YES |  | NULL |  |  |
| door_to_balloon_second | int(11) | YES |  | NULL |  |  |
| door_to_needle_second | int(11) | YES |  | NULL |  |  |
| do_stroke_needle | char(1) | YES |  | NULL |  |  |
| do_stemi_balloon | char(1) | YES |  | NULL |  |  |
| do_antibiotics | char(1) | YES |  | NULL |  |  |
| antibiotics_datetime | datetime | YES |  | NULL |  |  |
| antibiotics_second | int(11) | YES |  | NULL |  |  |
| news2_score | int(11) | YES |  | NULL |  |  |
| consciousness_level_type_id | int(11) | YES |  | NULL |  |  |
| has_oxygen_ventilator | char(1) | YES |  | NULL |  |  |
| has_hypercapnic_rf | char(1) | YES |  | NULL |  |  |
| news2_score_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| er_doctor | er_doctor | no | 1 |
| er_period | er_period | no | 1 |
| er_pt_type | er_pt_type | no | 1 |
| ix_vn_guid | vn_guid | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
