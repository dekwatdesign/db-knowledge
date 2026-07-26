# `emp_resign_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_resign_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_resign_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_resign_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_resign_type_id": 1,
    "emp_resign_type_name": "เกษียณ"
  },
  {
    "emp_resign_type_id": 2,
    "emp_resign_type_name": "เกษียณก่อนหมดอายุราชการ"
  },
  {
    "emp_resign_type_id": 3,
    "emp_resign_type_name": "เรียนต่อ"
  },
  {
    "emp_resign_type_id": 4,
    "emp_resign_type_name": "โอนย้าย"
  },
  {
    "emp_resign_type_id": 5,
    "emp_resign_type_name": "ไล่ออก"
  },
  {
    "emp_resign_type_id": 6,
    "emp_resign_type_name": "ปลดออก"
  },
  {
    "emp_resign_type_id": 7,
    "emp_resign_type_name": "ให้ออก"
  },
  {
    "emp_resign_type_id": 8,
    "emp_resign_type_name": "ดำรงตำแหน่งทางการเมืองหรือเพื่อสมัครรับเลือกตั้ง"
  }
]
```
