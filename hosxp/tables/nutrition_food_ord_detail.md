# `nutrition_food_ord_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_ord_detail_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_ord_detail_date | date | YES | MUL | NULL |  |  |
| nutrition_food_ord_detail | varchar(100) | YES |  | NULL |  |  |
| nutrition_food_water_chk | char(1) | YES |  | NULL |  |  |
| nutrition_food_food_chk | char(1) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| calorie | double(15,2) | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| dietician_confirm | char(1) | YES |  | NULL |  |  |
| dietician_staff_confirm | varchar(50) | YES |  | NULL |  |  |
| change_status | char(1) | YES |  | NULL |  |  |
| change_id | int(11) | YES | MUL | NULL |  |  |
| food_supply_qty | int(11) | YES |  | NULL |  |  |
| nutrition_food_day_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_supply_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_ord_id | int(11) | YES | MUL | NULL |  |  |
| food_allergy | varchar(100) | YES |  | NULL |  |  |
| nutrition_food_ord_detail_time | time | YES |  | NULL |  |  |
| staff_entry | varchar(250) | YES |  | NULL |  |  |
| dietician_staff_confirm_date | datetime | YES |  | NULL |  |  |
| nutrition_food_sub_type_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_sub_day_id | int(11) | YES | MUL | NULL |  |  |
| food_qty | double(15,2) | YES |  | NULL |  |  |
| food_disease | varchar(255) | YES |  | NULL |  |  |
| food_special | varchar(255) | YES |  | NULL |  |  |
| send_status | char(1) | YES |  | NULL |  |  |
| send_staff | varchar(50) | YES |  | NULL |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| order_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_change_id | change_id | no | 1 |
| ix_nutrition_food_day_id | nutrition_food_day_id | no | 1 |
| ix_nutrition_food_id | nutrition_food_id | no | 1 |
| ix_nutrition_food_ord_detail_date | nutrition_food_ord_detail_date | no | 1 |
| ix_nutrition_food_ord_id | nutrition_food_ord_id | no | 1 |
| ix_nutrition_food_sub_day_id | nutrition_food_sub_day_id | no | 1 |
| ix_nutrition_food_sub_type_id | nutrition_food_sub_type_id | no | 1 |
| ix_nutrition_food_supply_id | nutrition_food_supply_id | no | 1 |
| PRIMARY | nutrition_food_ord_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
