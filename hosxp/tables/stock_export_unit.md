# `stock_export_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_export_unit_id | int(11) | NO | PRI | 0 |  |  |
| code | varchar(10) | YES |  | NULL |  |  |
| code_des | varchar(100) | YES |  | NULL |  |  |
| disp_unit | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_export_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stock_export_unit_id": 1,
    "code": "001",
    "code_des": "กระป๋อง,CAN",
    "disp_unit": null
  },
  {
    "stock_export_unit_id": 2,
    "code": "002",
    "code_des": "กระปุก",
    "disp_unit": null
  },
  {
    "stock_export_unit_id": 3,
    "code": "003",
    "code_des": "กล่อง,BOX",
    "disp_unit": null
  },
  {
    "stock_export_unit_id": 4,
    "code": "004",
    "code_des": "ก้อน",
    "disp_unit": null
  },
  {
    "stock_export_unit_id": 5,
    "code": "005",
    "code_des": "แกลลอน,GALLON",
    "disp_unit": null
  },
  {
    "stock_export_unit_id": 6,
    "code": "006",
    "code_des": "ขวด,BOTTLE",
    "disp_unit": null
  },
  {
    "stock_export_unit_id": 7,
    "code": "007",
    "code_des": "คาทริดจ์",
    "disp_unit": null
  },
  {
    "stock_export_unit_id": 8,
    "code": "008",
    "code_des": "คู่",
    "disp_unit": null
  }
]
```
