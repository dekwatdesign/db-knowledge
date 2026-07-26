# `emp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_begindate | date | YES |  | NULL |  |  |
| emp_work_order_begindate | date | YES | MUL | NULL |  |  |
| emp_official_number | varchar(20) | YES | MUL | NULL |  |  |
| emp_status_id | int(11) | YES | MUL | NULL |  |  |
| emp_first_name | varchar(100) | YES |  | NULL |  |  |
| emp_last_name | varchar(100) | YES |  | NULL |  |  |
| emp_birthdate | date | YES |  | NULL |  |  |
| emp_cid | varchar(13) | YES | MUL | NULL |  |  |
| emp_addpart | varchar(50) | YES |  | NULL |  |  |
| emp_moopart | char(2) | YES |  | NULL |  |  |
| emp_zipcode | char(6) | YES |  | NULL |  |  |
| emp_prename_id | int(11) | YES |  | NULL |  |  |
| emp_sex_id | int(11) | YES | MUL | NULL |  |  |
| emp_nationality_id | char(2) | YES | MUL | NULL |  |  |
| emp_citizenship_id | char(2) | YES | MUL | NULL |  |  |
| emp_education_id | char(1) | YES | MUL | NULL |  |  |
| emp_marrystatus_id | char(1) | YES | MUL | NULL |  |  |
| emp_religion_id | char(2) | YES | MUL | NULL |  |  |
| emp_picture | longblob | YES |  | NULL |  |  |
| emp_roadpart | varchar(100) | YES |  | NULL |  |  |
| emp_lastupdate | date | YES |  | NULL |  |  |
| emp_resign_type_id | int(11) | YES |  | NULL |  |  |
| emp_resign_enddate | date | YES |  | NULL |  |  |
| emp_resign_detail | text | YES |  | NULL |  |  |
| emp_house_regis_addpart | varchar(50) | YES |  | NULL |  |  |
| emp_house_regis_moopart | char(2) | YES |  | NULL |  |  |
| emp_house_regis_roadpart | varchar(150) | YES |  | NULL |  |  |
| emp_house_regis_zipcode | varchar(5) | YES |  | NULL |  |  |
| emp_type_id | int(11) | YES | MUL | NULL |  |  |
| emp_tel_number | varchar(10) | YES |  | NULL |  |  |
| emp_eng_first_name | varchar(100) | YES |  | NULL |  |  |
| emp_eng_last_name | varchar(100) | YES |  | NULL |  |  |
| emp_local_work_date_start | date | YES |  | NULL |  |  |
| emp_approve_right_status | char(1) | YES |  | NULL |  |  |
| emp_chwpart | char(2) | YES |  | NULL |  |  |
| emp_amppart | char(2) | YES |  | NULL |  |  |
| emp_tmbpart | char(2) | YES |  | NULL |  |  |
| emp_house_regis_chwpart | char(2) | YES |  | NULL |  |  |
| emp_house_regis_amppart | char(2) | YES |  | NULL |  |  |
| emp_house_regis_tmbpart | char(2) | YES |  | NULL |  |  |
| emp_thaiaddress_id | char(6) | YES | MUL | NULL |  |  |
| emp_blood_group_id | int(11) | YES |  | NULL |  |  |
| emp_allergy | varchar(200) | YES |  | NULL |  |  |
| emp_position_main_id | int(11) | YES | MUL | NULL |  |  |
| emp_position_work_id | int(11) | YES | MUL | NULL |  |  |
| emp_hire_id | int(11) | YES | MUL | NULL |  |  |
| emp_dep_id | int(11) | YES | MUL | NULL |  |  |
| emp_segment_id | int(11) | YES | MUL | NULL |  |  |
| emp_agency_id | int(11) | YES | MUL | NULL |  |  |
| emp_agency_work_id | int(11) | YES | MUL | NULL |  |  |
| emp_position_id | int(11) | YES | MUL | NULL |  |  |
| emp_born_hospitalname | varchar(250) | YES |  | NULL |  |  |
| emp_born_chwpart | char(2) | YES |  | NULL |  |  |
| emp_born_amppart | char(2) | YES |  | NULL |  |  |
| emp_cid_addpart | varchar(50) | YES |  | NULL |  |  |
| emp_cid_moopart | char(2) | YES |  | NULL |  |  |
| emp_cid_roadpart | varchar(150) | YES |  | NULL |  |  |
| emp_cid_zipcode | varchar(5) | YES |  | NULL |  |  |
| emp_cid_chwpart | char(2) | YES |  | NULL |  |  |
| emp_cid_amppart | char(2) | YES |  | NULL |  |  |
| emp_cid_tmbpart | char(2) | YES |  | NULL |  |  |
| emp_resign_salary_type_id | int(11) | YES |  | NULL |  |  |
| emp_earlydate | date | YES |  | NULL |  |  |
| emp_permanent_address | varchar(250) | YES |  | NULL |  |  |
| emp_picture_year | char(4) | YES |  | NULL |  |  |
| emp_cost_id | int(11) | YES |  | NULL |  |  |
| emp_cost_name | varchar(20) | YES |  | NULL |  |  |
| emp_section_id | int(11) | YES |  | NULL |  |  |
| emp_assistant_id | int(11) | YES |  | NULL |  |  |
| emp_membercard_no | varchar(15) | YES | MUL | NULL |  |  |
| emp_house_regis_tel | varchar(10) | YES |  | NULL |  |  |
| emp_nationality | varchar(50) | YES |  | NULL |  |  |
| emp_citizenship | varchar(50) | YES |  | NULL |  |  |
| emp_religion | varchar(50) | YES |  | NULL |  |  |
| emp_address | varchar(250) | YES |  | NULL |  |  |
| emp_alien_id_card | varchar(20) | YES |  | NULL |  |  |
| emp_position_no | varchar(150) | YES |  | NULL |  |  |
| emp_license_no | varchar(150) | YES |  | NULL |  |  |
| emp_note | text | YES |  | NULL |  |  |
| emp_jor | varchar(50) | YES |  | NULL |  |  |
| emp_hr_right | char(1) | YES |  | NULL |  |  |
| emp_department_id | int(11) | YES |  | NULL |  |  |
| emp_license_no_expire_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | emp_cid | no | 1 |
| ix_citizenship_id | emp_citizenship_id | no | 1 |
| ix_education_id | emp_education_id | no | 1 |
| ix_emp_agency_id | emp_agency_id | no | 1 |
| ix_emp_agency_work_id | emp_agency_work_id | no | 1 |
| ix_emp_department_id | emp_dep_id | no | 1 |
| ix_emp_hire_id | emp_hire_id | no | 1 |
| ix_emp_position_id | emp_position_id | no | 1 |
| ix_emp_position_main_id | emp_position_main_id | no | 1 |
| ix_emp_position_work_id | emp_position_work_id | no | 1 |
| ix_emp_segment_id | emp_segment_id | no | 1 |
| ix_emp_status_id | emp_status_id | no | 1 |
| ix_emp_type_id | emp_type_id | no | 1 |
| ix_marrystatus_id | emp_marrystatus_id | no | 1 |
| ix_membercardno | emp_membercard_no | no | 1 |
| ix_nationality_id | emp_nationality_id | no | 1 |
| ix_official_number | emp_official_number | no | 1 |
| ix_religion_id | emp_religion_id | no | 1 |
| ix_sex_id | emp_sex_id | no | 1 |
| ix_thaiaddress_id | emp_thaiaddress_id | no | 1 |
| ix_work_order_begindate | emp_work_order_begindate | no | 1 |
| PRIMARY | emp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
