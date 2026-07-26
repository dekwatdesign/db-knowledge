# `emp_social_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_service_id | int(11) | NO | PRI | 0 |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_social_service_type_id | int(11) | YES |  | NULL |  |  |
| emp_social_service_date | date | YES |  | NULL |  |  |
| emp_social_service_fee | double(18,2) | YES |  | NULL |  |  |
| emp_social_service_topic | text | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| emp_relation_type_id | int(11) | YES |  | NULL |  |  |
| emp_relation_id | int(11) | YES |  | NULL |  |  |
| outsider_pname | varchar(100) | YES |  | NULL |  |  |
| outsider_fname | varchar(100) | YES |  | NULL |  |  |
| outsider_lname | varchar(100) | YES |  | NULL |  |  |
| outsider_tel | varchar(50) | YES |  | NULL |  |  |
| outsider_sex | char(1) | YES |  | NULL |  |  |
| outsider_age | char(3) | YES |  | NULL |  |  |
| outsider_address | text | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_social_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
