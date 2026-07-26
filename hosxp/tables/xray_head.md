# `xray_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| xray_list | text | YES |  | NULL |  |  |
| confirm_all | char(1) | YES |  | NULL |  |  |
| order_date_time | datetime | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| pt_xn | int(11) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| doctor_list | text | YES |  | NULL |  |  |
| receive_no | int(11) | YES |  | NULL |  |  |
| print_status | char(1) | YES |  | NULL |  |  |
| confirm_read_film | char(1) | YES |  | NULL |  |  |
| department_code | varchar(4) | YES |  | NULL |  |  |
| department_name | varchar(100) | YES |  | NULL |  |  |
| xray_priority_id | int(11) | YES |  | NULL |  |  |
| xray_price | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| xray_order_number | int(11) | YES | UNI | NULL |  |  |
| doctor_code | varchar(4) | YES |  | NULL |  |  |
| xray_head_remark | varchar(250) | YES |  | NULL |  |  |
| order_date | date | YES | MUL | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| reporter_name | varchar(100) | YES |  | NULL |  |  |
| report_time | time | YES |  | NULL |  |  |
| confirm_report | char(1) | YES | MUL | NULL |  |  |
| order_time | time | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| begin_time | time | YES |  | NULL |  |  |
| ward | char(2) | YES |  | NULL |  |  |
| result_note | text | YES |  | NULL |  |  |
| part_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| department_list | text | YES |  | NULL |  |  |
| xray_head_flag | int(11) | YES |  | NULL |  |  |
| xray_film_flag | int(11) | YES |  | NULL |  |  |
| service_type_name_list | varchar(200) | YES |  | NULL |  |  |
| xray_confirm_flag | int(11) | YES |  | NULL |  |  |
| confirm_radiology_all | char(1) | YES |  | NULL |  |  |
| wait_xray_list | text | YES |  | NULL |  |  |
| total_request | int(11) | YES |  | NULL |  |  |
| total_inyear_request | int(11) | YES |  | NULL |  |  |
| is_pregnant | char(1) | YES |  | NULL |  |  |
| ai_available | char(1) | YES |  | NULL |  |  |
| ai_abnormal | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_confirm_report | confirm_report | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_order_date | order_date | no | 1 |
| ix_order_date_time | order_date_time | no | 1 |
| ix_xray_order_number_unique | xray_order_number | yes | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
