# `line_token`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID_LINE_TOKEN | int | NO | PRI | NULL | auto_increment |  |
| ID_LINE_TOKEN_NAME | varchar(255) | YES |  | NULL |  |  |
| LINE_TOKEN | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID_LINE_TOKEN | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID_LINE_TOKEN": 1,
    "ID_LINE_TOKEN_NAME": "ระบบห้องประชุม",
    "LINE_TOKEN": "cu7ZPXc1UrUCW4dVIfqQhd8ngzrkOnSYrEApVAMMQgV",
    "updated_at": "2022-01-19 13:47:30",
    "created_at": "2019-12-01 16:04:39"
  },
  {
    "ID_LINE_TOKEN": 2,
    "ID_LINE_TOKEN_NAME": "ระบบขอใช้รถยนต์",
    "LINE_TOKEN": null,
    "updated_at": "2023-05-26 04:35:27",
    "created_at": "2019-12-01 16:04:33"
  },
  {
    "ID_LINE_TOKEN": 3,
    "ID_LINE_TOKEN_NAME": "ระบบจองรถพยาบาล",
    "LINE_TOKEN": "g11aB29o7LkNM7OF3jY76zCSO30a2hzd7387FLjdGdA",
    "updated_at": "2022-01-19 10:10:26",
    "created_at": "2019-12-22 15:21:44"
  },
  {
    "ID_LINE_TOKEN": 4,
    "ID_LINE_TOKEN_NAME": "ระบบแจ้งซ่อมทั่วไป",
    "LINE_TOKEN": "tfR13ZJscSaK490jDXyoq4pFdXmGNW1es1QQ1c9xRcG",
    "updated_at": "2022-04-28 10:34:00",
    "created_at": "2019-12-22 15:21:44"
  },
  {
    "ID_LINE_TOKEN": 5,
    "ID_LINE_TOKEN_NAME": "ระบบแจ้งซ่อมคอมพิวเตอร์",
    "LINE_TOKEN": "wXxgSf4qbRnpYynZIHLbQmLgacvkT1mduCCkNIyPCe3",
    "updated_at": "2023-07-21 09:15:49",
    "created_at": "2019-12-22 15:21:44"
  },
  {
    "ID_LINE_TOKEN": 6,
    "ID_LINE_TOKEN_NAME": "ระบบแจ้งซ่อมเครื่องมือแพทย์",
    "LINE_TOKEN": "",
    "updated_at": "2019-12-22 15:21:57",
    "created_at": "2019-12-22 15:21:44"
  },
  {
    "ID_LINE_TOKEN": 7,
    "ID_LINE_TOKEN_NAME": "ระบบ รปภ.",
    "LINE_TOKEN": null,
    "updated_at": "2020-04-30 16:51:17",
    "created_at": "2020-04-30 16:51:17"
  },
  {
    "ID_LINE_TOKEN": 8,
    "ID_LINE_TOKEN_NAME": "ระบบลา",
    "LINE_TOKEN": "65h2Q5eGMiJXJATkpeSAgJRW5k0M17iIL7rgh3rxNs9",
    "updated_at": "2022-01-19 13:47:21",
    "created_at": "2021-12-03 15:45:13"
  }
]
```
