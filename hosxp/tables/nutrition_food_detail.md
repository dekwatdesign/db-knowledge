# `nutrition_food_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_detail_id | int(11) | NO | PRI | 0 |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| nutrition_food_unit_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_ingredient_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_unit_id | nutrition_food_unit_id | no | 1 |
| ix_Refnutrition_food3 | nutrition_food_id | no | 1 |
| ix_Refnutrition_food_ingredient4 | nutrition_food_ingredient_id | no | 1 |
| PRIMARY | nutrition_food_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
