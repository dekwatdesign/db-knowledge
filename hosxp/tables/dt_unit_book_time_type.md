# `dt_unit_book_time_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_unit_book_time_type_id | int(11) | NO | PRI | 0 |  |  |
| time_type_name | varchar(250) | YES |  | NULL |  |  |
| time_start | time | YES |  | NULL |  |  |
| time_end | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_unit_book_time_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dt_unit_book_time_type_id": 1,
    "time_type_name": "เช้า",
    "time_start": "8:00:00",
    "time_end": "12:00:00"
  },
  {
    "dt_unit_book_time_type_id": 2,
    "time_type_name": "บ่าย",
    "time_start": "13:00:00",
    "time_end": "16:00:00"
  },
  {
    "dt_unit_book_time_type_id": 3,
    "time_type_name": "นอกเวลา",
    "time_start": "17:00:00",
    "time_end": "20:00:00"
  }
]
```
