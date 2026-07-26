# `palliative_care_patient_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_patient_register_id | int(11) | NO | PRI | 0 |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| palliative_care_patient_register_no | varchar(9) | YES |  | NULL |  |  |
| palliative_care_patient_register_date | date | YES |  | NULL |  |  |
| palliative_care_patient_register_begin_date | date | YES |  | NULL |  |  |
| palliative_care_patient_register_dx_code | varchar(10) | YES |  | NULL |  |  |
| palliative_care_last_tool_pss_score | varchar(10) | YES |  | NULL |  |  |
| palliative_care_last_tool_pain_score | varchar(10) | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(10) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| palliative_care_patient_status_id | int(11) | YES |  | NULL |  |  |
| palliative_care_consider_visit_id | int(11) | YES |  | NULL |  |  |
| palliative_care_patient_register_death_status | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_morphine_pain | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_morphine_pant | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_plan_care | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_home_visit | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_palliative_care_home | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_palliative_care_hospital | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_care_family | char(1) | YES |  | NULL |  |  |
| palliative_care_abstract_receive_tool | char(1) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| palliative_care_clinic_code | varchar(6) | YES |  | NULL |  |  |
| palliative_care_discharge | char(1) | YES |  | NULL |  |  |
| palliative_care_discharge_date | date | YES |  | NULL |  |  |
| palliative_care_discharge_type_id | int(11) | YES |  | NULL |  |  |
| palliative_care_patient_register_hhc_auto | char(1) | YES |  | NULL |  |  |
| clinic_member_status_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| online_palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| online_palliative_care_patient_register_check | char(1) | YES |  | NULL |  |  |
| online_palliative_care_patient_register_hospcode | varchar(9) | YES |  | NULL |  |  |
| online_palliative_care_patient_register_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_patient_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
