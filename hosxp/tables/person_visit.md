# `person_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_visit_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_time | time | YES |  | NULL |  |  |
| visit_staff | varchar(100) | YES |  | NULL |  |  |
| visit_note | longtext | YES |  | NULL |  |  |
| visit_problem | longtext | YES |  | NULL |  |  |
| visit_service | longtext | YES |  | NULL |  |  |
| next_visit_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| bw | decimal(10,0) | YES |  | NULL |  |  |
| height | decimal(10,0) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| temperature | decimal(10,0) | YES |  | NULL |  |  |
| dx1 | varchar(10) | YES |  | NULL |  |  |
| dx2 | varchar(10) | YES |  | NULL |  |  |
| visit_advice | longtext | YES |  | NULL |  |  |
| visit_eval_text | longtext | YES |  | NULL |  |  |
| person_visit_type_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| clinic | varchar(3) | YES |  | NULL |  |  |
| waist | decimal(10,0) | YES |  | NULL |  |  |
| visit_staff_id | int(11) | YES |  | NULL |  |  |
| dtx1 | decimal(10,0) | YES |  | NULL |  |  |
| dtx2 | decimal(10,0) | YES |  | NULL |  |  |
| health_place | varchar(250) | YES |  | NULL |  |  |
| patient_hhc_plan_summary_id | int(11) | YES |  | NULL |  |  |
| pp_code_list | varchar(250) | YES |  | NULL |  |  |
| appointment_id | int(11) | YES |  | NULL |  |  |
| icd_9_code | varchar(250) | YES |  | NULL |  |  |
| icd_10_code | varchar(250) | YES |  | NULL |  |  |
| hn | varchar(255) | YES | MUL | NULL |  |  |
| visit_history | longtext | YES |  | NULL |  |  |
| visit_exam | longtext | YES |  | NULL |  |  |
| visit_psych | longtext | YES |  | NULL |  |  |
| visit_plan | longtext | YES |  | NULL |  |  |
| visit_education | longtext | YES |  | NULL |  |  |
| visit_summary | longtext | YES |  | NULL |  |  |
| person_visit_address_id | int(11) | YES | MUL | NULL |  |  |
| visit_latitude | varchar(100) | YES |  | NULL |  |  |
| visit_longitude | varchar(100) | YES |  | NULL |  |  |
| visit_location_address | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn_visit_date | hn | no | 1 |
| ix_hn_visit_date | visit_date | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| ix_person_visit_address_id | person_visit_address_id | no | 1 |
| PRIMARY | person_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
