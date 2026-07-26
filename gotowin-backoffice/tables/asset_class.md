# `asset_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| CLASS_CODE | varchar(2) | YES |  |  |  | รหัสประเภทมี 2 หลัก หลักของเลขกลุ่มแรก. |
| GROUP_CODE | varchar(2) | YES |  |  |  | อ้างอิงว่าอยู่กลุ่มไหน |
| CLASS_NAME | varchar(50) | YES |  |  |  |  |
| GROUP_CLASS_CODE | varchar(4) | YES |  |  |  | รหัสรวมระหว่าง group กับ class 4 หลัก |
| ACTIVE | enum('True','False') | YES |  | True |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "CLASS_CODE": "10",
    "GROUP_CODE": "09",
    "CLASS_NAME": "ที่ดินวิทยาเขตบางเขน",
    "GROUP_CLASS_CODE": "0910",
    "ACTIVE": "True"
  },
  {
    "ID": 2,
    "CLASS_CODE": "20",
    "GROUP_CODE": "09",
    "CLASS_NAME": "อาคารถาวร",
    "GROUP_CLASS_CODE": "0920",
    "ACTIVE": "True"
  },
  {
    "ID": 3,
    "CLASS_CODE": "05",
    "GROUP_CODE": "10",
    "CLASS_NAME": "ปืนพกอัตโนมัติขนาดต่าง ๆ",
    "GROUP_CLASS_CODE": "1005",
    "ACTIVE": "True"
  },
  {
    "ID": 4,
    "CLASS_CODE": "10",
    "GROUP_CODE": "10",
    "CLASS_NAME": "เครื่องยิงลูกระเบิด",
    "GROUP_CLASS_CODE": "1010",
    "ACTIVE": "True"
  },
  {
    "ID": 5,
    "CLASS_CODE": "15",
    "GROUP_CODE": "10",
    "CLASS_NAME": "เครื่องยิงลูกระเบิด",
    "GROUP_CLASS_CODE": "1015",
    "ACTIVE": "True"
  },
  {
    "ID": 6,
    "CLASS_CODE": "20",
    "GROUP_CODE": "10",
    "CLASS_NAME": "ปืนใหญ่วิถีโค้งขนาดกลาง ลากจูง",
    "GROUP_CLASS_CODE": "1020",
    "ACTIVE": "True"
  },
  {
    "ID": 7,
    "CLASS_CODE": "25",
    "GROUP_CODE": "10",
    "CLASS_NAME": "ปืนใหญ่กระสุนวิถีราบ",
    "GROUP_CLASS_CODE": "1025",
    "ACTIVE": "True"
  },
  {
    "ID": 8,
    "CLASS_CODE": "30",
    "GROUP_CODE": "10",
    "CLASS_NAME": "ปืนใหญ่กระสุนวิถีราบ",
    "GROUP_CLASS_CODE": "1030",
    "ACTIVE": "True"
  }
]
```
