# `stock_rep_associate_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_rep_associate_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_rep_associate_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_rep_associate_type_name | stock_rep_associate_type_name | yes | 1 |
| PRIMARY | stock_rep_associate_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_rep_associate_type_id": 1,
    "stock_rep_associate_type_name": "ผู้แทน Supplier"
  },
  {
    "stock_rep_associate_type_id": 2,
    "stock_rep_associate_type_name": "ผู้แทน Manufacturer"
  },
  {
    "stock_rep_associate_type_id": 3,
    "stock_rep_associate_type_name": "ผู้แทน Vendor"
  }
]
```
