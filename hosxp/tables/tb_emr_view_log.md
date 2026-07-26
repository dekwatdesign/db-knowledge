# `tb_emr_view_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emr_view_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| emr_view_user | varchar(50) | NO | PRI |  |  |  |
| vn | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| PRIMARY | emr_view_datetime | yes | 1 |
| PRIMARY | emr_view_user | yes | 2 |
| PRIMARY | vn | yes | 3 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emr_view_datetime": "2019-05-31 14:46:00",
    "emr_view_user": "yuwa008",
    "vn": "620531130008",
    "hn": "530004451"
  },
  {
    "emr_view_datetime": "2019-05-30 09:40:30",
    "emr_view_user": "yuwa008",
    "vn": "620530093030",
    "hn": "530011251"
  },
  {
    "emr_view_datetime": "2019-07-04 10:40:24",
    "emr_view_user": "yuwa008",
    "vn": "620704103026",
    "hn": "530016354"
  },
  {
    "emr_view_datetime": "2019-06-13 09:06:40",
    "emr_view_user": "yuwa008",
    "vn": "620613083032",
    "hn": "530016654"
  },
  {
    "emr_view_datetime": "2019-05-29 10:48:30",
    "emr_view_user": "yuwa008",
    "vn": "620529103010",
    "hn": "530020053"
  },
  {
    "emr_view_datetime": "2019-05-29 09:29:31",
    "emr_view_user": "yuwa008",
    "vn": "620529083020",
    "hn": "530022354"
  },
  {
    "emr_view_datetime": "2019-07-03 14:58:18",
    "emr_view_user": "yuwa008",
    "vn": "620703150010",
    "hn": "530032849"
  },
  {
    "emr_view_datetime": "2019-05-30 10:04:37",
    "emr_view_user": "yuwa008",
    "vn": "620530093044",
    "hn": "530036550"
  }
]
```
