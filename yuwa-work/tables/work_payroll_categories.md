# `work_payroll_categories`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| category_type | enum('income','expense') | NO | MUL | NULL |  |  |
| category_name | varchar(255) | NO |  | NULL |  |  |
| slip_summary_key | varchar(50) | NO |  |  |  |  |
| sort | int | NO |  | 0 |  |  |
| is_active | varchar(1) | NO | MUL | Y |  |  |
| created_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_category_active | is_active | no | 1 |
| idx_category_type | category_type | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "category_type": "income",
    "category_name": "เงินเดือน",
    "slip_summary_key": "",
    "sort": 1,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 11:16:16",
    "updated_at": "2026-03-31 11:16:16"
  },
  {
    "id": 2,
    "category_type": "income",
    "category_name": "เงิน พ.ต.ส./พ.ค.ส./ค.ต.ศ.",
    "slip_summary_key": "",
    "sort": 3,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 11:17:47",
    "updated_at": "2026-03-31 11:17:47"
  },
  {
    "id": 3,
    "category_type": "income",
    "category_name": "ตกเบิกเงิน (อื่นๆ)",
    "slip_summary_key": "",
    "sort": 7,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 11:18:06",
    "updated_at": "2026-04-24 11:28:21"
  },
  {
    "id": 4,
    "category_type": "income",
    "category_name": "ค่าเวร/ปฏิบัติงานนอกเวลา",
    "slip_summary_key": "",
    "sort": 6,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 11:18:22",
    "updated_at": "2026-03-31 18:47:21"
  },
  {
    "id": 5,
    "category_type": "expense",
    "category_name": "ภาษี",
    "slip_summary_key": "tax",
    "sort": 1,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 11:19:04",
    "updated_at": "2026-04-01 14:56:04"
  },
  {
    "id": 6,
    "category_type": "expense",
    "category_name": "สหกรณ์กรมสุขภาพจิต",
    "slip_summary_key": "",
    "sort": 6,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 11:19:38",
    "updated_at": "2026-04-01 16:11:30"
  },
  {
    "id": 7,
    "category_type": "income",
    "category_name": "ค่าตอบแทนผลการปฏิบ้ติงาน P4P",
    "slip_summary_key": "",
    "sort": 5,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 11:23:20",
    "updated_at": "2026-03-31 18:47:11"
  },
  {
    "id": 8,
    "category_type": "income",
    "category_name": "เงินตอบแทนไม่ทำเวชปฏิบ้ติส่วนตัว",
    "slip_summary_key": "",
    "sort": 2,
    "is_active": "Y",
    "created_by": 29,
    "created_at": "2026-03-31 18:46:43",
    "updated_at": "2026-03-31 18:46:43"
  }
]
```
