# `emp_social_welfare`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_welfare_id | int(11) | NO | PRI | 0 |  |  |
| emp_id | int(11) | YES | MUL | NULL |  |  |
| emp_social_welfare_no | varchar(50) | YES |  | NULL |  |  |
| emp_social_welfare_date | date | YES |  | NULL |  |  |
| emp_social_welfare_acc_date | date | YES |  | NULL |  |  |
| emp_social_welfare_symptom | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_acc_place | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_duration | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_station | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_detail | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_topic1 | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_topic2 | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_topic3 | varchar(255) | YES |  | NULL |  |  |
| outsider_pname | varchar(100) | YES |  | NULL |  |  |
| outsider_fname | varchar(100) | YES |  | NULL |  |  |
| outsider_lname | varchar(100) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| outsider_tel | varchar(50) | YES |  | NULL |  |  |
| outsider_sex | char(1) | YES |  | NULL |  |  |
| outsider_age | char(3) | YES |  | NULL |  |  |
| outsider_address | varchar(255) | YES |  | NULL |  |  |
| outsider_acc_place | varchar(10) | YES |  | NULL |  |  |
| outsider_image | blob | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| emp_status | char(1) | YES |  | NULL |  |  |
| emp_family_id | int(11) | YES |  | NULL |  |  |
| emp_mate_id | int(11) | YES |  | NULL |  |  |
| emp_social_discharge_type_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| emp_social_accident_type_id | int(11) | YES | MUL | NULL |  |  |
| send_status | char(1) | YES |  | NULL |  |  |
| violate_chk | char(1) | YES |  | NULL |  |  |
| emp_relation_id | int(11) | YES |  | NULL |  |  |
| emp_refer_person_type_id | int(11) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| disability_chk | char(255) | YES |  | NULL |  |  |
| specialcase_from | varchar(255) | YES |  | NULL |  |  |
| specialcase_to | varchar(255) | YES |  | NULL |  |  |
| specialcase_no | varchar(150) | YES |  | NULL |  |  |
| specialcase_date | date | YES |  | NULL |  |  |
| specialcase_topic | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_acc_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_emp_id | emp_id | no | 1 |
| ix_Refsocial_accident_type37 | emp_social_accident_type_id | no | 1 |
| PRIMARY | emp_social_welfare_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
