# `stock_item_mtr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_mtr_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_mtr_name | varchar(200) | YES | UNI | NULL |  |  |
| stock_item_mtr_code | varchar(25) | YES | MUL | NULL |  |  |
| stock_item_acct_id | int(11) | YES |  | NULL |  |  |
| stock_item_mtr_pgr | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_item_mtr_code | stock_item_mtr_code | no | 1 |
| ix_stock_item_tr_name | stock_item_mtr_name | yes | 1 |
| PRIMARY | stock_item_mtr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
