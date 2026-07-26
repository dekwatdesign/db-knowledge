# `nutrition_food_sub_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_sub_type_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_sub_type_name | varchar(100) | YES |  | NULL |  |  |
| nutrition_food_type_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_sub_type_color | varchar(10) | YES |  | NULL |  |  |
| nutrition_food_sub_type_qty_chk | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_type_id | nutrition_food_type_id | no | 1 |
| PRIMARY | nutrition_food_sub_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
