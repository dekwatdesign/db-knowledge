# `nutrition_food_st`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_st_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_st_date | date | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| dietician_confirm | char(1) | YES |  | NULL |  |  |
| dietician_staff_confirm | varchar(50) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| entry_type | varchar(3) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nutrition_food_st_date | nutrition_food_st_date | no | 1 |
| PRIMARY | nutrition_food_st_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
