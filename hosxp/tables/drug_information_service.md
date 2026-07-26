# `drug_information_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_information_service_id | int(11) | NO | PRI | 0 |  |  |
| dis_date | date | YES | MUL | NULL |  |  |
| person_name | varchar(150) | YES |  | NULL |  |  |
| person_address | varchar(200) | YES |  | NULL |  |  |
| person_phone | varchar(150) | YES |  | NULL |  |  |
| person_fax | varchar(150) | YES |  | NULL |  |  |
| person_email | varchar(100) | YES |  | NULL |  |  |
| dis_person_type_id | int(11) | YES |  | NULL |  |  |
| dis_question_type_id | int(11) | YES |  | NULL |  |  |
| dis_objective_id | int(11) | YES |  | NULL |  |  |
| dis_urgent_type_id | int(11) | YES |  | NULL |  |  |
| question_text | longtext | YES |  | NULL |  |  |
| search_keywords | varchar(250) | YES |  | NULL |  |  |
| dis_qestion_class_id | int(11) | YES |  | NULL |  |  |
| patient_sex | char(1) | YES |  | NULL |  |  |
| patient_age_y | int(11) | YES |  | NULL |  |  |
| patient_age_m | int(11) | YES |  | NULL |  |  |
| patient_bw | int(11) | YES |  | NULL |  |  |
| patient_lbw | int(11) | YES |  | NULL |  |  |
| patient_height | int(11) | YES |  | NULL |  |  |
| patient_other_information | longtext | YES |  | NULL |  |  |
| answer | longtext | YES |  | NULL |  |  |
| reference_document | longtext | YES |  | NULL |  |  |
| dis_answer_type_id | int(11) | YES |  | NULL |  |  |
| answer_date | datetime | YES |  | NULL |  |  |
| processing_time_hr | int(11) | YES |  | NULL |  |  |
| form_processing_time | varchar(150) | YES |  | NULL |  |  |
| search_staff | varchar(150) | YES |  | NULL |  |  |
| answer_staff | varchar(150) | YES |  | NULL |  |  |
| answer_prove_date | datetime | YES |  | NULL |  |  |
| prove_staff | varchar(150) | YES |  | NULL |  |  |
| manager_staff | varchar(150) | YES |  | NULL |  |  |
| modify_answer_date | datetime | YES |  | NULL |  |  |
| answer_count | int(11) | YES |  | NULL |  |  |
| modify_staff | varchar(150) | YES |  | NULL |  |  |
| dis_evaluate_id | int(11) | YES |  | NULL |  |  |
| evaluate_staff | varchar(150) | YES |  | NULL |  |  |
| question_datetime | datetime | YES |  | NULL |  |  |
| evaluation_text | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dis_date | dis_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drug_information_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
