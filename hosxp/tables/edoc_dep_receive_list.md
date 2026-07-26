# `edoc_dep_receive_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_dep_receive_list_id | int(11) | NO | PRI | 0 |  |  |
| edoc_dep_receive_list_no | int(11) | YES |  | NULL |  |  |
| edoc_dep_receive_list_emp_id | int(11) | YES |  | NULL |  |  |
| edoc_dep_id | int(11) | YES |  | NULL |  |  |
| edoc_dep_receive_list_datetime | datetime | YES |  | NULL |  |  |
| edoc_dep_receive_type_id | int(11) | YES |  | NULL |  |  |
| edoc_id | int(11) | YES |  | NULL |  |  |
| edoc_dep_receive_type_cancel | char(1) | YES |  | NULL |  |  |
| edoc_dep_receive_list_reason | varchar(200) | YES |  | NULL |  |  |
| edoc_dep_recieve_date | date | YES |  | NULL |  |  |
| edoc_dep_recieve_time | time | YES |  | NULL |  |  |
| edoc_complain_chanel_id | int(11) | YES |  | NULL |  |  |
| edoc_complain_type_id | int(11) | YES |  | NULL |  |  |
| edoc_complain_person_name | varchar(100) | YES |  | NULL |  |  |
| edoc_complain_person_date | date | YES |  | NULL |  |  |
| edoc_complain_person_time | time | YES |  | NULL |  |  |
| edoc_complain_person_email | varchar(100) | YES |  | NULL |  |  |
| edoc_complain_person_tel | varchar(50) | YES |  | NULL |  |  |
| edoc_dep_conference_start_date | date | YES |  | NULL |  |  |
| edoc_dep_conference_end_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_dep_receive_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
