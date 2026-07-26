# `stock_cmpd_formula_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_cmpd_formula_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_cmpd_formula_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| stock_cmpd_formula_percent | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_cmpd_formula_id | no | 1 |
| PRIMARY | stock_cmpd_formula_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
