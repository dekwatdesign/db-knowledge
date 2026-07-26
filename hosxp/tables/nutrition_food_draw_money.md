# `nutrition_food_draw_money`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_draw_money_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_draw_money_date | date | YES | MUL | NULL |  |  |
| nutrition_food_draw_money | double(15,2) | YES |  | NULL |  |  |
| nutrition_food_draw_detail | text | YES |  | NULL |  |  |
| staff_expense_code | varchar(6) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_draw_money_date | nutrition_food_draw_money_date | no | 1 |
| PRIMARY | nutrition_food_draw_money_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
