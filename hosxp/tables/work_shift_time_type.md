# `work_shift_time_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_shift_time_type_id | int(11) | NO | PRI | 0 |  |  |
| work_shift_time_type_name | varchar(200) | YES | UNI | NULL |  |  |
| work_shift_time_type_start | time | YES |  | NULL |  |  |
| work_shift_time_type_finish | time | YES |  | NULL |  |  |
| work_shift_time_hour | int(11) | YES |  | NULL |  |  |
| work_shift_code | varchar(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_work_shift_time_type_name | work_shift_time_type_name | yes | 1 |
| PRIMARY | work_shift_time_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "work_shift_time_type_id": 1,
    "work_shift_time_type_name": "เช้า",
    "work_shift_time_type_start": "8:00:00",
    "work_shift_time_type_finish": "15:59:59",
    "work_shift_time_hour": 8,
    "work_shift_code": null
  },
  {
    "work_shift_time_type_id": 2,
    "work_shift_time_type_name": "บ่าย",
    "work_shift_time_type_start": "16:00:00",
    "work_shift_time_type_finish": "23:59:59",
    "work_shift_time_hour": 8,
    "work_shift_code": null
  },
  {
    "work_shift_time_type_id": 3,
    "work_shift_time_type_name": "ดึก",
    "work_shift_time_type_start": "0:00:00",
    "work_shift_time_type_finish": "7:59:59",
    "work_shift_time_hour": 8,
    "work_shift_code": null
  }
]
```
