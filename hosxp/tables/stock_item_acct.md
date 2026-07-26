# `stock_item_acct`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_acct_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_acct_name | varchar(200) | YES | UNI | NULL |  |  |
| stock_item_acct_code | varchar(50) | YES |  | NULL |  |  |
| acc_po_item_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_item_acct_name | stock_item_acct_name | yes | 1 |
| PRIMARY | stock_item_acct_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
