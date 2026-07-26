# `supplies_types`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| TYPE_NAME | varchar(50) | YES |  |  |  |  |
| GROUP_CLASS_CODE | varchar(4) | YES |  |  |  | รหัสกลุ่ม+คลาส 4 หลัก |
| GROUP_CODE | varchar(2) | YES |  |  |  | กลุ่มอ้างอิงกลุ่ม 2 หลักแรก |
| TYPE_CODE | varchar(3) | YES |  |  |  | รหัสประเภทมี 3 หลัก เป็นรหัสช่องที่ 2 |
| CLASS_CODE | varchar(10) | YES |  |  |  | อ้างอิงตาราง ar_class field CLASS_ID |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "TYPE_ID": 1,
    "TYPE_NAME": "วัสดุทางการแพทย์อื่นๆ",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "000",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": "2019-11-28 14:39:30",
    "created_at": null
  },
  {
    "TYPE_ID": 2,
    "TYPE_NAME": "โฟลมิเตอร์",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "001",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TYPE_ID": 3,
    "TYPE_NAME": "เรคกูเลเตอร์ แวคคูอัม",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "002",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": "2019-11-28 15:31:26",
    "created_at": null
  },
  {
    "TYPE_ID": 4,
    "TYPE_NAME": "หูฟัง",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "003",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TYPE_ID": 5,
    "TYPE_NAME": "air drill",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "004",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TYPE_ID": 6,
    "TYPE_NAME": "probe(โพรบต่างๆ)",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "005",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TYPE_ID": 7,
    "TYPE_NAME": "หัว suction",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "006",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "TYPE_ID": 8,
    "TYPE_NAME": "foot switch",
    "GROUP_CLASS_CODE": "0001",
    "GROUP_CODE": "00",
    "TYPE_CODE": "007",
    "CLASS_CODE": "01",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  }
]
```
