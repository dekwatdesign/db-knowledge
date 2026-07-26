# `supplies_type_kind`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUP_TYPE_KIND_ID | int | NO | PRI | NULL | auto_increment |  |
| SUP_TYPE_KIND_NAME | varchar(100) | YES |  |  |  | ชื่อประเภทพัสดุ |
| SUP_TYPE_KIND_DETAIL | varchar(255) | YES |  |  |  | รายละเอียด |
| SUP_TYPE_MASTER_ID | varchar(10) | YES |  |  |  | รหัสอ้างอึงประเภทพัสดุ |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SUP_TYPE_KIND_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "SUP_TYPE_KIND_ID": 1,
    "SUP_TYPE_KIND_NAME": "วัสดุสิ้นเปลือง",
    "SUP_TYPE_KIND_DETAIL": "ใช้แล้วหมดไป",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_KIND_ID": 2,
    "SUP_TYPE_KIND_NAME": "วัสดุคงทนถาวร",
    "SUP_TYPE_KIND_DETAIL": "สิ่งของที่มีลักษณะคงทนถาวรและมีอายุการใช้งาน 1 ปี ขึ้นไป ",
    "SUP_TYPE_MASTER_ID": "1",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_KIND_ID": 3,
    "SUP_TYPE_KIND_NAME": "ครุภัณฑ์",
    "SUP_TYPE_KIND_DETAIL": null,
    "SUP_TYPE_MASTER_ID": "2",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_KIND_ID": 4,
    "SUP_TYPE_KIND_NAME": "บริการ",
    "SUP_TYPE_KIND_DETAIL": null,
    "SUP_TYPE_MASTER_ID": "3",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_KIND_ID": 5,
    "SUP_TYPE_KIND_NAME": "อาคาร / สิ่งปลูกสร้าง",
    "SUP_TYPE_KIND_DETAIL": null,
    "SUP_TYPE_MASTER_ID": "5",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_KIND_ID": 6,
    "SUP_TYPE_KIND_NAME": "ที่ดิน",
    "SUP_TYPE_KIND_DETAIL": null,
    "SUP_TYPE_MASTER_ID": "4",
    "updated_at": null,
    "created_at": null
  }
]
```
