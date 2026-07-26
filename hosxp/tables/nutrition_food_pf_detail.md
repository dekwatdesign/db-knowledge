# `nutrition_food_pf_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_pf_detail_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_pf_detail_sdate | date | YES | MUL | NULL |  |  |
| nutrition_food_pf_detail_edate | date | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| calorie | double(15,2) | YES |  | NULL |  |  |
| food_supply_qty | int(11) | YES |  | NULL |  |  |
| nutrition_food_day_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_supply_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_pf_id | int(11) | YES | MUL | NULL |  |  |
| food_allergy | varchar(250) | YES |  | NULL |  |  |
| nutrition_food_pf_detail | varchar(250) | YES |  | NULL |  |  |
| food_qty | double(15,2) | YES |  | NULL |  |  |
| food_special | varchar(255) | YES |  | NULL |  |  |
| food_disease | varchar(255) | YES |  | NULL |  |  |
| used_status | char(1) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_day_id | nutrition_food_day_id | no | 1 |
| ix_nutrition_food_id | nutrition_food_id | no | 1 |
| ix_nutrition_food_pf_detail_edate | nutrition_food_pf_detail_edate | no | 1 |
| ix_nutrition_food_pf_detail_sdate | nutrition_food_pf_detail_sdate | no | 1 |
| ix_nutrition_food_pf_id | nutrition_food_pf_id | no | 1 |
| ix_nutrition_food_supply_id | nutrition_food_supply_id | no | 1 |
| PRIMARY | nutrition_food_pf_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
