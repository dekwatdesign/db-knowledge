# `emp_occupation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_occupation_name | varchar(50) | YES | UNI | NULL |  |  |
| emp_occupation_id | varchar(4) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | emp_occupation_name | yes | 1 |
| PRIMARY | emp_occupation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_occupation_name": "(-)",
    "emp_occupation_id": "000"
  },
  {
    "emp_occupation_name": "กรรมกร",
    "emp_occupation_id": "404"
  },
  {
    "emp_occupation_name": "กสิกรรม",
    "emp_occupation_id": "501"
  },
  {
    "emp_occupation_name": "กำนัน",
    "emp_occupation_id": "211"
  },
  {
    "emp_occupation_name": "เกษตรกรรม",
    "emp_occupation_id": "502"
  },
  {
    "emp_occupation_name": "ข้าราชการการเมือง",
    "emp_occupation_id": "206"
  },
  {
    "emp_occupation_name": "ข้าราชการบำนาญ",
    "emp_occupation_id": "208"
  },
  {
    "emp_occupation_name": "คนขับรถที่ใช้สัตว์ลากเทียม",
    "emp_occupation_id": "710"
  }
]
```
