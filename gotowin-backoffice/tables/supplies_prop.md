# `supplies_prop`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PROPOTIES_ID | int | NO | PRI | NULL | auto_increment |  |
| TYPE_ID | varchar(20) | YES |  |  |  |  |
| PROPOTIES_NAME | varchar(100) | YES |  |  |  |  |
| PROPOTIES_CODE | varchar(4) | YES |  |  |  |  |
| UNIT_NAME | varchar(255) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| GROUP_CLASS_CODE | varchar(4) | YES |  |  |  | รหัสกลุ่ม+คลาส 4 หลัก |
| TYPE_CODE | varchar(3) | YES |  |  |  | รหัสประเภทมี 3 หลัก เป็นรหัสช่องที่ 2 |
| GROUP_CODE | varchar(2) | YES |  |  |  | กลุ่มอ้างอิงกลุ่ม 2 หลักแรก |
| NUM | varchar(20) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PROPOTIES_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "PROPOTIES_ID": 1,
    "TYPE_ID": "2",
    "PROPOTIES_NAME": "เกย์ออกซิเจนชนิดติดหัวถัง",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "001",
    "GROUP_CODE": "00",
    "NUM": "0001-001-0001",
    "updated_at": null,
    "created_at": null
  },
  {
    "PROPOTIES_ID": 2,
    "TYPE_ID": "2",
    "PROPOTIES_NAME": "เกย์ออกซิเจนชนิดติดไปป์ไลน์",
    "PROPOTIES_CODE": "0002",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "001",
    "GROUP_CODE": "00",
    "NUM": "0001-001-0002",
    "updated_at": null,
    "created_at": null
  },
  {
    "PROPOTIES_ID": 3,
    "TYPE_ID": "3",
    "PROPOTIES_NAME": "เรคกูเลเตอร์ vacuum",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "002",
    "GROUP_CODE": "00",
    "NUM": "0001-002-0001",
    "updated_at": null,
    "created_at": null
  },
  {
    "PROPOTIES_ID": 4,
    "TYPE_ID": "4",
    "PROPOTIES_NAME": "หูฟังผู้ใหญ่",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "003",
    "GROUP_CODE": "00",
    "NUM": "0001-003-0001",
    "updated_at": null,
    "created_at": null
  },
  {
    "PROPOTIES_ID": 5,
    "TYPE_ID": "4",
    "PROPOTIES_NAME": "หูฟังเด็กโต",
    "PROPOTIES_CODE": "0002",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "003",
    "GROUP_CODE": "00",
    "NUM": "0001-003-0002",
    "updated_at": "2019-11-28 16:16:58",
    "created_at": null
  },
  {
    "PROPOTIES_ID": 6,
    "TYPE_ID": "4",
    "PROPOTIES_NAME": "หูฟังเด็กเล็ก",
    "PROPOTIES_CODE": "0003",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "003",
    "GROUP_CODE": "00",
    "NUM": "0001-003-0003",
    "updated_at": null,
    "created_at": null
  },
  {
    "PROPOTIES_ID": 7,
    "TYPE_ID": "5",
    "PROPOTIES_NAME": "สาย small air drill [ชุด]",
    "PROPOTIES_CODE": "0001",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "004",
    "GROUP_CODE": "00",
    "NUM": "0001-004-0001",
    "updated_at": null,
    "created_at": null
  },
  {
    "PROPOTIES_ID": 8,
    "TYPE_ID": "5",
    "PROPOTIES_NAME": "หัว small air drill [ชุด]",
    "PROPOTIES_CODE": "0002",
    "UNIT_NAME": null,
    "ACTIVE": "True",
    "GROUP_CLASS_CODE": "0001",
    "TYPE_CODE": "004",
    "GROUP_CODE": "00",
    "NUM": "0001-004-0002",
    "updated_at": null,
    "created_at": null
  }
]
```
