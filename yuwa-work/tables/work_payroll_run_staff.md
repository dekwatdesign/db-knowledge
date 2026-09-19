# `work_payroll_run_staff`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| run_id | int | NO | MUL | NULL |  |  |
| gtw_user_id | int | NO | MUL | NULL |  |  |
| gtw_person_id | int | YES |  | NULL |  |  |
| person_name | varchar(255) | NO |  | NULL |  |  |
| position_name | varchar(255) | YES |  | NULL |  |  |
| department_name | varchar(255) | YES |  | NULL |  |  |
| slip_person_type_id | varchar(50) | YES |  | NULL |  |  |
| slip_person_type_name | varchar(255) | YES |  | NULL |  |  |
| slip_bank_account | varchar(100) | YES |  | NULL |  |  |
| slip_pay_period_label | varchar(255) | YES |  | NULL |  |  |
| slip_payment_date | date | YES |  | NULL |  |  |
| total_income | decimal(12,2) | NO |  | 0.00 |  |  |
| total_expense | decimal(12,2) | NO |  | 0.00 |  |  |
| net_amount | decimal(12,2) | NO |  | 0.00 |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_gtw_user_id | gtw_user_id | no | 1 |
| idx_run_id | run_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_run_user | run_id | yes | 1 |
| uk_run_user | gtw_user_id | yes | 2 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| run_id | `work_payroll_runs.id` | fk_payroll_run_staff_run |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "run_id": 1,
    "gtw_user_id": 5,
    "gtw_person_id": 4,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "นายแพทย์",
    "department_name": "ที่ปรึกษาโรงพยาบาล",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "0.00",
    "total_expense": "0.00",
    "net_amount": "0.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  },
  {
    "id": 2,
    "run_id": 1,
    "gtw_user_id": 243,
    "gtw_person_id": 243,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "เภสัชกร",
    "department_name": "กลุ่มงานเภสัชกรรม",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "6500.00",
    "total_expense": "250.00",
    "net_amount": "6250.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  },
  {
    "id": 3,
    "run_id": 1,
    "gtw_user_id": 192,
    "gtw_person_id": 192,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "พยาบาลวิชาชีพ",
    "department_name": "งานการพยาบาลหอผู้ป่วยในเด็กโต",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "1500.00",
    "total_expense": "0.00",
    "net_amount": "1500.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  },
  {
    "id": 4,
    "run_id": 1,
    "gtw_user_id": 193,
    "gtw_person_id": 193,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "พยาบาลวิชาชีพ",
    "department_name": "งานการพยาบาลหอผู้ป่วยในเด็กโต",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "1500.00",
    "total_expense": "0.00",
    "net_amount": "1500.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  },
  {
    "id": 5,
    "run_id": 1,
    "gtw_user_id": 122,
    "gtw_person_id": 122,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "พนักงานช่วยเหลือคนไข้",
    "department_name": "กลุ่มงานกิจกรรมบำบัด",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "13550.00",
    "total_expense": "6340.00",
    "net_amount": "7210.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  },
  {
    "id": 6,
    "run_id": 1,
    "gtw_user_id": 147,
    "gtw_person_id": 147,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "พยาบาลวิชาชีพ",
    "department_name": "งานการพยาบาลหอผู้ป่วยนอกพัฒนาการ",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "1500.00",
    "total_expense": "0.00",
    "net_amount": "1500.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  },
  {
    "id": 7,
    "run_id": 1,
    "gtw_user_id": 258,
    "gtw_person_id": 258,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "พยาบาลวิชาชีพ",
    "department_name": "กลุ่มงานการพยาบาลหอผู้ป่วยหนัก",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "6680.00",
    "total_expense": "234.00",
    "net_amount": "6446.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  },
  {
    "id": 8,
    "run_id": 1,
    "gtw_user_id": 300,
    "gtw_person_id": 300,
    "person_name": "[MASKED_FULLNAME]",
    "position_name": "พยาบาลวิชาชีพ",
    "department_name": "งานวิจัยและพัฒนาทางการพยาบาลจิตเวชสู่ความเป็นเลิศ",
    "slip_person_type_id": null,
    "slip_person_type_name": null,
    "slip_bank_account": null,
    "slip_pay_period_label": "01/2569 - เงินเดือน - งวดปกติ",
    "slip_payment_date": "2026-01-27",
    "total_income": "0.00",
    "total_expense": "0.00",
    "net_amount": "0.00",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-22 16:22:53"
  }
]
```
