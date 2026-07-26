# `nutrition_food_pur`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_pur_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_pur_date | date | YES | MUL | NULL |  |  |
| nutrition_food_pur_money_total | double(15,2) | YES |  | NULL |  |  |
| nutrition_food_pur_receptno | varchar(50) | YES |  | NULL |  |  |
| nutrition_food_shop_name | varchar(100) | YES |  | NULL |  |  |
| nutrition_food_pur_detail | text | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| nutrition_food_draw_money_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_draw_money_id | nutrition_food_draw_money_id | no | 1 |
| ix_nutrition_food_pur_date | nutrition_food_pur_date | no | 1 |
| PRIMARY | nutrition_food_pur_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
