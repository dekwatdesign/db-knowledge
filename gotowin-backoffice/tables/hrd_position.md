# `hrd_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_POSITION_ID | int | NO | PRI | NULL |  |  |
| HR_POSITION_NAME | varchar(100) | YES |  |  |  |  |
| POSITION_SP_ID | varchar(10) | YES |  |  |  | เชื่อมตำแห่งสป. |
| HR_POSITION_CHECK_HOLIDAY | enum('True','False') | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_POSITION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_POSITION_ID": 1,
    "HR_POSITION_NAME": "ผู้อำนวยการ",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": "2019-09-04 08:28:12",
    "created_at": null
  },
  {
    "HR_POSITION_ID": 2,
    "HR_POSITION_NAME": "ผู้อำนวยการเฉพาะด้าน(ระบุชื่อสายงาน)",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": "2022-02-24 13:08:38",
    "created_at": null
  },
  {
    "HR_POSITION_ID": 3,
    "HR_POSITION_NAME": "นักจัดการงานทั่วไป",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_POSITION_ID": 4,
    "HR_POSITION_NAME": "นักทรัพยากรบุคคล",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_POSITION_ID": 5,
    "HR_POSITION_NAME": "นักวิเคราะห์นโยบายและแผน",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_POSITION_ID": 7,
    "HR_POSITION_NAME": "นักวิชาการคอมพิวเตอร์",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_POSITION_ID": 6,
    "HR_POSITION_NAME": "นักวิชาการพัสดุ",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_POSITION_ID": 8,
    "HR_POSITION_NAME": "นักวิชาการสถิติ",
    "POSITION_SP_ID": "",
    "HR_POSITION_CHECK_HOLIDAY": "True",
    "updated_at": null,
    "created_at": null
  }
]
```
