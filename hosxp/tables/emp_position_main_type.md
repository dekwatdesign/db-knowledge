# `emp_position_main_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_position_main_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_position_main_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_position_main_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "emp_position_main_type_id": 1,
    "emp_position_main_type_name": "ทั่วไป,บริหารระดับกลาง,บริหารระดับสูง"
  },
  {
    "emp_position_main_type_id": 2,
    "emp_position_main_type_name": "บริหารระดับกลาง,บริหารระดับสูง"
  },
  {
    "emp_position_main_type_id": 3,
    "emp_position_main_type_name": "ทั่วไป,บริหารระดับกลาง"
  },
  {
    "emp_position_main_type_id": 4,
    "emp_position_main_type_name": "ทั่วไป"
  },
  {
    "emp_position_main_type_id": 5,
    "emp_position_main_type_name": "ทั่วไป,บริหารระดับกลาง,เชี่ยวชาญเฉพาะ"
  },
  {
    "emp_position_main_type_id": 6,
    "emp_position_main_type_name": "ทั่วไป,วิชาชีพเฉพาะ"
  }
]
```
