# `supplies_decline`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| DECLINE_ID | int | NO | PRI | NULL | auto_increment |  |
| DECLINE_NAME | varchar(100) | YES |  |  |  |  |
| OLD_YEAR | int | YES |  | NULL |  | อายุการใช้งาน ปี |
| DECLINE_PERSEN | decimal(10,2) | YES |  | NULL |  | อัตราค่าเสื่อมต่อปีร้อยละ |
| CODE_REF | varchar(10) | YES |  |  |  | รหัสอ้างอิง |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | DECLINE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "DECLINE_ID": 1,
    "DECLINE_NAME": "อาคารถาวร",
    "OLD_YEAR": 25,
    "DECLINE_PERSEN": "4.00",
    "CODE_REF": "1",
    "updated_at": null,
    "created_at": null
  },
  {
    "DECLINE_ID": 2,
    "DECLINE_NAME": "อาคารชั่วคราว/โรงเรือน",
    "OLD_YEAR": 10,
    "DECLINE_PERSEN": "10.00",
    "CODE_REF": "2",
    "updated_at": null,
    "created_at": null
  },
  {
    "DECLINE_ID": 3,
    "DECLINE_NAME": "สิ่งก่อสร้าง ใช้คอนกรีตเสริมเหล็กหรือโครงเหล็กเป็นส่วนประกอบหลัก",
    "OLD_YEAR": 15,
    "DECLINE_PERSEN": "6.66",
    "CODE_REF": "3.1",
    "updated_at": null,
    "created_at": null
  },
  {
    "DECLINE_ID": 4,
    "DECLINE_NAME": "สิ่งก่อสร้าง  ใช้ไม้หรือวัสดุอื่น ๆ เป็นส่วนประกอบหลัก",
    "OLD_YEAR": 5,
    "DECLINE_PERSEN": "20.00",
    "CODE_REF": "3.2",
    "updated_at": null,
    "created_at": null
  },
  {
    "DECLINE_ID": 5,
    "DECLINE_NAME": "ครุภัณฑ์สำนักงาน",
    "OLD_YEAR": 3,
    "DECLINE_PERSEN": "33.33",
    "CODE_REF": "4",
    "updated_at": null,
    "created_at": null
  },
  {
    "DECLINE_ID": 6,
    "DECLINE_NAME": "ครุภัณฑ์ยานพาหนะและขนส่ง",
    "OLD_YEAR": 5,
    "DECLINE_PERSEN": "20.00",
    "CODE_REF": "5",
    "updated_at": null,
    "created_at": null
  },
  {
    "DECLINE_ID": 7,
    "DECLINE_NAME": "ครุภัณฑ์ไฟฟ้าและวิทยุ ",
    "OLD_YEAR": 5,
    "DECLINE_PERSEN": "20.00",
    "CODE_REF": "6.1",
    "updated_at": null,
    "created_at": null
  },
  {
    "DECLINE_ID": 8,
    "DECLINE_NAME": "ครุภัณฑ์ไฟฟ้าและวิทยุ เครื่องกำเนิดไฟฟ้า",
    "OLD_YEAR": 15,
    "DECLINE_PERSEN": "6.50",
    "CODE_REF": "6.2",
    "updated_at": null,
    "created_at": null
  }
]
```
