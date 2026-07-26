# `supplies_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| GROUP_CODE | varchar(2) | NO | PRI |  |  | รหัสสองหลักแรกของเลขครุภัณฑ์ |
| GROUP_NAME | varchar(60) | YES | UNI |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_GROUP_CODE | GROUP_CODE | yes | 1 |
| IX_GROUP_NAME | GROUP_NAME | yes | 1 |
| PRIMARY | GROUP_CODE | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "GROUP_CODE": "00",
    "GROUP_NAME": "วัสดุที่ไม่ใช่ครุภัณฑ์",
    "ACTIVE": "True",
    "updated_at": "2019-12-22 09:54:39",
    "created_at": null
  },
  {
    "GROUP_CODE": "04",
    "GROUP_NAME": "ครุภัณฑ์สำนักงาน",
    "ACTIVE": "True",
    "updated_at": "2019-11-28 14:19:21",
    "created_at": null
  },
  {
    "GROUP_CODE": "10",
    "GROUP_NAME": "อาวุธ",
    "ACTIVE": "False",
    "updated_at": "2020-09-23 15:34:30",
    "created_at": null
  },
  {
    "GROUP_CODE": "11",
    "GROUP_NAME": "สรรพาวุธนิวเคลียร์",
    "ACTIVE": "False",
    "updated_at": "2020-09-23 15:34:33",
    "created_at": null
  },
  {
    "GROUP_CODE": "12",
    "GROUP_NAME": "อุปกรณ์ควบคุมการยิง",
    "ACTIVE": "False",
    "updated_at": "2020-09-23 15:34:36",
    "created_at": null
  },
  {
    "GROUP_CODE": "13",
    "GROUP_NAME": "กระสุนและวัตถุระเบิด",
    "ACTIVE": "False",
    "updated_at": "2020-09-23 15:34:38",
    "created_at": null
  },
  {
    "GROUP_CODE": "14",
    "GROUP_NAME": "อาวุธนำวิถี",
    "ACTIVE": "False",
    "updated_at": "2020-09-23 15:34:40",
    "created_at": null
  },
  {
    "GROUP_CODE": "15",
    "GROUP_NAME": "อากาศยานและองค์ประกอบโครงสร้าง",
    "ACTIVE": "False",
    "updated_at": "2020-09-23 15:34:41",
    "created_at": null
  }
]
```
