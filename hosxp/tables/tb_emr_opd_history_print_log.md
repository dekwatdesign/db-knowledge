# `tb_emr_opd_history_print_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| loginname | varchar(50) | NO | PRI |  |  |  |
| log_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | loginname | yes | 3 |
| PRIMARY | log_datetime | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "590317104706",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:31"
  },
  {
    "vn": "590518160447",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:31"
  },
  {
    "vn": "600105121000",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:04"
  },
  {
    "vn": "600105121000",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:31"
  },
  {
    "vn": "600216110022",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:03"
  },
  {
    "vn": "600216110022",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:31"
  },
  {
    "vn": "620527101017",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:03"
  },
  {
    "vn": "620527101017",
    "hn": "530161154",
    "loginname": "bms",
    "log_datetime": "2019-05-27 11:04:31"
  }
]
```
