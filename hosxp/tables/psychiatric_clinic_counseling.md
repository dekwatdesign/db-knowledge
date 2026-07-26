# `psychiatric_clinic_counseling`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_counseling_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_counseling_date | date | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_order | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_code | int(11) | YES |  | NULL |  |  |
| counseling_problem_1 | int(11) | YES |  | NULL |  |  |
| counseling_problem_1_text | varchar(250) | YES |  | NULL |  |  |
| counseling_skill_1 | char(1) | YES |  | NULL |  |  |
| counseling_skill_2 | char(1) | YES |  | NULL |  |  |
| counseling_skill_3 | char(1) | YES |  | NULL |  |  |
| counseling_skill_4 | char(1) | YES |  | NULL |  |  |
| counseling_skill_5 | char(1) | YES |  | NULL |  |  |
| counseling_skill_6 | char(1) | YES |  | NULL |  |  |
| counseling_skill_6_text | varchar(250) | YES |  | NULL |  |  |
| counseling_home_work | varchar(250) | YES |  | NULL |  |  |
| counseling_result | varchar(250) | YES |  | NULL |  |  |
| counseling_appointment_1 | char(1) | YES |  | NULL |  |  |
| counseling_appointment_1_date | date | YES |  | NULL |  |  |
| counseling_appointment_2 | char(1) | YES |  | NULL |  |  |
| counseling_person | int(11) | YES |  | NULL |  |  |
| counseling_type_id | char(1) | YES |  | NULL |  |  |
| counseling_problem_2 | int(11) | YES |  | NULL |  |  |
| counseling_problem_2_text | varchar(250) | YES |  | NULL |  |  |
| counseling_startdate | date | YES |  | NULL |  |  |
| counseling_starttime | time | YES |  | NULL |  |  |
| counseling_enddate | date | YES |  | NULL |  |  |
| counseling_endtime | time | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_patient_id | int(11) | YES |  | NULL |  |  |
| counseling_staff | varchar(250) | YES |  | NULL |  |  |
| counseling_skill_7 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_skill_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_result_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_result_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_goal_id | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_counseling_goal_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_counseling_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
