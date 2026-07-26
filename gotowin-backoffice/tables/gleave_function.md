# `gleave_function`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FUNCTION_ID | int | NO | PRI | NULL | auto_increment |  |
| FUNCTION_NAME | varchar(100) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FUNCTION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "FUNCTION_ID": 1,
    "FUNCTION_NAME": "ลายเซ็นต์อิเล็กทรอนิกส์",
    "ACTIVE": "True",
    "updated_at": "2022-01-19 07:43:48",
    "created_at": null
  },
  {
    "FUNCTION_ID": 2,
    "FUNCTION_NAME": "เลือกผู้หมอบหมายงานได้เฉพาะหน่วยงานเดียวกัน",
    "ACTIVE": "True",
    "updated_at": "2022-04-25 07:47:24",
    "created_at": null
  }
]
```
