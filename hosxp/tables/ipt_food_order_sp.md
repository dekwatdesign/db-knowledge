# `ipt_food_order_sp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| food_order_sp_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| nutrition_items_id | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| meal | int(11) | YES |  | NULL |  |  |
| comment | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_nutrition_items_id | nutrition_items_id | no | 1 |
| PRIMARY | food_order_sp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
