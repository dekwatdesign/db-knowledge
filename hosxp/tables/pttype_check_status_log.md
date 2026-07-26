# `pttype_check_status_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_check_status_log_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |
| pttype_check_staff | varchar(50) | YES |  | NULL |  |  |
| pttype_check_status_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pttype_check_status_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype_check_status_log_id": 1,
    "vn": "570519093016",
    "log_datetime": "2014-05-19 07:39:02",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  },
  {
    "pttype_check_status_log_id": 2,
    "vn": "570519083008",
    "log_datetime": "2014-05-19 07:42:29",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  },
  {
    "pttype_check_status_log_id": 3,
    "vn": "570519083008",
    "log_datetime": "2014-05-19 07:42:54",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  },
  {
    "pttype_check_status_log_id": 4,
    "vn": "570519090016",
    "log_datetime": "2014-05-19 07:46:42",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  },
  {
    "pttype_check_status_log_id": 5,
    "vn": "570519083036",
    "log_datetime": "2014-05-19 07:52:45",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  },
  {
    "pttype_check_status_log_id": 6,
    "vn": "570519093028",
    "log_datetime": "2014-05-19 07:52:47",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  },
  {
    "pttype_check_status_log_id": 7,
    "vn": "570519083038",
    "log_datetime": "2014-05-19 07:58:46",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  },
  {
    "pttype_check_status_log_id": 8,
    "vn": "570519093026",
    "log_datetime": "2014-05-19 08:01:24",
    "pttype_check_staff": "yuwa138",
    "pttype_check_status_id": 1
  }
]
```
