# `supplies_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUP_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| SUP_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| SUP_TYPE_MASTER_ID | varchar(10) | YES |  |  |  | ประเภทพัสดุ |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_SUPPLIES_TYPE_ID | SUP_TYPE_ID | no | 1 |
| PRIMARY | SUP_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "SUP_TYPE_ID": 1,
    "SUP_TYPE_NAME": "วัสดุสำนักงาน",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": "2019-09-14 06:53:55",
    "created_at": null
  },
  {
    "SUP_TYPE_ID": 2,
    "SUP_TYPE_NAME": "วัสดุไฟฟ้าและวิทยุ",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": "2019-09-14 08:58:24",
    "created_at": null
  },
  {
    "SUP_TYPE_ID": 3,
    "SUP_TYPE_NAME": "วัสดุงานบ้านงานครัว",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": "2019-09-14 08:58:24",
    "created_at": null
  },
  {
    "SUP_TYPE_ID": 4,
    "SUP_TYPE_NAME": "วัสดุก่อสร้างและประปา",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_ID": 5,
    "SUP_TYPE_NAME": "วัสดุยานพาหนะและขนส่ง",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_ID": 6,
    "SUP_TYPE_NAME": "วัสดุเชื้อเพลิงและหล่อลื่น",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_ID": 7,
    "SUP_TYPE_NAME": "วัสดุวิทยาศาสตร์หรือการแพทย์",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_ID": 8,
    "SUP_TYPE_NAME": "วัสดุการเกษตร",
    "ACTIVE": "True",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": null,
    "created_at": null
  }
]
```
