# `ckup_pre_lab_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_pre_lab_order_number | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| lab_items_group_code | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| lab_head_remark | varchar(250) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| reporter_name | varchar(100) | YES |  | NULL |  |  |
| report_time | time | YES |  | NULL |  |  |
| confirm_specimen | char(1) | YES | MUL | NULL |  |  |
| confirm_report | char(1) | YES |  | NULL |  |  |
| department | varchar(5) | YES |  | NULL |  |  |
| form_name | varchar(200) | YES |  | NULL |  |  |
| sub_group_list | varchar(200) | YES |  | NULL |  |  |
| order_time | time | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| receive_time | time | YES |  | NULL |  |  |
| ward | char(2) | YES |  | NULL |  |  |
| result_note | text | YES |  | NULL |  |  |
| lock_result | char(1) | YES |  | NULL |  |  |
| result_rtf | longtext | YES |  | NULL |  |  |
| order_note | text | YES |  | NULL |  |  |
| lab_receive_number | int(11) | YES |  | NULL |  |  |
| approve_staff | varchar(25) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| nextdate | date | YES | MUL | NULL |  |  |
| confirm_order | char(1) | YES |  | NULL |  |  |
| order_computer_name | varchar(50) | YES |  | NULL |  |  |
| order_department | varchar(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| lab_perform_status_id | int(11) | YES | MUL | NULL |  |  |
| confirm_charge_money | char(1) | YES |  | NULL |  |  |
| finance_lab_confirm | char(1) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES | MUL | NULL |  |  |
| lab_priority_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_confirm_specimen | confirm_specimen | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hospital_department_id | hospital_department_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_perform_status_id | lab_perform_status_id | no | 1 |
| ix_lab_priority_id | lab_priority_id | no | 1 |
| ix_nextdate | nextdate | no | 1 |
| ix_oapp_id | oapp_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ckup_pre_lab_order_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
