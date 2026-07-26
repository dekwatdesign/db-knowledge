# `stock_vendor_emp_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_emp_image_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_emp_id | int(11) | YES | MUL | NULL |  |  |
| image_data | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_vendor_emp_id | stock_vendor_emp_id | no | 1 |
| PRIMARY | stock_vendor_emp_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
