# `tb_delete_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| delete_log_date | date | NO | PRI | 0000-00-00 |  |  |
| delete_log_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| delete_log_date_status | char(2) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| delete_log_date | delete_log_date | no | 1 |
| delete_log_date_status | delete_log_date_status | no | 1 |
| PRIMARY | delete_log_date | yes | 1 |
| PRIMARY | delete_log_datetime | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "delete_log_date": "2020-02-18",
    "delete_log_datetime": "2020-02-18 14:30:47",
    "delete_log_date_status": "Y"
  },
  {
    "delete_log_date": "2020-02-19",
    "delete_log_datetime": "2020-02-19 13:24:19",
    "delete_log_date_status": "Y"
  },
  {
    "delete_log_date": "2020-03-02",
    "delete_log_datetime": "2020-03-02 11:10:11",
    "delete_log_date_status": "Y"
  },
  {
    "delete_log_date": "2020-03-06",
    "delete_log_datetime": "2020-03-06 10:48:51",
    "delete_log_date_status": "Y"
  },
  {
    "delete_log_date": "2020-03-18",
    "delete_log_datetime": "2020-03-18 12:08:02",
    "delete_log_date_status": "Y"
  },
  {
    "delete_log_date": "2020-04-28",
    "delete_log_datetime": "2020-04-28 14:35:08",
    "delete_log_date_status": "Y"
  },
  {
    "delete_log_date": "2020-04-29",
    "delete_log_datetime": "2020-04-29 10:16:21",
    "delete_log_date_status": "Y"
  },
  {
    "delete_log_date": "2020-05-19",
    "delete_log_datetime": "2020-05-19 16:38:58",
    "delete_log_date_status": "Y"
  }
]
```
