# `asset_type`

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
    "TYPE_NAME": "ที่ดินวิทยาเขตบางเขนแปลงใหญ่ (เขต 1,2,3,4,5) เนื้อ",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "01",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  },
  {
    "TYPE_ID": 2,
    "TYPE_NAME": "ที่ดินวิทยาเขตบางเขนแปลงใหญ่ (เขต 1,2,3,4,5) เนื้อ",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "010",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  },
  {
    "TYPE_ID": 3,
    "TYPE_NAME": "ที่ดิน/ซอยพหลโยธิน 45 (เขต 6) เนื้อที่ 97 ไร่",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "02",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  },
  {
    "TYPE_ID": 4,
    "TYPE_NAME": "ที่ดิน/ซอยพหลโยธิน 45 (เขต 6) เนื้อที่ 97 ไร่",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "020",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  },
  {
    "TYPE_ID": 5,
    "TYPE_NAME": "ที่ดิน/ซอยพหลโยธิน 43 (เขต7/1) 3 แปลง เนื้อที่ 5 ไ",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "03",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  },
  {
    "TYPE_ID": 6,
    "TYPE_NAME": "ที่ดิน/ซอยพหลโยธิน 43 (เขต7/1) 3 แปลง เนื้อที่ 5 ไ",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "030",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  },
  {
    "TYPE_ID": 7,
    "TYPE_NAME": "ที่ดิน/บริเวณคณะสัตวแพทย์ศาสตร์ (เขต7/2) เนื้อที่ ",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "04",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  },
  {
    "TYPE_ID": 8,
    "TYPE_NAME": "ที่ดิน/บริเวณคณะสัตวแพทย์ศาสตร์ (เขต7/2) เนื้อที่ ",
    "GROUP_CLASS_CODE": "0910",
    "GROUP_CODE": "09",
    "TYPE_CODE": "040",
    "CLASS_CODE": "10",
    "ACTIVE": "True"
  }
]
```
