# `stock_dep_request_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_request_status_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_request_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_dep_request_status_name | stock_dep_request_status_name | yes | 1 |
| PRIMARY | stock_dep_request_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_dep_request_status_id": 2,
    "stock_dep_request_status_name": "ได้รับสินค้าแล้ว"
  },
  {
    "stock_dep_request_status_id": 1,
    "stock_dep_request_status_name": "ยังไม่ได้รับสินค้า"
  }
]
```
