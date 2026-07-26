# `nutrition_food_st_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_st_detail_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_st_detail_date | date | YES | MUL | NULL |  |  |
| nutrition_food_st_detail | varchar(100) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| dietician_confirm | char(1) | YES |  | NULL |  |  |
| dietician_staff_confirm | varchar(50) | YES |  | NULL |  |  |
| staffid | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_day_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_st_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_st_detail_time | time | YES |  | NULL |  |  |
| staff_entry | varchar(250) | YES |  | NULL |  |  |
| dietician_staff_confirm_date | datetime | YES |  | NULL |  |  |
| nutrition_food_sub_type_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_sub_day_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_day_id | nutrition_food_day_id | no | 1 |
| ix_nutrition_food_id | nutrition_food_id | no | 1 |
| ix_nutrition_food_st_detail_date | nutrition_food_st_detail_date | no | 1 |
| ix_nutrition_food_st_id | nutrition_food_st_id | no | 1 |
| ix_nutrition_food_sub_day_id | nutrition_food_sub_day_id | no | 1 |
| ix_nutrition_food_sub_type_id | nutrition_food_sub_type_id | no | 1 |
| ix_staffid | staffid | no | 1 |
| PRIMARY | nutrition_food_st_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
