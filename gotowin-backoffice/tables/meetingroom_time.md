# `meetingroom_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TIME_SC_ID | int | NO | PRI | NULL | auto_increment |  |
| TIME_SC_BEGIN | time | YES |  | NULL |  |  |
| TIME_SC_END | time | YES |  | NULL |  |  |
| TIME_SC_NAME | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TIME_SC_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "TIME_SC_ID": 1,
    "TIME_SC_BEGIN": "8:30:00",
    "TIME_SC_END": "16:30:00",
    "TIME_SC_NAME": "ทั้งวัน",
    "updated_at": "2020-03-20 03:38:05",
    "created_at": null
  },
  {
    "TIME_SC_ID": 2,
    "TIME_SC_BEGIN": "8:30:00",
    "TIME_SC_END": "12:00:00",
    "TIME_SC_NAME": "ครึ่งวันเช้า",
    "updated_at": "2020-03-20 03:38:14",
    "created_at": null
  },
  {
    "TIME_SC_ID": 3,
    "TIME_SC_BEGIN": "13:00:00",
    "TIME_SC_END": "16:30:00",
    "TIME_SC_NAME": "ครึ่งวันบ่าย",
    "updated_at": "2020-03-20 03:38:23",
    "created_at": null
  }
]
```
