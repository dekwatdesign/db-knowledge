# `work_payroll_run_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| run_staff_id | int | NO | MUL | NULL |  |  |
| category_id | int | NO | MUL | NULL |  |  |
| category_type | enum('income','expense') | NO |  | NULL |  |  |
| category_name | varchar(255) | NO |  | NULL |  |  |
| slip_summary_key | varchar(50) | NO |  |  |  |  |
| amount | decimal(12,2) | NO |  | 0.00 |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_category_id | category_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_run_staff_category | run_staff_id | yes | 1 |
| uk_run_staff_category | category_id | yes | 2 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| category_id | `work_payroll_categories.id` | fk_payroll_run_items_category |
| run_staff_id | `work_payroll_run_staff.id` | fk_payroll_run_items_staff |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "run_staff_id": 138,
    "category_id": 2,
    "category_type": "income",
    "category_name": "เงิน พ.ต.ส./พ.ค.ส./ค.ต.ศ.",
    "slip_summary_key": "",
    "amount": "1500.00",
    "created_at": "2026-03-31 11:22:14",
    "updated_at": "2026-04-06 14:18:16"
  },
  {
    "id": 3,
    "run_staff_id": 153,
    "category_id": 4,
    "category_type": "income",
    "category_name": "ค่าเวร/ปฏิบัติงานนอกเวลา",
    "slip_summary_key": "",
    "amount": "600.00",
    "created_at": "2026-03-31 11:24:21",
    "updated_at": "2026-04-06 14:18:16"
  },
  {
    "id": 6,
    "run_staff_id": 105,
    "category_id": 2,
    "category_type": "income",
    "category_name": "เงิน พ.ต.ส./พ.ค.ส./ค.ต.ศ.",
    "slip_summary_key": "",
    "amount": "1500.00",
    "created_at": "2026-03-31 18:58:17",
    "updated_at": "2026-04-06 14:18:16"
  },
  {
    "id": 7,
    "run_staff_id": 127,
    "category_id": 4,
    "category_type": "income",
    "category_name": "ค่าเวร/ปฏิบัติงานนอกเวลา",
    "slip_summary_key": "",
    "amount": "2070.00",
    "created_at": "2026-03-31 18:58:38",
    "updated_at": "2026-04-06 14:18:16"
  },
  {
    "id": 8,
    "run_staff_id": 17,
    "category_id": 2,
    "category_type": "income",
    "category_name": "เงิน พ.ต.ส./พ.ค.ส./ค.ต.ศ.",
    "slip_summary_key": "",
    "amount": "2000.00",
    "created_at": "2026-03-31 18:59:06",
    "updated_at": "2026-04-06 14:18:16"
  },
  {
    "id": 9,
    "run_staff_id": 128,
    "category_id": 8,
    "category_type": "income",
    "category_name": "เงินตอบแทนไม่ทำเวชปฏิบ้ติส่วนตัว",
    "slip_summary_key": "",
    "amount": "10000.00",
    "created_at": "2026-03-31 18:59:54",
    "updated_at": "2026-04-06 14:18:16"
  },
  {
    "id": 10,
    "run_staff_id": 128,
    "category_id": 2,
    "category_type": "income",
    "category_name": "เงิน พ.ต.ส./พ.ค.ส./ค.ต.ศ.",
    "slip_summary_key": "",
    "amount": "15000.00",
    "created_at": "2026-03-31 18:59:54",
    "updated_at": "2026-04-06 14:18:16"
  },
  {
    "id": 11,
    "run_staff_id": 128,
    "category_id": 4,
    "category_type": "income",
    "category_name": "ค่าเวร/ปฏิบัติงานนอกเวลา",
    "slip_summary_key": "",
    "amount": "10200.00",
    "created_at": "2026-03-31 18:59:54",
    "updated_at": "2026-04-06 14:18:16"
  }
]
```
