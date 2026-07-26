# `informcom_systemtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| INFORMCOM_ST_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| INFORMCOM_ST_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | INFORMCOM_ST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "INFORMCOM_ST_ID": 1,
    "INFORMCOM_ST_NAME": "ระบบปฏิบัติการ Window",
    "updated_at": "2023-05-24 10:43:29",
    "created_at": "2022-02-24 14:15:12"
  },
  {
    "INFORMCOM_ST_ID": 2,
    "INFORMCOM_ST_NAME": "โปรแกรม Hosxp",
    "updated_at": "2023-07-24 14:26:36",
    "created_at": "2022-02-24 14:15:24"
  },
  {
    "INFORMCOM_ST_ID": 3,
    "INFORMCOM_ST_NAME": "เคสคอมพิวเตอร์ (CPU)",
    "updated_at": "2023-07-25 16:38:14",
    "created_at": "2022-10-03 16:23:07"
  },
  {
    "INFORMCOM_ST_ID": 4,
    "INFORMCOM_ST_NAME": "จอคอมพิวเตอร์",
    "updated_at": "2023-07-25 16:30:55",
    "created_at": "2023-05-24 10:42:23"
  },
  {
    "INFORMCOM_ST_ID": 5,
    "INFORMCOM_ST_NAME": "เครื่องปริ้นท์เตอร์",
    "updated_at": "2023-07-24 14:26:25",
    "created_at": "2023-07-24 14:26:25"
  },
  {
    "INFORMCOM_ST_ID": 6,
    "INFORMCOM_ST_NAME": "เครื่องสำรองไฟ (UPS)",
    "updated_at": "2023-07-25 16:31:25",
    "created_at": "2023-07-25 16:31:25"
  },
  {
    "INFORMCOM_ST_ID": 7,
    "INFORMCOM_ST_NAME": "ระบบเครือข่าย Hosxp",
    "updated_at": "2023-07-25 16:31:54",
    "created_at": "2023-07-25 16:31:54"
  },
  {
    "INFORMCOM_ST_ID": 8,
    "INFORMCOM_ST_NAME": "ระบบเครือข่ายอินเตอร์เน็ต",
    "updated_at": "2023-07-25 16:32:07",
    "created_at": "2023-07-25 16:32:07"
  }
]
```
