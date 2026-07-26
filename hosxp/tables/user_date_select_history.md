# `user_date_select_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_date_select_history_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(20) | YES | MUL | NULL |  |  |
| date1 | date | YES |  | NULL |  |  |
| date2 | date | YES |  | NULL |  |  |
| select_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| PRIMARY | user_date_select_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "user_date_select_history_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "date1": "2021-11-01",
    "date2": "2021-11-30",
    "select_datetime": "2021-12-05 12:07:22"
  },
  {
    "user_date_select_history_id": 2,
    "staff": "[MASKED_FULLNAME]",
    "date1": "2021-11-01",
    "date2": "2021-11-30",
    "select_datetime": "2021-12-05 12:08:00"
  },
  {
    "user_date_select_history_id": 3,
    "staff": "[MASKED_FULLNAME]",
    "date1": "2021-11-01",
    "date2": "2021-11-30",
    "select_datetime": "2021-12-05 12:10:27"
  },
  {
    "user_date_select_history_id": 4,
    "staff": "[MASKED_FULLNAME]",
    "date1": "2021-11-01",
    "date2": "2021-11-30",
    "select_datetime": "2024-01-23 15:18:15"
  },
  {
    "user_date_select_history_id": 5,
    "staff": "[MASKED_FULLNAME]",
    "date1": "2021-10-01",
    "date2": "2021-10-31",
    "select_datetime": "2025-10-27 10:26:08"
  }
]
```
