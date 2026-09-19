# `work_accounts_work_times`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| gtw_user_id | int | YES |  | NULL |  |  |
| work_time_start | time | YES |  | NULL |  |  |
| work_time_end | time | YES |  | NULL |  |  |
| use_date_start | date | YES |  | NULL |  |  |
| use_date_end | date | YES |  | NULL |  |  |
| is_used | varchar(1) | YES |  | NULL |  | Y or N |
| create_at | timestamp | YES |  | NULL | on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 5,
    "gtw_user_id": 12,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "use_date_start": "2025-05-13",
    "use_date_end": "2025-07-01",
    "is_used": "Y",
    "create_at": null
  },
  {
    "id": 6,
    "gtw_user_id": 12,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "use_date_start": "2026-03-01",
    "use_date_end": "2026-03-31",
    "is_used": "Y",
    "create_at": null
  },
  {
    "id": 7,
    "gtw_user_id": 302,
    "work_time_start": "8:30:00",
    "work_time_end": "16:30:00",
    "use_date_start": "2026-03-01",
    "use_date_end": "2026-03-31",
    "is_used": "Y",
    "create_at": null
  },
  {
    "id": 8,
    "gtw_user_id": 301,
    "work_time_start": "8:30:00",
    "work_time_end": "16:30:00",
    "use_date_start": "2026-03-01",
    "use_date_end": "2026-03-31",
    "is_used": "Y",
    "create_at": null
  },
  {
    "id": 9,
    "gtw_user_id": 141,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "use_date_start": "2026-03-01",
    "use_date_end": "2026-03-31",
    "is_used": "Y",
    "create_at": null
  },
  {
    "id": 10,
    "gtw_user_id": 159,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "use_date_start": "2026-03-01",
    "use_date_end": "2026-03-31",
    "is_used": "Y",
    "create_at": null
  },
  {
    "id": 11,
    "gtw_user_id": 186,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "use_date_start": "2026-03-01",
    "use_date_end": "2026-03-31",
    "is_used": "Y",
    "create_at": null
  },
  {
    "id": 12,
    "gtw_user_id": 169,
    "work_time_start": "8:00:00",
    "work_time_end": "16:00:00",
    "use_date_start": "2026-03-01",
    "use_date_end": "2026-03-31",
    "is_used": "Y",
    "create_at": null
  }
]
```
