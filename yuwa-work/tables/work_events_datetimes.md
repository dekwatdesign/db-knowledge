# `work_events_datetimes`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| event_date | date | YES |  | NULL |  |  |
| event_time_start | time | YES |  | NULL |  |  |
| event_time_end | time | YES |  | NULL |  |  |
| event_id | int | YES | MUL | NULL |  |  |
| create_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| event_id | event_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| event_id | `work_events.id` | work_events_datetimes_ibfk_1 |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "event_date": "2025-06-06",
    "event_time_start": "8:30:00",
    "event_time_end": "16:00:00",
    "event_id": 1,
    "create_at": "2025-05-22 15:23:27"
  },
  {
    "id": 13,
    "event_date": "2025-05-26",
    "event_time_start": "13:00:00",
    "event_time_end": "16:00:00",
    "event_id": 5,
    "create_at": "2025-05-23 11:49:06"
  },
  {
    "id": 23,
    "event_date": "2025-05-23",
    "event_time_start": "8:30:00",
    "event_time_end": "16:00:00",
    "event_id": 8,
    "create_at": "2025-05-23 14:40:42"
  },
  {
    "id": 30,
    "event_date": "2025-06-23",
    "event_time_start": "8:30:00",
    "event_time_end": "16:00:00",
    "event_id": 13,
    "create_at": "2025-06-12 10:28:21"
  },
  {
    "id": 31,
    "event_date": "2025-06-24",
    "event_time_start": "8:30:00",
    "event_time_end": "16:00:00",
    "event_id": 13,
    "create_at": "2025-06-12 10:28:21"
  },
  {
    "id": 32,
    "event_date": "2025-06-20",
    "event_time_start": "8:30:00",
    "event_time_end": "16:30:00",
    "event_id": 14,
    "create_at": "2025-06-13 14:59:43"
  },
  {
    "id": 33,
    "event_date": "2025-06-27",
    "event_time_start": "8:30:00",
    "event_time_end": "16:30:00",
    "event_id": 15,
    "create_at": "2025-06-13 14:59:58"
  },
  {
    "id": 34,
    "event_date": "2025-07-08",
    "event_time_start": "8:00:00",
    "event_time_end": "12:00:00",
    "event_id": 16,
    "create_at": "2025-06-13 15:02:25"
  }
]
```
