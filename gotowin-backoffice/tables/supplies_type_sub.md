# `supplies_type_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUP_TYPE_SUP_ID | int | NO | PRI | NULL | auto_increment |  |
| SUP_TYPE_SUP_NAME | varchar(150) | YES |  |  |  | ประเภทย่อยวัสดุ |
| SUP_TYPE_ID | varchar(10) | YES | MUL |  |  | รหัสอ้างอิงประเภท |
| ACTIVE | enum('True','False') | YES |  | True |  | สถานะเปิดใช้ |
| SUP_TYPE_KIND_ID | varchar(10) | YES |  |  |  | รหัสอ้างอิงชนิด |
| SUP_TYPE_SUP_CODE | varchar(10) | YES | MUL |  |  | รหัสอ้างอิง |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_SUPPLIES_TYPE_ID | SUP_TYPE_ID | no | 1 |
| IX_SUPPLIES_TYPE_SUB_CODE | SUP_TYPE_SUP_CODE | no | 1 |
| IX_SUPPLIES_TYPE_SUB_ID | SUP_TYPE_SUP_ID | no | 1 |
| PRIMARY | SUP_TYPE_SUP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "SUP_TYPE_SUP_ID": 22,
    "SUP_TYPE_SUP_NAME": "ดินสอ",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_SUP_ID": 23,
    "SUP_TYPE_SUP_NAME": "ยางลบ",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_SUP_ID": 24,
    "SUP_TYPE_SUP_NAME": "เข็มหมุด",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_SUP_ID": 25,
    "SUP_TYPE_SUP_NAME": "กระดาษไข",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_SUP_ID": 26,
    "SUP_TYPE_SUP_NAME": "กาว",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_SUP_ID": 27,
    "SUP_TYPE_SUP_NAME": "แบบพิมพ์",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_SUP_ID": 28,
    "SUP_TYPE_SUP_NAME": "แปรงลบกระดาน",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_TYPE_SUP_ID": 29,
    "SUP_TYPE_SUP_NAME": "น้ำดื่ม",
    "SUP_TYPE_ID": "1",
    "ACTIVE": "True",
    "SUP_TYPE_KIND_ID": "1",
    "SUP_TYPE_SUP_CODE": null,
    "updated_at": null,
    "created_at": null
  }
]
```
