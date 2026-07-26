# `er_nursing_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| arrive_time | datetime | YES |  | NULL |  |  |
| referin_person | varchar(50) | YES |  | NULL |  |  |
| trauma | char(1) | YES |  | NULL |  |  |
| bba | char(1) | YES |  | NULL |  |  |
| dba | char(1) | YES |  | NULL |  |  |
| psychic | char(1) | YES |  | NULL |  |  |
| revisit48hr | char(1) | YES |  | NULL |  |  |
| gcs_e | double(15,3) | YES |  | NULL |  |  |
| gcs_v | double(15,3) | YES |  | NULL |  |  |
| gcs_m | double(15,3) | YES |  | NULL |  |  |
| pupil_l | double(15,3) | YES |  | NULL |  |  |
| pupil_r | double(15,3) | YES |  | NULL |  |  |
| inform_person | varchar(50) | YES |  | NULL |  |  |
| interview_person | varchar(50) | YES |  | NULL |  |  |
| report_doctor_time | datetime | YES |  | NULL |  |  |
| doctor_finish_time | datetime | YES |  | NULL |  |  |
| support_information | varchar(250) | YES |  | NULL |  |  |
| visit_type | char(1) | YES |  | NULL |  |  |
| transporter | varchar(50) | YES |  | NULL |  |  |
| er_accident_type_id | int(11) | YES |  | NULL |  |  |
| er_emergency_type | int(11) | YES |  | NULL |  |  |
| er_refer_hosptype_id | int(11) | YES |  | NULL |  |  |
| er_refer_sender_id | int(11) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| discharge_time | time | YES |  | NULL |  |  |
| admit_2hr | char(1) | YES |  | NULL |  |  |
| er_transfer_hosptype_id | int(11) | YES |  | NULL |  |  |
| accident_in_province | char(1) | YES |  | NULL |  |  |
| accident_admit | char(1) | YES |  | NULL |  |  |
| accident_dead_before_arrive | char(1) | YES |  | NULL |  |  |
| accident_dead_in_hospital | char(1) | YES |  | NULL |  |  |
| accident_transport_type_id | int(11) | YES |  | NULL |  |  |
| accident_type_1 | int(11) | YES |  | NULL |  |  |
| accident_type_2 | int(11) | YES |  | NULL |  |  |
| accident_type_3 | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| accident_type_4 | int(11) | YES |  | NULL |  |  |
| accident_type_5 | int(11) | YES |  | NULL |  |  |
| accident_type_6 | int(11) | YES |  | NULL |  |  |
| o2sat | double(15,3) | YES |  | NULL |  |  |
| accident_place_type_id | int(11) | YES |  | NULL |  |  |
| accident_person_type_id | int(11) | YES |  | NULL |  |  |
| accident_alcohol_type_id | int(11) | YES |  | NULL |  |  |
| accident_drug_type_id | int(11) | YES |  | NULL |  |  |
| accident_airway_type_id | int(11) | YES |  | NULL |  |  |
| accident_bleed_type_id | int(11) | YES |  | NULL |  |  |
| accident_belt_type_id | int(11) | YES |  | NULL |  |  |
| accident_helmet_type_id | int(11) | YES |  | NULL |  |  |
| accident_splint_type_id | int(11) | YES |  | NULL |  |  |
| accident_fluid_type_id | int(11) | YES |  | NULL |  |  |
| accident_note_text | text | YES |  | NULL |  |  |
| accident_gis_lat | varchar(50) | YES |  | NULL |  |  |
| accident_gis_long | varchar(50) | YES |  | NULL |  |  |
| accident_datetime | datetime | YES |  | NULL |  |  |
| accident_place | varchar(200) | YES |  | NULL |  |  |
| pupil_l_text | varchar(200) | YES |  | NULL |  |  |
| pupil_r_text | varchar(200) | YES |  | NULL |  |  |
| accident_immo_cs_type_id | int(11) | YES |  | NULL |  |  |
| accident_vehicle_regno | varchar(100) | YES |  | NULL |  |  |
| coma_score | int(11) | YES |  | NULL |  |  |
| br1 | int(11) | YES |  | NULL |  |  |
| br2 | int(11) | YES |  | NULL |  |  |
| br3 | int(11) | YES |  | NULL |  |  |
| br4 | int(11) | YES |  | NULL |  |  |
| br5 | int(11) | YES |  | NULL |  |  |
| br6 | int(11) | YES |  | NULL |  |  |
| ais1 | int(11) | YES |  | NULL |  |  |
| ais2 | int(11) | YES |  | NULL |  |  |
| ais3 | int(11) | YES |  | NULL |  |  |
| ais4 | int(11) | YES |  | NULL |  |  |
| ais5 | int(11) | YES |  | NULL |  |  |
| ais6 | int(11) | YES |  | NULL |  |  |
| gcs | int(11) | YES |  | NULL |  |  |
| rts | double(22,6) | YES |  | NULL |  |  |
| ps | double(22,3) | YES |  | NULL |  |  |
| iss | double(22,6) | YES |  | NULL |  |  |
| is_blunt | char(1) | YES |  | NULL |  |  |
| coma_score_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
