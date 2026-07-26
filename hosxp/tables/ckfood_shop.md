# `ckfood_shop`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckfood_shop_id | int(11) | NO | PRI | 0 |  |  |
| ckfood_shop_name | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_reg_date | date | YES | MUL | NULL |  |  |
| ckfood_shop_owner | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_cook | varchar(255) | YES |  | NULL |  |  |
| ckfood_shop_food_type_id | int(11) | YES | MUL | NULL |  |  |
| ckfood_cafeteria_id | int(11) | YES | MUL | NULL |  |  |
| hospital_department_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckfood_cafeteria_id | ckfood_cafeteria_id | no | 1 |
| ix_ckfood_shop_food_type_id | ckfood_shop_food_type_id | no | 1 |
| ix_ckfood_shop_reg_date | ckfood_shop_reg_date | no | 1 |
| ix_hospital_department_id | hospital_department_id | no | 1 |
| ix_last_update | last_update | no | 1 |
| PRIMARY | ckfood_shop_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
