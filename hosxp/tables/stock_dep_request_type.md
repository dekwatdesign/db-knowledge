# `stock_dep_request_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_request_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_request_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_dep_request_type_name | stock_dep_request_type_name | yes | 1 |
| PRIMARY | stock_dep_request_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_dep_request_type_id": 1,
    "stock_dep_request_type_name": "คลังสินค้า"
  },
  {
    "stock_dep_request_type_id": 2,
    "stock_dep_request_type_name": "หน่วยจ่ายสินค้า"
  }
]
```
