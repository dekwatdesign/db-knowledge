# `emp_mate_job_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_mate_job_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_mate_job_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_mate_job_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "emp_mate_job_type_id": 1,
    "emp_mate_job_type_name": "ไม่เป็นข้าราชการประจำหรือลูกจ้างประจำ"
  },
  {
    "emp_mate_job_type_id": 2,
    "emp_mate_job_type_name": "เป็นข้าราชการ"
  },
  {
    "emp_mate_job_type_id": 3,
    "emp_mate_job_type_name": "ลูกจ้างประจำ"
  },
  {
    "emp_mate_job_type_id": 4,
    "emp_mate_job_type_name": "เป็นพนักงานหรือลูกจ้างในรัฐวิสาหกิจ/หน่วยงานของทางราชการ/ราชการส่วนท้องถิ่น"
  },
  {
    "emp_mate_job_type_id": 5,
    "emp_mate_job_type_name": "กรุงเทพมหานคร องค์กรอิสระ องค์กรมหาชน หรือหน่วยงานอื่นใด"
  }
]
```
