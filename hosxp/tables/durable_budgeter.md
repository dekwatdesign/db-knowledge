# `durable_budgeter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| durable_budgeter_id | int(11) | NO | PRI | 0 |  |  |
| durable_budgeter_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | durable_budgeter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "durable_budgeter_id": 1,
    "durable_budgeter_name": "รายได้ที่องค์กรปกครองส่วนท้องถิ่นจัดเก็บเอง (Local Levied Tax)"
  },
  {
    "durable_budgeter_id": 2,
    "durable_budgeter_name": "ภาษีและค่าธรรมเนียมที่รัฐบาลจัดเก็บเพิ่มเติม (Surcharge)"
  },
  {
    "durable_budgeter_id": 3,
    "durable_budgeter_name": "รายได้ที่รัฐบาลจัดเก็บแล้วมอบให้เป็นรายได้ของท้องถิ่นทั้งจำนวน (Revenue Transfer)"
  },
  {
    "durable_budgeter_id": 4,
    "durable_budgeter_name": "รายได้ที่รัฐบาลจัดเก็บแล้วแบ่งให้แก่องค์กรปกครองส่วนท้องถิ่น (Revenue Sharing)"
  },
  {
    "durable_budgeter_id": 5,
    "durable_budgeter_name": "รายได้อื่นๆ"
  },
  {
    "durable_budgeter_id": 6,
    "durable_budgeter_name": "เงินอุดหนุนรัฐบาล"
  }
]
```
