# `pttype_items_price_inc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_items_price_inc_id | int(11) | NO | PRI | 0 |  |  |
| pttype_items_price_id | int(11) | YES | MUL | NULL |  |  |
| inc_icode | char(7) | YES | MUL | NULL |  |  |
| inc_income | char(2) | YES |  | NULL |  |  |
| inc_paidst | char(2) | YES |  | NULL |  |  |
| inc_cover_price | double(15,3) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_items_price_id | pttype_items_price_id | no | 1 |
| ix_uni | pttype_items_price_id | yes | 1 |
| ix_uni | inc_icode | yes | 2 |
| ix_uni_index | inc_icode | yes | 1 |
| ix_uni_index | pttype_items_price_id | yes | 2 |
| PRIMARY | pttype_items_price_inc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
