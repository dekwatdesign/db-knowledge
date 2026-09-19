# `work_gtw_departments`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| department_index | int | YES |  | NULL |  | 0,1,2 |
| department_id | int | YES |  | NULL |  |  |
| work_time_start | time | YES |  | NULL |  |  |
| work_time_end | time | YES |  | NULL |  |  |
| update_at | datetime | YES |  | NULL | on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "id": 1,
    "department_index": 2,
    "department_id": 37,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "update_at": null
  },
  {
    "id": 2,
    "department_index": 2,
    "department_id": 46,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "update_at": null
  },
  {
    "id": 3,
    "department_index": 1,
    "department_id": 29,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "update_at": null
  },
  {
    "id": 4,
    "department_index": 1,
    "department_id": 28,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "update_at": null
  },
  {
    "id": 5,
    "department_index": 0,
    "department_id": 7,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "update_at": null
  },
  {
    "id": 6,
    "department_index": 2,
    "department_id": 60,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "update_at": null
  },
  {
    "id": 7,
    "department_index": 2,
    "department_id": 34,
    "work_time_start": "7:30:00",
    "work_time_end": "15:30:00",
    "update_at": null
  }
]
```
