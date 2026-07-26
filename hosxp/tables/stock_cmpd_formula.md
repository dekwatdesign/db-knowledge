# `stock_cmpd_formula`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cmpd_formula_id | int(11) | NO | PRI | 0 |  |  |
| stock_cmpd_formula_name | varchar(200) | YES | UNI | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_cmpd_formula_name | stock_cmpd_formula_name | yes | 1 |
| PRIMARY | stock_cmpd_formula_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
