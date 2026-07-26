# `inv_durable_good_budgeter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_budgeter_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_budgeter_name | varchar(100) | YES |  | NULL |  |  |
| stock_budget_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_budgeter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "inv_durable_good_budgeter_id": 1,
    "inv_durable_good_budgeter_name": "รายได้ที่องค์กรปกครองส่วนท้องถิ่นจัดเก็บเอง (Local Levied Tax)",
    "stock_budget_type_id": null
  },
  {
    "inv_durable_good_budgeter_id": 2,
    "inv_durable_good_budgeter_name": "ภาษีและค่าธรรมเนียมที่รัฐบาลจัดเก็บเพิ่มเติม (Surcharge)",
    "stock_budget_type_id": null
  },
  {
    "inv_durable_good_budgeter_id": 3,
    "inv_durable_good_budgeter_name": "รายได้ที่รัฐบาลจัดเก็บแล้วมอบให้เป็นรายได้ของท้องถิ่นทั้งจำนวน (Revenue Transfer)",
    "stock_budget_type_id": null
  },
  {
    "inv_durable_good_budgeter_id": 4,
    "inv_durable_good_budgeter_name": "รายได้ที่รัฐบาลจัดเก็บแล้วแบ่งให้แก่องค์กรปกครองส่วนท้องถิ่น (Revenue Sharing)",
    "stock_budget_type_id": null
  },
  {
    "inv_durable_good_budgeter_id": 5,
    "inv_durable_good_budgeter_name": "รายได้อื่นๆ",
    "stock_budget_type_id": null
  },
  {
    "inv_durable_good_budgeter_id": 6,
    "inv_durable_good_budgeter_name": "เงินอุดหนุนรัฐบาล",
    "stock_budget_type_id": null
  },
  {
    "inv_durable_good_budgeter_id": 7,
    "inv_durable_good_budgeter_name": "เงินกู้",
    "stock_budget_type_id": null
  },
  {
    "inv_durable_good_budgeter_id": 8,
    "inv_durable_good_budgeter_name": "เงินบริจาค",
    "stock_budget_type_id": null
  }
]
```
