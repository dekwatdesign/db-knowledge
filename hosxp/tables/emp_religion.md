# `emp_religion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_religion_id | char(2) | NO | PRI |  |  |  |
| emp_religion_name | varchar(40) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_religion_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "emp_religion_id": "00",
    "emp_religion_name": "ไม่ระบุศาสนา"
  },
  {
    "emp_religion_id": "01",
    "emp_religion_name": "พุทธ"
  },
  {
    "emp_religion_id": "02",
    "emp_religion_name": "คริสต์"
  },
  {
    "emp_religion_id": "03",
    "emp_religion_name": "อิสลาม"
  },
  {
    "emp_religion_id": "04",
    "emp_religion_name": "ฮินดู"
  },
  {
    "emp_religion_id": "05",
    "emp_religion_name": "พราหมณ์"
  },
  {
    "emp_religion_id": "06",
    "emp_religion_name": "ศาสนาอื่นๆ"
  }
]
```
