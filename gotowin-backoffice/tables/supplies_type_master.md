# `supplies_type_master`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUP_TYPE_MASTER_ID | int | NO | PRI | NULL | auto_increment |  |
| SUP_TYPE_MASTER_NAME | varchar(100) | YES |  |  |  | ชื่อรายการกลุ่มพัสดุ |
| DETAIL | varchar(255) | YES |  |  |  | รายละเอียด |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SUP_TYPE_MASTER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "SUP_TYPE_MASTER_ID": 1,
    "SUP_TYPE_MASTER_NAME": "วัสดุ",
    "DETAIL": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_MASTER_ID": 2,
    "SUP_TYPE_MASTER_NAME": "ครุภัณฑ์",
    "DETAIL": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_MASTER_ID": 3,
    "SUP_TYPE_MASTER_NAME": "จ้างเหมา",
    "DETAIL": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_MASTER_ID": 4,
    "SUP_TYPE_MASTER_NAME": "ที่ดิน",
    "DETAIL": "",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_MASTER_ID": 5,
    "SUP_TYPE_MASTER_NAME": "สิ่งปลูกสร้าง",
    "DETAIL": "",
    "updated_at": null,
    "created_at": null
  }
]
```
