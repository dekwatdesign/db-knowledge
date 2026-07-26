# `drug_counseling_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_counseling_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| reg_date | date | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| problem_id | int(11) | YES |  | NULL |  |  |
| note | varchar(150) | YES |  | NULL |  |  |
| reg_time | time | YES |  | NULL |  |  |
| indication_check | char(1) | YES |  | NULL |  |  |
| indication | longtext | YES |  | NULL |  |  |
| dosage_check | char(1) | YES |  | NULL |  |  |
| dosage | longtext | YES |  | NULL |  |  |
| administration_check | char(1) | YES |  | NULL |  |  |
| administration | longtext | YES |  | NULL |  |  |
| duration_check | char(1) | YES |  | NULL |  |  |
| duration | longtext | YES |  | NULL |  |  |
| drug_interaction_check | char(1) | YES |  | NULL |  |  |
| drug_interaction | longtext | YES |  | NULL |  |  |
| contra_indication_check | char(1) | YES |  | NULL |  |  |
| contra_indication | longtext | YES |  | NULL |  |  |
| outcome_measure_check | char(1) | YES |  | NULL |  |  |
| outcome_measure | longtext | YES |  | NULL |  |  |
| complication_check | char(1) | YES |  | NULL |  |  |
| complication | longtext | YES |  | NULL |  |  |
| adverse_drug_reaction_check | char(1) | YES |  | NULL |  |  |
| adverse_drug_reaction | longtext | YES |  | NULL |  |  |
| patient_care_check | char(1) | YES |  | NULL |  |  |
| patient_care | longtext | YES |  | NULL |  |  |
| patient_problem_check | char(1) | YES |  | NULL |  |  |
| patient_problem | longtext | YES |  | NULL |  |  |
| patient_rank_scale | int(11) | YES |  | NULL |  |  |
| appointment | char(1) | YES |  | NULL |  |  |
| appointment_date | date | YES |  | NULL |  |  |
| appointment_time | time | YES |  | NULL |  |  |
| from_doctor | varchar(7) | YES |  | NULL |  |  |
| from_department | char(3) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| counseling_pttype | int(11) | YES |  | NULL |  |  |
| staff_entry_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| an | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drug_counseling_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
