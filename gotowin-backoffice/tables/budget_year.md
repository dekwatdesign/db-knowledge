# `budget_year`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LEAVE_YEAR_ID | varchar(10) | NO | PRI |  |  |  |
| LEAVE_YEAR_NAME | varchar(255) | YES |  |  |  |  |
| DATE_BEGIN | date | YES |  | NULL |  |  |
| DATE_END | date | YES |  | NULL |  |  |
| ACTIVE | enum('True','False') | YES |  | False |  |  |
| DAY_PER_YEAR | int | YES |  | 10 |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LEAVE_YEAR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "LEAVE_YEAR_ID": "2541",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2541",
    "DATE_BEGIN": "1997-10-01",
    "DATE_END": "1998-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:29",
    "created_at": "2020-09-23 07:35:00"
  },
  {
    "LEAVE_YEAR_ID": "2542",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2542",
    "DATE_BEGIN": "1998-10-01",
    "DATE_END": "1999-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:29",
    "created_at": "2020-09-23 07:35:00"
  },
  {
    "LEAVE_YEAR_ID": "2543",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2543",
    "DATE_BEGIN": "1999-10-01",
    "DATE_END": "2000-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:30",
    "created_at": "2020-09-23 07:35:00"
  },
  {
    "LEAVE_YEAR_ID": "2544",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2544",
    "DATE_BEGIN": "2000-10-01",
    "DATE_END": "2001-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:30",
    "created_at": "2020-09-23 07:35:00"
  },
  {
    "LEAVE_YEAR_ID": "2545",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2545",
    "DATE_BEGIN": "2001-10-01",
    "DATE_END": "2002-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:31",
    "created_at": "2020-09-23 07:35:00"
  },
  {
    "LEAVE_YEAR_ID": "2546",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2546",
    "DATE_BEGIN": "2002-10-01",
    "DATE_END": "2003-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:31",
    "created_at": "2020-09-23 07:35:00"
  },
  {
    "LEAVE_YEAR_ID": "2547",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2547",
    "DATE_BEGIN": "2003-10-01",
    "DATE_END": "2004-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:32",
    "created_at": "2020-09-23 07:35:00"
  },
  {
    "LEAVE_YEAR_ID": "2548",
    "LEAVE_YEAR_NAME": "ปีงบประมาณ 2548",
    "DATE_BEGIN": "2004-10-01",
    "DATE_END": "2005-09-30",
    "ACTIVE": "True",
    "DAY_PER_YEAR": 10,
    "updated_at": "2022-01-18 04:21:33",
    "created_at": "2020-09-23 07:35:00"
  }
]
```
