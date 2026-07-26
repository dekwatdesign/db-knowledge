# `operate_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPERATE_MEMBER_ID | int | NO | PRI | NULL | auto_increment |  |
| OPERATE_MEMBER_INDEX_ID | int | YES |  | NULL |  |  |
| OPERATE_MEMBER_PERSON_ID | int | YES |  | NULL |  |  |
| OPERATE_MEMBER_PERSON_NAME | varchar(255) | YES |  | NULL |  |  |
| OPERATE_MEMBER_POSITION_ID | int | YES |  | NULL |  |  |
| OPERATE_MEMBER_POSITION_NAME | varchar(255) | YES |  | NULL |  |  |
| OPERATE_MEMBER_ACTIVITY_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPERATE_MEMBER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "OPERATE_MEMBER_ID": 3,
    "OPERATE_MEMBER_INDEX_ID": 1,
    "OPERATE_MEMBER_PERSON_ID": 63,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 7,
    "OPERATE_MEMBER_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "OPERATE_MEMBER_ACTIVITY_ID": 7,
    "updated_at": "2022-05-09 04:38:21",
    "created_at": "2022-05-09 04:38:21"
  },
  {
    "OPERATE_MEMBER_ID": 4,
    "OPERATE_MEMBER_INDEX_ID": 1,
    "OPERATE_MEMBER_PERSON_ID": 64,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 7,
    "OPERATE_MEMBER_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "OPERATE_MEMBER_ACTIVITY_ID": 8,
    "updated_at": "2022-05-09 04:38:21",
    "created_at": "2022-05-09 04:38:21"
  },
  {
    "OPERATE_MEMBER_ID": 5,
    "OPERATE_MEMBER_INDEX_ID": 2,
    "OPERATE_MEMBER_PERSON_ID": 14,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 33,
    "OPERATE_MEMBER_POSITION_NAME": "เจ้าพนักงานโสตทัศนศึกษา",
    "OPERATE_MEMBER_ACTIVITY_ID": 15,
    "updated_at": "2022-10-03 02:44:11",
    "created_at": "2022-10-03 02:44:11"
  },
  {
    "OPERATE_MEMBER_ID": 6,
    "OPERATE_MEMBER_INDEX_ID": 3,
    "OPERATE_MEMBER_PERSON_ID": 42,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 38,
    "OPERATE_MEMBER_POSITION_NAME": "ช่างไฟฟ้า",
    "OPERATE_MEMBER_ACTIVITY_ID": 17,
    "updated_at": "2022-12-02 06:16:04",
    "created_at": "2022-12-02 06:16:04"
  },
  {
    "OPERATE_MEMBER_ID": 7,
    "OPERATE_MEMBER_INDEX_ID": 3,
    "OPERATE_MEMBER_PERSON_ID": 14,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 33,
    "OPERATE_MEMBER_POSITION_NAME": "เจ้าพนักงานโสตทัศนศึกษา",
    "OPERATE_MEMBER_ACTIVITY_ID": 18,
    "updated_at": "2022-12-02 06:16:04",
    "created_at": "2022-12-02 06:16:04"
  },
  {
    "OPERATE_MEMBER_ID": 8,
    "OPERATE_MEMBER_INDEX_ID": 4,
    "OPERATE_MEMBER_PERSON_ID": 17,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 41,
    "OPERATE_MEMBER_POSITION_NAME": "พนักงานบริการ",
    "OPERATE_MEMBER_ACTIVITY_ID": 25,
    "updated_at": "2024-12-27 06:44:45",
    "created_at": "2024-12-27 06:44:45"
  },
  {
    "OPERATE_MEMBER_ID": 9,
    "OPERATE_MEMBER_INDEX_ID": 4,
    "OPERATE_MEMBER_PERSON_ID": 19,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 41,
    "OPERATE_MEMBER_POSITION_NAME": "พนักงานบริการ",
    "OPERATE_MEMBER_ACTIVITY_ID": 26,
    "updated_at": "2024-12-27 06:44:45",
    "created_at": "2024-12-27 06:44:45"
  },
  {
    "OPERATE_MEMBER_ID": 10,
    "OPERATE_MEMBER_INDEX_ID": 4,
    "OPERATE_MEMBER_PERSON_ID": 20,
    "OPERATE_MEMBER_PERSON_NAME": "[MASKED_FULLNAME]",
    "OPERATE_MEMBER_POSITION_ID": 41,
    "OPERATE_MEMBER_POSITION_NAME": "พนักงานบริการ",
    "OPERATE_MEMBER_ACTIVITY_ID": 27,
    "updated_at": "2024-12-27 06:44:45",
    "created_at": "2024-12-27 06:44:45"
  }
]
```
