# `gbook_org_in`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BOOK_ORG_ID | int | NO | PRI | NULL | auto_increment |  |
| BOOK_ORG_NAME | varchar(255) | YES |  |  |  |  |
| BOOK_ORG_PHONE | varchar(50) | YES |  |  |  |  |
| BOOK_ORG_EMAIL | varchar(100) | YES |  |  |  |  |
| BOOK_ORG_ADDRESS | varchar(200) | YES |  |  |  |  |
| BOOK_ORG_WEBSITE | varchar(100) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BOOK_ORG_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "BOOK_ORG_ID": 1,
    "BOOK_ORG_NAME": "สำนักงานผู้อำนวยการ",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "True",
    "updated_at": "2022-01-17 02:31:03",
    "created_at": "2022-01-17 02:30:59"
  },
  {
    "BOOK_ORG_ID": 2,
    "BOOK_ORG_NAME": "ที่ปรึกษาโรงพยาบาล",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "False",
    "updated_at": "2022-01-17 02:34:04",
    "created_at": "2022-01-17 02:31:25"
  },
  {
    "BOOK_ORG_ID": 3,
    "BOOK_ORG_NAME": "กลุ่มภารกิจอำนวยการ",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "True",
    "updated_at": "2022-01-17 02:31:43",
    "created_at": "2022-01-17 02:31:40"
  },
  {
    "BOOK_ORG_ID": 5,
    "BOOK_ORG_NAME": "งานธุรการ",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "True",
    "updated_at": "2022-01-17 02:31:00",
    "created_at": "2022-01-17 02:31:00"
  },
  {
    "BOOK_ORG_ID": 6,
    "BOOK_ORG_NAME": "งานซักฟอก",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "True",
    "updated_at": "2022-01-17 02:31:00",
    "created_at": "2022-01-17 02:31:00"
  },
  {
    "BOOK_ORG_ID": 7,
    "BOOK_ORG_NAME": "งานห้องประชุมและโอเปอร์เรเตอร์",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "True",
    "updated_at": "2022-01-17 02:31:00",
    "created_at": "2022-01-17 02:31:00"
  },
  {
    "BOOK_ORG_ID": 8,
    "BOOK_ORG_NAME": "งานยานพาหนะ",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "True",
    "updated_at": "2022-01-17 02:31:00",
    "created_at": "2022-01-17 02:31:00"
  },
  {
    "BOOK_ORG_ID": 9,
    "BOOK_ORG_NAME": "กลุ่มงานทรัพยากรบุคคล",
    "BOOK_ORG_PHONE": "",
    "BOOK_ORG_EMAIL": "",
    "BOOK_ORG_ADDRESS": "",
    "BOOK_ORG_WEBSITE": "",
    "ACTIVE": "True",
    "updated_at": "2022-01-17 02:31:00",
    "created_at": "2022-01-17 02:31:00"
  }
]
```
