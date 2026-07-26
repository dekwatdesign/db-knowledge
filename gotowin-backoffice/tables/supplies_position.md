# `supplies_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| POSITION_ID | int | NO | PRI | NULL | auto_increment |  |
| POSITION_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_ID | POSITION_ID | no | 1 |
| PRIMARY | POSITION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "POSITION_ID": 1,
    "POSITION_NAME": "ประธานกรรมการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "POSITION_ID": 2,
    "POSITION_NAME": "กรรมการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "POSITION_ID": 3,
    "POSITION_NAME": "กรรมการและเลขานุการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "POSITION_ID": 4,
    "POSITION_NAME": "เลขานุการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "POSITION_ID": 5,
    "POSITION_NAME": "ผู้ควบคุมงาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "POSITION_ID": 6,
    "POSITION_NAME": "ผู้ตรวจรับพัสดุหรืองานจ้าง",
    "updated_at": null,
    "created_at": null
  }
]
```
