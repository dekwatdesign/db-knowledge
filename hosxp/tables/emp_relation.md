# `emp_relation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_relation_id | int(11) | NO | PRI | 0 |  |  |
| emp_relation_type_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_relation_lastupdate | date | YES |  | NULL |  |  |
| emp_prename_id | int(11) | YES |  | NULL |  |  |
| emp_relation_fname | varchar(150) | YES |  | NULL |  |  |
| emp_relation_lname | varchar(150) | YES |  | NULL |  |  |
| emp_relation_tel | varchar(10) | YES |  | NULL |  |  |
| emp_relation_birthdate | date | YES |  | NULL |  |  |
| emp_relation_cid | varchar(13) | YES |  | NULL |  |  |
| emp_relation_address | varchar(100) | YES |  | NULL |  |  |
| emp_occupation_id | char(4) | YES |  | NULL |  |  |
| emp_relation_welfare_access | char(1) | YES |  | NULL |  |  |
| emp_relation_death | char(1) | YES |  | NULL |  |  |
| emp_relation_deathdate | date | YES |  | NULL |  |  |
| emp_relation_death_reason | varchar(250) | YES |  | NULL |  |  |
| emp_relation_picture | blob | YES |  | NULL |  |  |
| emp_relation_child_num_mother | int(11) | YES |  | NULL |  |  |
| emp_relation_child_num_father | int(11) | YES |  | NULL |  |  |
| emp_sex_id | int(11) | YES |  | NULL |  |  |
| emp_nationality_id | varchar(3) | YES |  | NULL |  |  |
| emp_relation_person_id | int(11) | YES |  | NULL |  |  |
| emp_relation_reference | char(1) | YES |  | NULL |  |  |
| emp_relation_reference_detail | varchar(250) | YES |  | NULL |  |  |
| emp_relation_job_type_id | int(11) | YES |  | NULL |  |  |
| emp_relation_job_occupation | varchar(4) | YES |  | NULL |  |  |
| emp_relation_job_agency | varchar(150) | YES |  | NULL |  |  |
| emp_relation_marry_date | date | YES |  | NULL |  |  |
| emp_relation_divorce | char(1) | YES |  | NULL |  |  |
| emp_relation_divorce_date | date | YES |  | NULL |  |  |
| emp_relation_divorce_reason | text | YES |  | NULL |  |  |
| emp_relation_job_level | varchar(50) | YES |  | NULL |  |  |
| emp_relation_addpart | varchar(50) | YES |  | NULL |  |  |
| emp_relation_moopart | char(3) | YES |  | NULL |  |  |
| emp_relation_roadpart | varchar(50) | YES |  | NULL |  |  |
| emp_relation_tel_number | varchar(20) | YES |  | NULL |  |  |
| emp_relation_zipcode | char(5) | YES |  | NULL |  |  |
| emp_relation_chwpart | char(2) | YES |  | NULL |  |  |
| emp_relation_amppart | char(2) | YES |  | NULL |  |  |
| emp_relation_tmbpart | char(2) | YES |  | NULL |  |  |
| emp_relation_permanent_address | varchar(100) | YES |  | NULL |  |  |
| emp_relation_ref_id | int(11) | YES |  | NULL |  |  |
| emp_occupation | varchar(100) | YES |  | NULL |  |  |
| emp_relation_alien_id_card | varchar(20) | YES |  | NULL |  |  |
| emp_sap_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_relation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
