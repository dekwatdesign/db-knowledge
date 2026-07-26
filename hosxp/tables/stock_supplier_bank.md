# `stock_supplier_bank`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_supplier_bank_id | int(11) | NO | PRI | 0 |  |  |
| supplier_id | int(11) | YES | MUL | NULL |  |  |
| bank_name | varchar(200) | YES |  | NULL |  |  |
| bank_acc_no | varchar(100) | YES |  | NULL |  |  |
| bank_note | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_supplier_id | supplier_id | no | 1 |
| PRIMARY | stock_supplier_bank_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
