# `stock_authorize_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_authorize_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_authorize_type_name | varchar(200) | YES | UNI | NULL |  |  |
| need_authorize | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_authorize_type_name | stock_authorize_type_name | yes | 1 |
| PRIMARY | stock_authorize_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "stock_authorize_type_id": 1,
    "stock_authorize_type_name": "อนุมัติ 3 ระดับ (ฝ่าย / กอง / ผอ.)",
    "need_authorize": "Y"
  },
  {
    "stock_authorize_type_id": 2,
    "stock_authorize_type_name": "อนุมัติ 2 ระดับ (ฝ่าย / กอง)",
    "need_authorize": "Y"
  },
  {
    "stock_authorize_type_id": 3,
    "stock_authorize_type_name": "อนุมัติ 1 ระดับ (ฝ่าย)",
    "need_authorize": "Y"
  },
  {
    "stock_authorize_type_id": 4,
    "stock_authorize_type_name": "ไม่ต้องอนุมัติ",
    "need_authorize": "N"
  }
]
```
