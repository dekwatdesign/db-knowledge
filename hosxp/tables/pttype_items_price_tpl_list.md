# `pttype_items_price_tpl_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_items_price_tpl_list_id | int(11) | NO | PRI | 0 |  |  |
| pttype_items_price_tpl_id | int(11) | YES |  | NULL |  |  |
| items_table_name | varchar(50) | YES |  | NULL |  |  |
| pttype_price_policy_type_id | int(11) | YES |  | NULL |  |  |
| pttype_department_id | int(11) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| items_table_code | varchar(100) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| pttype_items_paids_type_id | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| check_doctor_type | char(1) | YES |  | NULL |  |  |
| inv_price_update | char(1) | YES |  | NULL |  |  |
| pttype_price_group_id | int(11) | YES |  | NULL |  |  |
| pttype_items_paid_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pttype_items_price_tpl_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
