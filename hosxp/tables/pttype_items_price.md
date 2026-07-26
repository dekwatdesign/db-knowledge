# `pttype_items_price`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_items_price_id | int(11) | NO | PRI | 0 |  |  |
| items_table_name | varchar(50) | YES | MUL | NULL |  |  |
| pttype_price_policy_type_id | int(11) | YES | MUL | NULL |  |  |
| pttype_department_id | int(11) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| items_name_ref | varchar(200) | YES |  | NULL |  |  |
| items_table_code | varchar(100) | YES | MUL | NULL |  |  |
| items_table_code_int | int(11) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| pttype_items_paid_type_id | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| check_doctor_type | char(1) | YES |  | NULL |  |  |
| inv_price_update | char(1) | YES |  | NULL |  |  |
| pttype_price_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_items_table_name | items_table_name | no | 1 |
| ix_search2 | items_table_name | no | 1 |
| ix_search2 | items_table_code | no | 2 |
| ix_search2 | pttype_department_id | no | 3 |
| ix_search2 | pttype_price_policy_type_id | no | 4 |
| ix_search2 | pttype_price_group_id | no | 5 |
| ix_search2_index | items_table_code | no | 1 |
| ix_search2_index | items_table_name | no | 2 |
| ix_search2_index | pttype_department_id | no | 3 |
| ix_search2_index | pttype_price_group_id | no | 4 |
| ix_search2_index | pttype_price_policy_type_id | no | 5 |
| ix_type_id | pttype_price_policy_type_id | no | 1 |
| ix_uni | items_table_name | yes | 1 |
| ix_uni | items_table_code | yes | 2 |
| ix_uni | pttype_department_id | yes | 3 |
| ix_uni | pttype_price_policy_type_id | yes | 4 |
| ix_uni_key | items_table_name | yes | 1 |
| ix_uni_key | items_table_code | yes | 2 |
| ix_uni_key | pttype_department_id | yes | 3 |
| ix_uni_key | pttype_price_policy_type_id | yes | 4 |
| ix_uni_key | pttype | yes | 5 |
| ix_uni_key_index | items_table_code | yes | 1 |
| ix_uni_key_index | items_table_name | yes | 2 |
| ix_uni_key_index | pttype | yes | 3 |
| ix_uni_key_index | pttype_department_id | yes | 4 |
| ix_uni_key_index | pttype_price_policy_type_id | yes | 5 |
| PRIMARY | pttype_items_price_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
