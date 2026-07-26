# `nutrition_food_ingredient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_ingredient_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_ingredient_name | varchar(100) | YES |  | NULL |  |  |
| nutrition_food_ingredient_clri | double(10,2) | YES |  | NULL |  |  |
| nutrition_food_unit_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_group_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_pur_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refnutrition_food_group7 | nutrition_food_group_id | no | 1 |
| ix_Refnutrition_food_unit6 | nutrition_food_unit_id | no | 1 |
| PRIMARY | nutrition_food_ingredient_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
