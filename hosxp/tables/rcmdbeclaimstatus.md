# `rcmdbeclaimstatus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| Code | varchar(1) | NO | PRI |  |  |  |
| Name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | Code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "Code": "0",
    "Name": "ผ่านการตรวจสอบขั้นต้นรอส่ง E-Cliam"
  },
  {
    "Code": "1",
    "Name": "ส่งไปยัง สปสช."
  },
  {
    "Code": "2",
    "Name": "ไม่ผ่านการตรวจสอบขั้นต้น(C)"
  },
  {
    "Code": "3",
    "Name": "ไม่ผ่านการตรวจสอบจาก สปสช.(C)"
  },
  {
    "Code": "4",
    "Name": "ผ่านการตรวจสอบจาก สปสช.(A)"
  },
  {
    "Code": "5",
    "Name": "บันทึกไม่ผ่านการตรวจสอบที่แก้ไขแล้ว"
  },
  {
    "Code": "6",
    "Name": "บันทึกข้อมูลเก่าที่ขอแก้ไข e-Pac"
  },
  {
    "Code": "7",
    "Name": "บันทึกข้อมูลเก่าที่ขออุทธรณ์"
  }
]
```
