# `work_events_statuses`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| event_id | int | YES | MUL | NULL |  |  |
| status_id | int | YES | MUL | NULL |  |  |
| create_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| event_id | event_id | no | 1 |
| PRIMARY | id | yes | 1 |
| status_id | status_id | no | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| event_id | `work_events.id` | work_events_statuses_ibfk_1 |
| status_id | `work_statuses.id` | work_events_statuses_ibfk_2 |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "event_id": 1,
    "status_id": 4,
    "create_at": "2025-05-22 15:23:27"
  },
  {
    "id": 6,
    "event_id": 5,
    "status_id": 4,
    "create_at": "2025-05-23 11:49:06"
  },
  {
    "id": 7,
    "event_id": 5,
    "status_id": 5,
    "create_at": "2025-05-23 11:58:46"
  },
  {
    "id": 13,
    "event_id": 8,
    "status_id": 4,
    "create_at": "2025-05-23 14:12:39"
  },
  {
    "id": 19,
    "event_id": 1,
    "status_id": 5,
    "create_at": "2025-05-28 16:53:07"
  },
  {
    "id": 20,
    "event_id": 12,
    "status_id": 4,
    "create_at": "2025-06-12 10:14:37"
  },
  {
    "id": 21,
    "event_id": 13,
    "status_id": 4,
    "create_at": "2025-06-12 10:28:21"
  },
  {
    "id": 22,
    "event_id": 14,
    "status_id": 4,
    "create_at": "2025-06-13 14:59:43"
  }
]
```
