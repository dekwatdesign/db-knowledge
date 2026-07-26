# `meetting_inside_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MEETTINGSIDE_ID | int | NO | PRI | NULL | auto_increment |  |
| MEETTINGSIDE_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MEETTINGSIDE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "MEETTINGSIDE_ID": 1,
    "MEETTINGSIDE_NAME": "ประชุมกรรมการมูลนิธิ",
    "updated_at": "2020-08-19 15:11:46",
    "created_at": "2020-08-19 15:11:46"
  },
  {
    "MEETTINGSIDE_ID": 2,
    "MEETTINGSIDE_NAME": "ประชุมกรรมการ คปสอ.",
    "updated_at": "2020-08-19 15:17:58",
    "created_at": "2020-08-19 15:17:58"
  },
  {
    "MEETTINGSIDE_ID": 3,
    "MEETTINGSIDE_NAME": "ประชุมกรรมการบริหาร รพ",
    "updated_at": "2020-08-19 15:18:26",
    "created_at": "2020-08-19 15:18:26"
  },
  {
    "MEETTINGSIDE_ID": 4,
    "MEETTINGSIDE_NAME": "ประชุมกรรมการบริหารคุณภาพ",
    "updated_at": "2020-08-19 15:21:33",
    "created_at": "2020-08-19 15:21:33"
  },
  {
    "MEETTINGSIDE_ID": 5,
    "MEETTINGSIDE_NAME": "ประชุมกรรมการทีมประสาน",
    "updated_at": "2020-08-19 15:22:03",
    "created_at": "2020-08-19 15:22:03"
  },
  {
    "MEETTINGSIDE_ID": 6,
    "MEETTINGSIDE_NAME": "ประชุมหน่วยงาน",
    "updated_at": "2020-08-19 15:23:04",
    "created_at": "2020-08-19 15:23:04"
  },
  {
    "MEETTINGSIDE_ID": 7,
    "MEETTINGSIDE_NAME": "ประชุมวิชาการ",
    "updated_at": "2020-08-19 15:23:19",
    "created_at": "2020-08-19 15:23:19"
  },
  {
    "MEETTINGSIDE_ID": 8,
    "MEETTINGSIDE_NAME": "ประชุมอื่นฯ",
    "updated_at": "2020-08-19 15:23:32",
    "created_at": "2020-08-19 15:23:32"
  }
]
```
