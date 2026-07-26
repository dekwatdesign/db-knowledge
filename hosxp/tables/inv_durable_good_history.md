# `inv_durable_good_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_history_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_code | varchar(30) | YES |  | NULL |  |  |
| inv_durable_good_name | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_category_id | int(11) | YES |  | NULL |  |  |
| emp_department_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_response_employee_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_department_recieve_date | date | YES |  | NULL |  |  |
| inv_durable_good_unit_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_color | varchar(30) | YES |  | NULL |  |  |
| inv_durable_good_supplier_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_generation | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_size | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_recieve_date | date | YES |  | NULL |  |  |
| inv_durable_good_picture | longblob | YES |  | NULL |  |  |
| inv_durable_good_blame | text | YES |  | NULL |  |  |
| inv_durable_good_recieve_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_price_rent | float | YES |  | NULL |  |  |
| inv_durable_good_price_cost | double(22,3) | YES |  | NULL |  |  |
| inv_durable_good_status_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_rent_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_insurance_terms | text | YES |  | NULL |  |  |
| inv_durable_good_insurance_date | date | YES |  | NULL |  |  |
| inv_durable_good_insurance_expire | date | YES |  | NULL |  |  |
| inv_durable_good_insurer_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_budgeter_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_lastupdate | date | YES |  | NULL |  |  |
| inv_durable_good_number | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_serial_no | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_equipment | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_other | text | YES |  | NULL |  |  |
| inv_durable_good_frame_number | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_discharge_date | date | YES |  | NULL |  |  |
| inv_durable_good_discharge_type_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_discharge_refer_doc | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_discharge_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_discharge_profit | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_discharge | char(1) | YES |  | NULL |  |  |
| inv_durable_good_history_reason | varchar(255) | YES |  | NULL |  |  |
| inv_durable_good_history_datetime | datetime | YES |  | NULL |  |  |
| inv_durable_good_history_emp_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
