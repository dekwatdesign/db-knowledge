# `nutrition_food_supply`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_supply_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_supply_name | varchar(100) | YES |  | NULL |  |  |
| calorie | double(15,2) | YES |  | NULL |  |  |
| nutrition_food_unit_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_unit_id | nutrition_food_unit_id | no | 1 |
| PRIMARY | nutrition_food_supply_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
