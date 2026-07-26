# `informcom_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIR_PLAN_ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_PLAN_ARTICLE_ID | int | YES |  | NULL |  |  |
| REPAIR_PLAN_ARTICLE_NUM | varchar(100) | YES |  | NULL |  |  |
| REPAIR_PLAN_DATE | date | YES |  | NULL |  |  |
| REPAIR_PLAN_BEGIN_TIME | time | YES |  | NULL |  |  |
| REPAIR_PLAN_END_TIME | time | YES |  | NULL |  |  |
| REPAIR_PLAN_REMARK | varchar(255) | YES |  | NULL |  |  |
| REPAIR_PESON_CHECK_ID | int | YES |  | NULL |  |  |
| REPAIR_PESON_CHECK_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| REPAIR_LEADER_CHECK_ID | int | YES |  | NULL |  |  |
| REPAIR_LEADER_CHECK_NAME | varchar(255) | YES |  | NULL |  |  |
| REPAIR_RESULT | varchar(255) | YES |  | NULL |  |  |
| REPAIR_TYPE_CHECK | enum('plan','notplan') | YES |  | plan |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIR_PLAN_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "REPAIR_PLAN_ID": 1,
    "REPAIR_PLAN_ARTICLE_ID": 9,
    "REPAIR_PLAN_ARTICLE_NUM": "A58-7440-011-0001/0002",
    "REPAIR_PLAN_DATE": "2021-02-05",
    "REPAIR_PLAN_BEGIN_TIME": "14:00:00",
    "REPAIR_PLAN_END_TIME": "14:30:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 63,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2021-02-05 15:50:16",
    "created_at": "2021-02-05 15:50:16",
    "REPAIR_LEADER_CHECK_ID": 1,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ปกติ",
    "REPAIR_TYPE_CHECK": "notplan"
  },
  {
    "REPAIR_PLAN_ID": 2,
    "REPAIR_PLAN_ARTICLE_ID": 4,
    "REPAIR_PLAN_ARTICLE_NUM": "A54-7440-001-0001/0004",
    "REPAIR_PLAN_DATE": "2021-11-24",
    "REPAIR_PLAN_BEGIN_TIME": "9:30:00",
    "REPAIR_PLAN_END_TIME": "10:00:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 63,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2021-11-25 15:44:49",
    "created_at": "2021-11-25 15:44:49",
    "REPAIR_LEADER_CHECK_ID": 1,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ปกติ",
    "REPAIR_TYPE_CHECK": "notplan"
  },
  {
    "REPAIR_PLAN_ID": 3,
    "REPAIR_PLAN_ARTICLE_ID": 2268,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0004/0029",
    "REPAIR_PLAN_DATE": "2022-03-23",
    "REPAIR_PLAN_BEGIN_TIME": "9:00:00",
    "REPAIR_PLAN_END_TIME": "16:30:00",
    "REPAIR_PLAN_REMARK": "เนื่องจากฮารด์เสีย ทำให้ต้องติดตั้ง window กับโปรแกรมใหม่",
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2022-03-23 11:25:48",
    "created_at": "2022-03-23 11:25:48",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  },
  {
    "REPAIR_PLAN_ID": 4,
    "REPAIR_PLAN_ARTICLE_ID": 2283,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0004/0044",
    "REPAIR_PLAN_DATE": "2022-04-12",
    "REPAIR_PLAN_BEGIN_TIME": "9:00:00",
    "REPAIR_PLAN_END_TIME": "16:30:00",
    "REPAIR_PLAN_REMARK": "เนื่องจากตัวคอมพิวเตอร์มีการอัพเดตวินโดวเป็น 11 ทำให้ไม่สามารถใช้งานโปรแกรม Hosxp ได้",
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2022-04-12 16:25:39",
    "created_at": "2022-04-12 16:25:39",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  },
  {
    "REPAIR_PLAN_ID": 5,
    "REPAIR_PLAN_ARTICLE_ID": 1876,
    "REPAIR_PLAN_ARTICLE_NUM": "A62-7440-001-0005/0023",
    "REPAIR_PLAN_DATE": "2022-08-16",
    "REPAIR_PLAN_BEGIN_TIME": "11:30:00",
    "REPAIR_PLAN_END_TIME": "16:30:00",
    "REPAIR_PLAN_REMARK": "เนื่องจาก ตรวจสอบเบื้องต้นพบว่า Power supply เกิดระเบิดขณะ ทดลองเปลี่ยนสายไฟต่อเข้าเครื่อง",
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2022-08-16 11:57:55",
    "created_at": "2022-08-16 11:57:55",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  },
  {
    "REPAIR_PLAN_ID": 6,
    "REPAIR_PLAN_ARTICLE_ID": 2242,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0008/0021",
    "REPAIR_PLAN_DATE": "2022-11-04",
    "REPAIR_PLAN_BEGIN_TIME": "15:00:00",
    "REPAIR_PLAN_END_TIME": "16:00:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 63,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-11-08 11:38:26",
    "created_at": "2022-11-08 11:38:26",
    "REPAIR_LEADER_CHECK_ID": 53,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ปกติ",
    "REPAIR_TYPE_CHECK": "notplan"
  },
  {
    "REPAIR_PLAN_ID": 7,
    "REPAIR_PLAN_ARTICLE_ID": 2263,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0004/0024",
    "REPAIR_PLAN_DATE": "2022-11-29",
    "REPAIR_PLAN_BEGIN_TIME": "9:00:00",
    "REPAIR_PLAN_END_TIME": "16:00:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 64,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-11-30 17:03:17",
    "created_at": "2022-11-30 17:03:17",
    "REPAIR_LEADER_CHECK_ID": 53,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ปกติ",
    "REPAIR_TYPE_CHECK": "notplan"
  },
  {
    "REPAIR_PLAN_ID": 8,
    "REPAIR_PLAN_ARTICLE_ID": 2302,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-026-0001/0024",
    "REPAIR_PLAN_DATE": "2022-11-29",
    "REPAIR_PLAN_BEGIN_TIME": "9:30:00",
    "REPAIR_PLAN_END_TIME": "16:30:00",
    "REPAIR_PLAN_REMARK": "เนื่องจากคอมพิวเตอร์ขึ้น windows repair",
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2022-11-30 17:04:57",
    "created_at": "2022-11-30 17:04:57",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  }
]
```
