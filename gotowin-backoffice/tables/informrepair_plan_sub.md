# `informrepair_plan_sub`

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
    "REPAIR_PLAN_SUB_ID": 5,
    "REPAIR_PLAN_ID": 1,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้งโปรแกรมสำหรับวีดีโอคอล",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-08 17:10:55",
    "created_at": "2022-03-08 17:10:55",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 6,
    "REPAIR_PLAN_ID": 1,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้งโปรแกรมสำนักงาน",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-08 17:10:55",
    "created_at": "2022-03-08 17:10:55",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 7,
    "REPAIR_PLAN_ID": 1,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้ง Window 10",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-08 17:10:55",
    "created_at": "2022-03-08 17:10:55",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 8,
    "REPAIR_PLAN_ID": 1,
    "REPAIR_PLAN_SUB_NAME": "ซ่อมคอมพิวเตอร์ window เสีย",
    "REPAIR_PLAN_SUB_REMARK": "ต้องลง window ใหม่",
    "updated_at": "2022-03-08 17:10:55",
    "created_at": "2022-03-08 17:10:55",
    "REPAIR_PLAN_SUB_RESULT": "ผิดปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 9,
    "REPAIR_PLAN_ID": 2,
    "REPAIR_PLAN_SUB_NAME": "ซ่อมคอมพิวเตอร์ Window ชำรุด",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-10 09:00:27",
    "created_at": "2022-03-10 09:00:27",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 10,
    "REPAIR_PLAN_ID": 2,
    "REPAIR_PLAN_SUB_NAME": "ตรวจเช็คสภาพคอมพิวเตอร์",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-10 09:00:27",
    "created_at": "2022-03-10 09:00:27",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 11,
    "REPAIR_PLAN_ID": 2,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้ง Window 10",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-10 09:00:27",
    "created_at": "2022-03-10 09:00:27",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  },
  {
    "REPAIR_PLAN_SUB_ID": 12,
    "REPAIR_PLAN_ID": 2,
    "REPAIR_PLAN_SUB_NAME": "ติดตั้งโปรแกรม Hosxp",
    "REPAIR_PLAN_SUB_REMARK": null,
    "updated_at": "2022-03-10 09:00:27",
    "created_at": "2022-03-10 09:00:27",
    "REPAIR_PLAN_SUB_RESULT": "ปกติ"
  }
]
```
