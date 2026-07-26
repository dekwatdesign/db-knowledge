# `nutrition_food_ord`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_food_ord_id | int(11) | NO | PRI | 0 |  |  |
| nutrition_food_ord_date | date | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| dietician_confirm | char(1) | YES |  | NULL |  |  |
| dietician_staff_confirm | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| entry_type | varchar(3) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| nutrition_food_pf_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_nutrition_food_ord_date | nutrition_food_ord_date | no | 1 |
| ix_nutrition_food_pf_id | nutrition_food_pf_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | nutrition_food_ord_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
