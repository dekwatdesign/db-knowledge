# `stock_vendor_bank`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_bank_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_bank_name | varchar(200) | YES |  | NULL |  |  |
| stock_vendor_bank_acc_no | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_bank_note | text | YES |  | NULL |  |  |
| acc_bank_type_id | int(11) | YES |  | NULL |  |  |
| acc_bank_branch | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_vendor_bank_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
