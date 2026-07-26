# `supplies_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| CLASS_CODE | varchar(2) | YES |  |  |  | รหัสประเภทมี 2 หลัก หลักของเลขกลุ่มแรก. |
| GROUP_CODE | varchar(2) | YES |  |  |  | อ้างอิงว่าอยู่กลุ่มไหน |
| CLASS_NAME | varchar(50) | YES |  |  |  |  |
| GROUP_CLASS_CODE | varchar(4) | YES | UNI |  |  | รหัสรวมระหว่าง group กับ class 4 หลัก |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_GROUP_CLASS_CODE | GROUP_CLASS_CODE | yes | 1 |
| IX_ID | ID | no | 1 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "CLASS_CODE": "01",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุทางการแพทย์",
    "GROUP_CLASS_CODE": "0001",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 2,
    "CLASS_CODE": "02",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุไฟฟ้า",
    "GROUP_CLASS_CODE": "0002",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 3,
    "CLASS_CODE": "03",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุประปา",
    "GROUP_CLASS_CODE": "0003",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 4,
    "CLASS_CODE": "04",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุสุขภัณฑ์",
    "GROUP_CLASS_CODE": "0004",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 5,
    "CLASS_CODE": "05",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุก่อสร้าง",
    "GROUP_CLASS_CODE": "0005",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 6,
    "CLASS_CODE": "06",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุสำนักงาน",
    "GROUP_CLASS_CODE": "0006",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 7,
    "CLASS_CODE": "00",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุอื่นๆทั่วไป",
    "GROUP_CLASS_CODE": "0000",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "ID": 8,
    "CLASS_CODE": "07",
    "GROUP_CODE": "00",
    "CLASS_NAME": "วัสดุอุปกรณ์สื่อสาร",
    "GROUP_CLASS_CODE": "0007",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  }
]
```
