# `stock_officer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_officer_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_officer_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_officer_type_name | stock_officer_type_name | yes | 1 |
| PRIMARY | stock_officer_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_officer_type_id": 1,
    "stock_officer_type_name": "เจ้าหน้าที่พัสดุ"
  },
  {
    "stock_officer_type_id": 3,
    "stock_officer_type_name": "ผู้อนุมัติ"
  },
  {
    "stock_officer_type_id": 2,
    "stock_officer_type_name": "หัวหน้าเจ้าหน้าที่พัสดุ"
  }
]
```
