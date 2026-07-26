# `emp_country`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_country_id | int(11) | NO | PRI | 0 |  |  |
| emp_country | varchar(50) | YES |  | NULL |  |  |
| emp_country_expense_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_country_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_country_id": 1,
    "emp_country": "แคนาดา",
    "emp_country_expense_type_id": 2
  },
  {
    "emp_country_id": 2,
    "emp_country": "เครือรัฐออสเตรเลีย",
    "emp_country_expense_type_id": 2
  },
  {
    "emp_country_id": 3,
    "emp_country": "ใต้หวัน",
    "emp_country_expense_type_id": 2
  },
  {
    "emp_country_id": 4,
    "emp_country": "เติร์กเมนิสถาน",
    "emp_country_expense_type_id": 2
  },
  {
    "emp_country_id": 5,
    "emp_country": "นิวซีแลนด์",
    "emp_country_expense_type_id": 2
  },
  {
    "emp_country_id": 6,
    "emp_country": "บอสเนียและเฮอร์เซโกวีนา",
    "emp_country_expense_type_id": 2
  },
  {
    "emp_country_id": 7,
    "emp_country": "ปาปัวนิวกินี",
    "emp_country_expense_type_id": 2
  },
  {
    "emp_country_id": 8,
    "emp_country": "มาเลเซีย",
    "emp_country_expense_type_id": 2
  }
]
```
