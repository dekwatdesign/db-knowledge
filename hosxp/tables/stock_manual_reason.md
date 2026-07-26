# `stock_manual_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_manual_reason_id | int(11) | NO | PRI | 0 |  |  |
| stock_manual_reason_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_manual_reason_name | stock_manual_reason_name | yes | 1 |
| PRIMARY | stock_manual_reason_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "stock_manual_reason_id": 1,
    "stock_manual_reason_name": "จ่ายให้หน่วยงานภายใน"
  },
  {
    "stock_manual_reason_id": 2,
    "stock_manual_reason_name": "จ่ายให้หน่วยงานภายนอก"
  },
  {
    "stock_manual_reason_id": 3,
    "stock_manual_reason_name": "จ่ายให้กับผู้ป่วย"
  },
  {
    "stock_manual_reason_id": 4,
    "stock_manual_reason_name": "อื่นๆ"
  }
]
```
