# `stock_authorize_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_authorize_position_id | int(11) | NO | PRI | 0 |  |  |
| stock_authorize_position_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_authorize_position_name | stock_authorize_position_name | yes | 1 |
| PRIMARY | stock_authorize_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_authorize_position_id": 3,
    "stock_authorize_position_name": "ผู้อำนวยการ"
  },
  {
    "stock_authorize_position_id": 2,
    "stock_authorize_position_name": "หัวหน้าแผนก/กอง"
  },
  {
    "stock_authorize_position_id": 1,
    "stock_authorize_position_name": "หัวหน้าฝ่าย"
  }
]
```
