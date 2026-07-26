# `emp_holiday`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_holiday_id | int(11) | NO | PRI | 0 |  |  |
| emp_holiday_date | date | YES |  | NULL |  |  |
| emp_holiday_name | varchar(50) | YES |  | NULL |  |  |
| emp_holiday_year | char(4) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_holiday_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_holiday_id": 2,
    "emp_holiday_date": "2013-01-01",
    "emp_holiday_name": "วันขึ้นปีใหม่",
    "emp_holiday_year": "2556"
  },
  {
    "emp_holiday_id": 3,
    "emp_holiday_date": "2013-02-25",
    "emp_holiday_name": "วันมาฆบูชา",
    "emp_holiday_year": "2556"
  },
  {
    "emp_holiday_id": 6,
    "emp_holiday_date": "2013-04-15",
    "emp_holiday_name": "วันสงกรานต์",
    "emp_holiday_year": "2556"
  },
  {
    "emp_holiday_id": 7,
    "emp_holiday_date": "2013-04-16",
    "emp_holiday_name": "วันหยุดชดเชย วันสงกรานต์",
    "emp_holiday_year": "2556"
  },
  {
    "emp_holiday_id": 8,
    "emp_holiday_date": "2013-05-01",
    "emp_holiday_name": "วันแรงงานแห่งชาติ",
    "emp_holiday_year": "2556"
  },
  {
    "emp_holiday_id": 10,
    "emp_holiday_date": "2013-05-06",
    "emp_holiday_name": "วันหยุดชดเชย วันฉัตรมงคล",
    "emp_holiday_year": "2556"
  },
  {
    "emp_holiday_id": 11,
    "emp_holiday_date": "2013-05-13",
    "emp_holiday_name": "วันพืชมงคล",
    "emp_holiday_year": "2556"
  },
  {
    "emp_holiday_id": 12,
    "emp_holiday_date": "2013-05-24",
    "emp_holiday_name": "วันวิสาขบูชา",
    "emp_holiday_year": "2556"
  }
]
```
