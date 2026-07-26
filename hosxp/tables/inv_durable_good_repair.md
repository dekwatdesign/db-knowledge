# `inv_durable_good_repair`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_repair_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rstatus_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_repair_date | date | YES |  | NULL |  |  |
| inv_durable_good_repair_bdate | date | YES |  | NULL |  |  |
| inv_durable_good_repairer_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_repair_staff | varchar(20) | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |
| inv_durable_good_repair_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_repair_desc | text | YES |  | NULL |  |  |
| inv_dep_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_repair_tel | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_repair_cause | text | YES |  | NULL |  |  |
| inv_durable_good_repair_name | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_evl_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rep_sec_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rep_eval_name | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_rep_eval_day | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rep_eval_chk1 | char(1) | YES |  | NULL |  |  |
| inv_durable_good_rep_eval_chk2 | char(1) | YES |  | NULL |  |  |
| inv_durable_good_rep_eval_chk3 | char(1) | YES |  | NULL |  |  |
| inv_durable_good_rep_eval_chk4 | char(1) | YES |  | NULL |  |  |
| inv_durable_good_eval_emp_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rep_chk | char(1) | YES |  | NULL |  |  |
| inv_durable_good_rep_bd_chk | char(1) | YES |  | NULL |  |  |
| inv_durable_good_rep_renv_chk | char(1) | YES |  | NULL |  |  |
| inv_durable_good_rep_sum_date | date | YES |  | NULL |  |  |
| inv_durable_good_apprv_date | date | YES |  | NULL |  |  |
| inv_durable_good_apprv_emp_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_apprv_status | char(1) | YES |  | NULL |  |  |
| inv_durable_good_rep_no | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rep_note | varchar(255) | YES |  | NULL |  |  |
| inv_durable_good_rep_bgy | int(11) | YES |  | NULL |  |  |
| inv_durable_return_status | char(1) | YES |  | NULL |  |  |
| inv_durable_rate_after_point | int(11) | YES |  | NULL |  |  |
| po_number_repair | varchar(50) | YES |  | NULL |  |  |
| inv_durable_rate_after_date | datetime | YES |  | NULL |  |  |
| inv_durable_rate_after_emp_id | int(11) | YES |  | NULL |  |  |
| inv_durable_rate_after_coment | text | YES |  | NULL |  |  |
| inv_durable_good_repair_emp_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_repair_dep_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rep_sum_time | time | YES |  | NULL |  |  |
| inv_durable_good_apprv_time | time | YES |  | NULL |  |  |
| inv_durable_good_repair_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_repair_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
