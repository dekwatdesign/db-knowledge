# `handicapped_hhc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_location_near | char(50) | YES |  | NULL |  |  |
| handicapped_hhc_date | date | YES |  | NULL |  |  |
| handicapped_hhc_time | time | YES |  | NULL |  |  |
| t_hospcode | varchar(9) | YES |  | NULL |  |  |
| handicapped_hhc_level | varchar(50) | YES |  | NULL |  |  |
| handicapped_hhc_bw | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_height | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_bps | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_bpd | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_pulse | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_rr | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_temperature | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_text | varchar(50) | YES |  | NULL |  |  |
| spclty | char(10) | YES | MUL | NULL |  |  |
| handicapped_patient_register_id | int(11) | YES | MUL | NULL |  |  |
| handicapped_hhc_doctor_id | int(11) | YES | MUL | NULL |  |  |
| handicapped_hhc_conscious_level_id | int(11) | YES |  | NULL |  |  |
| handicapped_hhc_diag_id | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_complications_id | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_status_text | char(50) | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| code | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_hhc_n | char(10) | YES |  | NULL |  |  |
| handicapped_rehabilitation_id | int(11) | YES |  | NULL |  |  |
| handicapped_hhc_activity_list_id | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_status_id | int(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_plan | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refhandicapped_hhc_doctor50 | handicapped_hhc_doctor_id | no | 1 |
| ix_Refhandicapped_patient_register44 | handicapped_patient_register_id | no | 1 |
| ix_Refspclty43 | spclty | no | 1 |
| PRIMARY | handicapped_hhc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
