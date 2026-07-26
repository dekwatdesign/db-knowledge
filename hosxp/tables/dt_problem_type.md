# `dt_problem_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_problem_type_id | int(11) | NO | PRI | 0 |  |  |
| dt_problem_type_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_problem_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dt_problem_type_id": 1,
    "dt_problem_type_name": "ฟันต้องอุด"
  },
  {
    "dt_problem_type_id": 2,
    "dt_problem_type_name": "ฟันผุที่ต้องถอนหรือรักษารากฟัน"
  },
  {
    "dt_problem_type_id": 3,
    "dt_problem_type_name": "ฟันโยกที่ต้องถอน"
  },
  {
    "dt_problem_type_id": 4,
    "dt_problem_type_name": "ต้องใส่ฟันเทียม"
  },
  {
    "dt_problem_type_id": 9,
    "dt_problem_type_name": "ปริทันต์อักเสบ"
  },
  {
    "dt_problem_type_id": 8,
    "dt_problem_type_name": "มีหินน้ำลาย"
  },
  {
    "dt_problem_type_id": 7,
    "dt_problem_type_name": "เหงือกอักเสบ"
  },
  {
    "dt_problem_type_id": 5,
    "dt_problem_type_name": "ฟันบิ่นหรือแตกต้องอุด"
  }
]
```
