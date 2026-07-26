# `informcom_plan_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIR_PLAN_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_PLAN_ID | int | YES |  | NULL |  |  |
| REPAIR_PLAN_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| REPAIR_PLAN_SUB_REMARK | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| REPAIR_PLAN_SUB_RESULT | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIR_PLAN_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "REPAIR_PLAN_SUB_ID": 1,
    "REPAIR_PLAN_ID": 1,
    "REPAIR_PLAN_SUB_NAME": null,
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2021-02-05 15:50:16",
    "created_at": "2021-02-05 15:50:16",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 2,
    "REPAIR_PLAN_ID": 2,
    "REPAIR_PLAN_SUB_NAME": "12345",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2021-11-25 15:44:49",
    "created_at": "2021-11-25 15:44:49",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 3,
    "REPAIR_PLAN_ID": 3,
    "REPAIR_PLAN_SUB_NAME": "เปลี่ยนฮารด์ดิสใหม่",
    "REPAIR_PLAN_SUB_REMARK": "ฮารด์ดิสเสีย",
    "updated_at": "2022-03-23 11:25:48",
    "created_at": "2022-03-23 11:25:48",
    "REPAIR_PLAN_SUB_RESULT": null
  },
  {
    "REPAIR_PLAN_SUB_ID": 4,
    "REPAIR_PLAN_ID": 3,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้ง window 10",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-23 11:25:48",
    "created_at": "2022-03-23 11:25:48",
    "REPAIR_PLAN_SUB_RESULT": null
  },
  {
    "REPAIR_PLAN_SUB_ID": 5,
    "REPAIR_PLAN_ID": 3,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้ง โปรแกรมสำนักงาน",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-23 11:25:48",
    "created_at": "2022-03-23 11:25:48",
    "REPAIR_PLAN_SUB_RESULT": null
  },
  {
    "REPAIR_PLAN_SUB_ID": 6,
    "REPAIR_PLAN_ID": 3,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้งโปรแกรม Hosxp",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-23 11:25:48",
    "created_at": "2022-03-23 11:25:48",
    "REPAIR_PLAN_SUB_RESULT": null
  },
  {
    "REPAIR_PLAN_SUB_ID": 7,
    "REPAIR_PLAN_ID": 3,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้งไดร์เวอร์ ปรินท์เตอร์",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-23 11:25:48",
    "created_at": "2022-03-23 11:25:48",
    "REPAIR_PLAN_SUB_RESULT": null
  },
  {
    "REPAIR_PLAN_SUB_ID": 8,
    "REPAIR_PLAN_ID": 4,
    "REPAIR_PLAN_SUB_NAME": "เปลี่ยน window 11 เป็น window 10",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-04-12 16:25:39",
    "created_at": "2022-04-12 16:25:39",
    "REPAIR_PLAN_SUB_RESULT": null
  }
]
```
