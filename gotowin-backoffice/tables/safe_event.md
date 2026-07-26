# `safe_event`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SAFE_EVENT_ID | int | NO | PRI | NULL | auto_increment |  |
| SAFE_EVENT_NAME | varchar(255) | YES |  | NULL |  |  |
| UPDATED_AT | datetime | YES |  | NULL |  |  |
| CREATED_AT | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SAFE_EVENT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "SAFE_EVENT_ID": 1,
    "SAFE_EVENT_NAME": "อุบัติเหตุจราจร",
    "UPDATED_AT": "2019-09-13 12:51:45",
    "CREATED_AT": null
  },
  {
    "SAFE_EVENT_ID": 3,
    "SAFE_EVENT_NAME": "เหตุทะเลาะวิวาท ทำร้ายร่ากาย",
    "UPDATED_AT": "2019-09-13 12:53:26",
    "CREATED_AT": "2019-09-11 17:41:59"
  },
  {
    "SAFE_EVENT_ID": 4,
    "SAFE_EVENT_NAME": "ทรัพย์สินสูญหาย โจรกรรม",
    "UPDATED_AT": "2019-09-13 12:52:26",
    "CREATED_AT": "2019-09-11 17:42:27"
  },
  {
    "SAFE_EVENT_ID": 7,
    "SAFE_EVENT_NAME": "ระบบไฟฟ้า",
    "UPDATED_AT": "2019-09-13 12:52:51",
    "CREATED_AT": "2019-09-12 20:28:52"
  },
  {
    "SAFE_EVENT_ID": 8,
    "SAFE_EVENT_NAME": "ระบบประปา",
    "UPDATED_AT": "2019-09-13 12:53:01",
    "CREATED_AT": "2019-09-13 10:34:54"
  },
  {
    "SAFE_EVENT_ID": 9,
    "SAFE_EVENT_NAME": "อื่นๆ",
    "UPDATED_AT": "2019-09-13 12:54:07",
    "CREATED_AT": "2019-09-13 10:35:06"
  }
]
```
