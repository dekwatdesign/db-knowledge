# `durable_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_history_id | int(11) | NO | PRI | 0 |  |  |
| durable_id | int(11) | YES |  | NULL |  |  |
| durable_code | varchar(30) | YES |  | NULL |  |  |
| durable_name | varchar(250) | YES |  | NULL |  |  |
| durable_type_id | int(11) | YES |  | NULL |  |  |
| durable_category_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| durable_dep_recieve_date | date | YES |  | NULL |  |  |
| durable_unit_id | int(11) | YES |  | NULL |  |  |
| durable_color | varchar(30) | YES |  | NULL |  |  |
| durable_supplier_id | int(11) | YES |  | NULL |  |  |
| durable_generation | varchar(100) | YES |  | NULL |  |  |
| durable_size | varchar(50) | YES |  | NULL |  |  |
| durable_recieve_date | date | YES |  | NULL |  |  |
| durable_picture | longblob | YES |  | NULL |  |  |
| durable_blame | text | YES |  | NULL |  |  |
| durable_recieve_type_id | int(11) | YES |  | NULL |  |  |
| durable_price_rent | float | YES |  | NULL |  |  |
| durable_price_cost | double(22,3) | YES |  | NULL |  |  |
| durable_price | double(15,2) | YES |  | NULL |  |  |
| durable_status_id | int(11) | YES |  | NULL |  |  |
| durable_rent_id | int(11) | YES |  | NULL |  |  |
| durable_insurance_terms | text | YES |  | NULL |  |  |
| durable_insurance_date | date | YES |  | NULL |  |  |
| durable_insurance_expire | date | YES |  | NULL |  |  |
| durable_insurer_id | int(11) | YES |  | NULL |  |  |
| durable_budgeter_id | int(11) | YES |  | NULL |  |  |
| durable_lastupdate | date | YES |  | NULL |  |  |
| durable_number | varchar(50) | YES |  | NULL |  |  |
| durable_serial_no | varchar(50) | YES |  | NULL |  |  |
| durable_equipment | varchar(250) | YES |  | NULL |  |  |
| durable_other | text | YES |  | NULL |  |  |
| durable_frame_number | varchar(50) | YES |  | NULL |  |  |
| durable_discharge_date | date | YES |  | NULL |  |  |
| durable_discharge_type_id | int(11) | YES |  | NULL |  |  |
| durable_discharge_refer_doc | varchar(50) | YES |  | NULL |  |  |
| durable_discharge_price | double(15,2) | YES |  | NULL |  |  |
| durable_discharge_profit | double(15,2) | YES |  | NULL |  |  |
| durable_discharge | char(1) | YES |  | NULL |  |  |
| durable_insurance_price | double(15,2) | YES |  | NULL |  |  |
| durable_insurance_doc | blob | YES |  | NULL |  |  |
| durable_last_update | date | YES |  | NULL |  |  |
| durable_rent_status_id | int(11) | YES |  | NULL |  |  |
| durable_staff | varchar(20) | YES |  | NULL |  |  |
| durable_bail_price | double(15,2) | YES |  | NULL |  |  |
| durable_bail_percent | int(11) | YES |  | NULL |  |  |
| durable_bail_date | date | YES |  | NULL |  |  |
| durable_bail_status_id | int(11) | YES |  | NULL |  |  |
| durable_bail_staff | varchar(20) | YES |  | NULL |  |  |
| durable_bail_doc | blob | YES |  | NULL |  |  |
| durable_insurance_filename | text | YES |  | NULL |  |  |
| durable_bail_filename | text | YES |  | NULL |  |  |
| durable_depic_year | int(11) | YES |  | NULL |  |  |
| durable_history_reason | varchar(255) | YES |  | NULL |  |  |
| durable_history_datetime | datetime | YES |  | NULL |  |  |
| durable_history_emp_id | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
