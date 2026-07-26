# `nutrition_food_notification`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_noti_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| ward | varchar(4) | YES | MUL | NULL |  |  |
| bed | varchar(6) | YES | MUL | NULL |  |  |
| type_id | int(11) | YES | MUL | NULL |  |  |
| nutrition_food_noti_date | datetime | YES | MUL | NULL |  |  |
| staff_confirm | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_bed | bed | no | 1 |
| ix_nutrition_food_noti_date | nutrition_food_noti_date | no | 1 |
| ix_type_id | type_id | no | 1 |
| ix_ward | ward | no | 1 |
| PRIMARY | nutrition_food_noti_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
