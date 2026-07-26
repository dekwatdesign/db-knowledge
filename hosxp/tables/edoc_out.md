# `edoc_out`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_out_id | int(11) | NO | PRI | 0 |  |  |
| subject | varchar(250) | YES | MUL | NULL |  |  |
| send_to | varchar(250) | YES | MUL | NULL |  |  |
| edoc_out_date | date | YES | MUL | NULL |  |  |
| edoc_out_number_date | date | YES | MUL | NULL |  |  |
| edoc_out_store_number | varchar(25) | YES |  | NULL |  |  |
| edoc_out_summary | text | YES |  | NULL |  |  |
| scan_page_count | int(11) | YES |  | NULL |  |  |
| edoc_out_priority_id | int(11) | YES |  | NULL |  |  |
| edoc_out_security_id | int(11) | YES |  | NULL |  |  |
| edoc_out_refer_to | varchar(250) | YES |  | NULL |  |  |
| edoc_out_include_document | text | YES |  | NULL |  |  |
| edoc_out_emp_id | int(11) | YES |  | NULL |  |  |
| edoc_out_datetime | datetime | YES |  | NULL |  |  |
| edoc_out_sign_emp_id | int(11) | YES |  | NULL |  |  |
| edoc_out_dep_id | int(11) | YES | MUL | NULL |  |  |
| edoc_out_pre_number | varchar(10) | YES |  | NULL |  |  |
| edoc_out_last_number | int(11) | YES |  | NULL |  |  |
| edoc_out_first_number | varchar(10) | YES |  | NULL |  |  |
| edoc_out_full_number | varchar(30) | YES |  | NULL |  |  |
| edoc_out_send_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_edoc_out_department_id | edoc_out_dep_id | no | 1 |
| ix_receive_date | edoc_out_number_date | no | 1 |
| ix_send_date | edoc_out_date | no | 1 |
| ix_send_to | send_to | no | 1 |
| ix_subject | subject | no | 1 |
| PRIMARY | edoc_out_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
