# `grecord_org`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| RECORD_ORG_ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_ORG_NAME | varchar(100) | YES |  |  |  |  |
| RECORD_ORG_PHONE | varchar(100) | YES |  |  |  |  |
| RECORD_ORG_EMAIL | varchar(100) | YES |  |  |  |  |
| RECORD_ORG_ADDRESS | varchar(200) | YES |  |  |  |  |
| RECORD_ORG_WEBSITE | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | RECORD_ORG_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "RECORD_ORG_ID": 1,
    "RECORD_ORG_NAME": "กรมสุขภาพจิต",
    "RECORD_ORG_PHONE": "",
    "RECORD_ORG_EMAIL": "",
    "RECORD_ORG_ADDRESS": "",
    "RECORD_ORG_WEBSITE": "",
    "updated_at": "2022-01-18 11:12:26",
    "created_at": "2020-10-01 07:46:39"
  },
  {
    "RECORD_ORG_ID": 2,
    "RECORD_ORG_NAME": "สำนักเทคโนโลยีสารสนเทศ กรมสุขภาพจิต",
    "RECORD_ORG_PHONE": "",
    "RECORD_ORG_EMAIL": "",
    "RECORD_ORG_ADDRESS": "",
    "RECORD_ORG_WEBSITE": "",
    "updated_at": "2021-11-25 15:59:15",
    "created_at": "2021-11-25 15:59:15"
  },
  {
    "RECORD_ORG_ID": 3,
    "RECORD_ORG_NAME": "กลุ่มงานยุทธศาสตรและสารสนเทศ",
    "RECORD_ORG_PHONE": "",
    "RECORD_ORG_EMAIL": "",
    "RECORD_ORG_ADDRESS": "",
    "RECORD_ORG_WEBSITE": "",
    "updated_at": "2022-01-18 11:13:05",
    "created_at": "2022-01-14 15:35:53"
  },
  {
    "RECORD_ORG_ID": 4,
    "RECORD_ORG_NAME": "งานเทคโนโลยีสารสนเทศ",
    "RECORD_ORG_PHONE": "",
    "RECORD_ORG_EMAIL": "",
    "RECORD_ORG_ADDRESS": "",
    "RECORD_ORG_WEBSITE": "",
    "updated_at": "2022-01-14 15:44:36",
    "created_at": "2022-01-14 15:44:36"
  },
  {
    "RECORD_ORG_ID": 5,
    "RECORD_ORG_NAME": "งานเลขานุการ",
    "RECORD_ORG_PHONE": "",
    "RECORD_ORG_EMAIL": "",
    "RECORD_ORG_ADDRESS": "",
    "RECORD_ORG_WEBSITE": "",
    "updated_at": "2022-04-25 11:33:24",
    "created_at": "2022-04-25 11:33:24"
  },
  {
    "RECORD_ORG_ID": 6,
    "RECORD_ORG_NAME": "งานธุรการ",
    "RECORD_ORG_PHONE": "",
    "RECORD_ORG_EMAIL": "",
    "RECORD_ORG_ADDRESS": "",
    "RECORD_ORG_WEBSITE": "",
    "updated_at": "2022-04-26 10:49:44",
    "created_at": "2022-04-26 10:49:44"
  },
  {
    "RECORD_ORG_ID": 7,
    "RECORD_ORG_NAME": "สำนักงานหลักประกันสุขภาพแห่งชาติ",
    "RECORD_ORG_PHONE": "",
    "RECORD_ORG_EMAIL": "",
    "RECORD_ORG_ADDRESS": "",
    "RECORD_ORG_WEBSITE": "",
    "updated_at": "2022-05-03 11:48:28",
    "created_at": "2022-05-03 11:48:28"
  }
]
```
