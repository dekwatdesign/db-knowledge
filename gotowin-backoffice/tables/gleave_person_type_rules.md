# `gleave_person_type_rules`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int unsigned | NO | PRI | NULL | auto_increment |  |
| person_type_id | varchar(20) | NO | MUL | NULL |  | hrd_person_type.HR_PERSON_TYPE_ID |
| leave_type_id | int | NO |  | 4 |  | gleave_type.LEAVE_TYPE_ID |
| min_months | int | NO |  | 0 |  | อายุงานขั้นต่ำ (เดือน) จึงได้สิทธิ์ |
| days_per_year | decimal(5,1) | NO |  | 0.0 |  | จำนวนวันลาต่อปี |
| can_carry | tinyint(1) | NO |  | 0 |  | 1=สะสมได้ |
| max_carry | int | NO |  | 0 |  | วันสะสมสูงสุด (อายุงานปกติ) |
| long_service_years | int | YES |  | NULL |  | อายุงาน (ปี) เพื่อขอ max_carry_long (NULL=ไม่ใช้) |
| max_carry_long | int | NO |  | 0 |  | วันสะสมสูงสุด (อายุงานมาก) |
| is_active | tinyint(1) | NO |  | 1 |  |  |
| note | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_type_leave | person_type_id | yes | 1 |
| uk_type_leave | leave_type_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "person_type_id": "1",
    "leave_type_id": 1,
    "min_months": 0,
    "days_per_year": "60.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "ข้าราชการ — ลาป่วย 60 วัน/ปี",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  },
  {
    "id": 2,
    "person_type_id": "2",
    "leave_type_id": 1,
    "min_months": 0,
    "days_per_year": "60.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "ลูกจ้างประจำ — ลาป่วย 60 วัน/ปี",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  },
  {
    "id": 3,
    "person_type_id": "3",
    "leave_type_id": 1,
    "min_months": 0,
    "days_per_year": "30.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "พนักงานราชการ — ลาป่วย 30 วัน/ปี",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  },
  {
    "id": 4,
    "person_type_id": "4",
    "leave_type_id": 1,
    "min_months": 0,
    "days_per_year": "30.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "พกส. — ลาป่วย 30 วัน/ปี",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  },
  {
    "id": 5,
    "person_type_id": "5",
    "leave_type_id": 1,
    "min_months": 1,
    "days_per_year": "30.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "ลูกจ้างชั่วคราว — ลาป่วย 30 วัน/ปี (หลัง 1 เดือน)",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  },
  {
    "id": 6,
    "person_type_id": "6",
    "leave_type_id": 1,
    "min_months": 1,
    "days_per_year": "30.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "ลูกจ้างรายวัน — ลาป่วย 30 วัน/ปี (หลัง 1 เดือน)",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  },
  {
    "id": 7,
    "person_type_id": "7",
    "leave_type_id": 1,
    "min_months": 0,
    "days_per_year": "30.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "แพทย์ที่ปรึกษา — ลาป่วย 30 วัน/ปี",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  },
  {
    "id": 8,
    "person_type_id": "8",
    "leave_type_id": 1,
    "min_months": 1,
    "days_per_year": "30.0",
    "can_carry": 0,
    "max_carry": 0,
    "long_service_years": null,
    "max_carry_long": 0,
    "is_active": 1,
    "note": "ลูกจ้างรายคาบ — ลาป่วย 30 วัน/ปี (หลัง 1 เดือน)",
    "created_at": "2026-03-20 16:55:03",
    "updated_at": "2026-03-20 16:55:55"
  }
]
```
