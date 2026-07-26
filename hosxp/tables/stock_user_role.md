# `stock_user_role`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_user_role_id | int(11) | NO | PRI | 0 |  |  |
| stock_user_role_name | varchar(100) | YES |  | NULL |  |  |
| stock_user_role_desc | text | YES |  | NULL |  |  |
| stock_user_role_status | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_user_role_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "stock_user_role_id": 1,
    "stock_user_role_name": "Administrator",
    "stock_user_role_desc": null,
    "stock_user_role_status": null
  },
  {
    "stock_user_role_id": 2,
    "stock_user_role_name": "งานจัดซื้อ",
    "stock_user_role_desc": null,
    "stock_user_role_status": null
  },
  {
    "stock_user_role_id": 3,
    "stock_user_role_name": "งานคลังใหญ่และงานคลังอื่นๆ",
    "stock_user_role_desc": null,
    "stock_user_role_status": null
  },
  {
    "stock_user_role_id": 4,
    "stock_user_role_name": "หน่วยจ่ายย่อย",
    "stock_user_role_desc": null,
    "stock_user_role_status": null
  },
  {
    "stock_user_role_id": 5,
    "stock_user_role_name": "งานคลังใหญ่คลังย่อยและงานคลังอื่นๆ",
    "stock_user_role_desc": null,
    "stock_user_role_status": null
  },
  {
    "stock_user_role_id": 6,
    "stock_user_role_name": "การเงิน",
    "stock_user_role_desc": null,
    "stock_user_role_status": null
  }
]
```
