# `infowork_job_dis_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| JOD_DIS_POSITION_ID | int | NO | PRI | NULL | auto_increment |  |
| JOD_DIS_ID | int | YES |  | NULL |  |  |
| JOD_POSITION_ID | int | YES |  | NULL |  |  |
| JOD_POSITION_NAME | varchar(600) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | JOD_DIS_POSITION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "JOD_DIS_POSITION_ID": 1,
    "JOD_DIS_ID": 1,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:30:00",
    "created_at": "2020-09-28 10:30:00"
  },
  {
    "JOD_DIS_POSITION_ID": 2,
    "JOD_DIS_ID": 2,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:31:25",
    "created_at": "2020-09-28 10:31:25"
  },
  {
    "JOD_DIS_POSITION_ID": 3,
    "JOD_DIS_ID": 3,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:32:45",
    "created_at": "2020-09-28 10:32:45"
  },
  {
    "JOD_DIS_POSITION_ID": 4,
    "JOD_DIS_ID": 4,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:33:13",
    "created_at": "2020-09-28 10:33:13"
  },
  {
    "JOD_DIS_POSITION_ID": 5,
    "JOD_DIS_ID": 5,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:33:42",
    "created_at": "2020-09-28 10:33:42"
  },
  {
    "JOD_DIS_POSITION_ID": 6,
    "JOD_DIS_ID": 6,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:34:02",
    "created_at": "2020-09-28 10:34:02"
  },
  {
    "JOD_DIS_POSITION_ID": 7,
    "JOD_DIS_ID": 7,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:34:23",
    "created_at": "2020-09-28 10:34:23"
  },
  {
    "JOD_DIS_POSITION_ID": 8,
    "JOD_DIS_ID": 8,
    "JOD_POSITION_ID": 6,
    "JOD_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "updated_at": "2020-09-28 10:34:45",
    "created_at": "2020-09-28 10:34:45"
  }
]
```
