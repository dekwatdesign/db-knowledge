# `meetingroom_budget`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MB_ID | int | NO | PRI | NULL | auto_increment |  |
| MB_NAME | varchar(255) | YES |  | NULL |  |  |
| MB_PRICE | decimal(10,2) | YES |  | NULL |  |  |
| SERVICE_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "MB_ID": 1,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 22,
    "updated_at": "2022-01-21 07:44:05",
    "created_at": "2022-01-21 07:44:05"
  },
  {
    "MB_ID": 2,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 23,
    "updated_at": "2022-01-24 03:01:27",
    "created_at": "2022-01-24 03:01:27"
  },
  {
    "MB_ID": 3,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 25,
    "updated_at": "2022-01-24 08:58:26",
    "created_at": "2022-01-24 08:58:26"
  },
  {
    "MB_ID": 4,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 26,
    "updated_at": "2022-01-25 02:48:11",
    "created_at": "2022-01-25 02:48:11"
  },
  {
    "MB_ID": 6,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 28,
    "updated_at": "2022-01-25 04:01:08",
    "created_at": "2022-01-25 04:01:08"
  },
  {
    "MB_ID": 7,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 29,
    "updated_at": "2022-01-25 04:06:05",
    "created_at": "2022-01-25 04:06:05"
  },
  {
    "MB_ID": 8,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 30,
    "updated_at": "2022-01-25 04:07:26",
    "created_at": "2022-01-25 04:07:26"
  },
  {
    "MB_ID": 9,
    "MB_NAME": null,
    "MB_PRICE": null,
    "SERVICE_ID": 31,
    "updated_at": "2022-01-25 04:08:39",
    "created_at": "2022-01-25 04:08:39"
  }
]
```
