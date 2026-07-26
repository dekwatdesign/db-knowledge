# `nutrition_food`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_name | varchar(100) | YES |  | NULL |  |  |
| isalam | char(1) | YES |  | NULL |  |  |
| price | double(15,2) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| calorie | double(10,2) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| nutrition_food_sub_type_id | int(11) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refnutrition_food_type1 | nutrition_food_sub_type_id | no | 1 |
| PRIMARY | nutrition_food_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
