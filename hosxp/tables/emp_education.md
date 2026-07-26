# `emp_education`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_education_id | int(11) | NO | PRI | 0 |  |  |
| emp_education_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_education_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_education_id": 1,
    "emp_education_name": "ประถมศึกษา"
  },
  {
    "emp_education_id": 2,
    "emp_education_name": "มัธยมศึกษาตอนต้น"
  },
  {
    "emp_education_id": 3,
    "emp_education_name": "มัธยมศึกษาตอนปลาย/ปวช."
  },
  {
    "emp_education_id": 4,
    "emp_education_name": "ปวส./ปวท."
  },
  {
    "emp_education_id": 5,
    "emp_education_name": "ปริญญาตรี"
  },
  {
    "emp_education_id": 6,
    "emp_education_name": "ปริญญาโท"
  },
  {
    "emp_education_id": 7,
    "emp_education_name": "ปริญญาเอก"
  },
  {
    "emp_education_id": 8,
    "emp_education_name": "ป.กศ สูง"
  }
]
```
