# `inv_durable_good_sap`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_sap_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_sap_code | varchar(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_oldcode | varchar(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_amount | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_sap_unit | varchar(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_name | text | YES |  | NULL |  |  |
| inv_durable_good_sap_no | varchar(50) | YES |  | NULL |  |  |
| inv_durable_good_sap_type | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_sap_group_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_cate_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_supplier | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_sap_dchdate | date | YES |  | NULL |  |  |
| inv_durable_good_sap_price | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_sap_rcvdate | date | YES |  | NULL |  |  |
| inv_durable_good_sap_agey | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_agem | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_depric | double(15,2) | YES |  | NULL |  |  |
| inv_durable_good_sap_cost | varchar(15) | YES |  | NULL |  |  |
| inv_durable_good_sap_cost_desc | varchar(250) | YES |  | NULL |  |  |
| inv_durable_good_sap_dep | varchar(255) | YES |  | NULL |  |  |
| inv_durable_good_sap_dep_desc | varchar(255) | YES |  | NULL |  |  |
| inv_durable_good_sap_room_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_emp_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_sap_emp | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_sap_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
