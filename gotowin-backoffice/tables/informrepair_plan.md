# `informrepair_plan`

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
    "REPAIR_PLAN_ARTICLE_ID": 2288,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0004/0050",
    "REPAIR_PLAN_DATE": "2022-03-08",
    "REPAIR_PLAN_BEGIN_TIME": "12:30:00",
    "REPAIR_PLAN_END_TIME": "16:30:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 64,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-03-08 17:10:55",
    "created_at": "2022-03-08 17:10:24",
    "REPAIR_LEADER_CHECK_ID": 53,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ผิดปกติ",
    "REPAIR_TYPE_CHECK": "notplan"
  },
  {
    "REPAIR_PLAN_ID": 2,
    "REPAIR_PLAN_ARTICLE_ID": 2264,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0004/0025",
    "REPAIR_PLAN_DATE": "2022-03-10",
    "REPAIR_PLAN_BEGIN_TIME": "8:30:00",
    "REPAIR_PLAN_END_TIME": "16:30:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 64,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-03-10 09:00:27",
    "created_at": "2022-03-10 09:00:27",
    "REPAIR_LEADER_CHECK_ID": 53,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ปกติ",
    "REPAIR_TYPE_CHECK": "notplan"
  },
  {
    "REPAIR_PLAN_ID": 3,
    "REPAIR_PLAN_ARTICLE_ID": 2242,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0008/0021",
    "REPAIR_PLAN_DATE": "2022-11-04",
    "REPAIR_PLAN_BEGIN_TIME": "15:00:00",
    "REPAIR_PLAN_END_TIME": "16:00:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 63,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-11-08 11:21:27",
    "created_at": "2022-11-08 11:21:27",
    "REPAIR_LEADER_CHECK_ID": 53,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ปกติ",
    "REPAIR_TYPE_CHECK": "notplan"
  },
  {
    "REPAIR_PLAN_ID": 4,
    "REPAIR_PLAN_ARTICLE_ID": 2224,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0008/0003",
    "REPAIR_PLAN_DATE": "2023-02-03",
    "REPAIR_PLAN_BEGIN_TIME": "10:10:00",
    "REPAIR_PLAN_END_TIME": "10:30:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2023-02-03 10:15:44",
    "created_at": "2023-02-03 10:15:44",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  },
  {
    "REPAIR_PLAN_ID": 5,
    "REPAIR_PLAN_ARTICLE_ID": 2229,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0008/0008",
    "REPAIR_PLAN_DATE": "2023-02-03",
    "REPAIR_PLAN_BEGIN_TIME": "10:30:00",
    "REPAIR_PLAN_END_TIME": "10:40:00",
    "REPAIR_PLAN_REMARK": "ตรวจสอบสภาพประจำปี",
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2023-02-03 10:37:12",
    "created_at": "2023-02-03 10:37:12",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  },
  {
    "REPAIR_PLAN_ID": 6,
    "REPAIR_PLAN_ARTICLE_ID": 2247,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0008/0026",
    "REPAIR_PLAN_DATE": "2023-02-08",
    "REPAIR_PLAN_BEGIN_TIME": "14:00:00",
    "REPAIR_PLAN_END_TIME": "14:30:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": 64,
    "REPAIR_PESON_CHECK_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2023-02-08 14:33:30",
    "created_at": "2023-02-08 14:33:07",
    "REPAIR_LEADER_CHECK_ID": 53,
    "REPAIR_LEADER_CHECK_NAME": "[MASKED_FULLNAME]",
    "REPAIR_RESULT": "ปกติ",
    "REPAIR_TYPE_CHECK": "plan"
  },
  {
    "REPAIR_PLAN_ID": 7,
    "REPAIR_PLAN_ARTICLE_ID": 2238,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0008/0017",
    "REPAIR_PLAN_DATE": "2023-02-10",
    "REPAIR_PLAN_BEGIN_TIME": "10:30:00",
    "REPAIR_PLAN_END_TIME": "10:40:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2023-02-10 14:25:50",
    "created_at": "2023-02-10 14:25:50",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  },
  {
    "REPAIR_PLAN_ID": 8,
    "REPAIR_PLAN_ARTICLE_ID": 2239,
    "REPAIR_PLAN_ARTICLE_NUM": "A63-7440-001-0008/0018",
    "REPAIR_PLAN_DATE": "2023-02-10",
    "REPAIR_PLAN_BEGIN_TIME": "10:40:00",
    "REPAIR_PLAN_END_TIME": "10:50:00",
    "REPAIR_PLAN_REMARK": null,
    "REPAIR_PESON_CHECK_ID": null,
    "REPAIR_PESON_CHECK_NAME": null,
    "updated_at": "2023-02-10 14:27:27",
    "created_at": "2023-02-10 14:27:27",
    "REPAIR_LEADER_CHECK_ID": null,
    "REPAIR_LEADER_CHECK_NAME": null,
    "REPAIR_RESULT": null,
    "REPAIR_TYPE_CHECK": "plan"
  }
]
```
