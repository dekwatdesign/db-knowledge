# `sql4rcm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | varchar(50) | YES |  | NULL |  |  |
| MainName | varchar(100) | NO | PRI |  |  |  |
| SubName | varchar(100) | NO | PRI |  |  |  |
| Name | varchar(100) | YES |  | NULL |  |  |
| Detail | varchar(200) | YES |  | NULL |  |  |
| Type | varchar(100) | YES |  | NULL |  |  |
| Action | varchar(60) | YES |  | NULL |  |  |
| cmd | mediumtext | YES |  | NULL |  |  |
| Title | text | YES |  | NULL |  |  |
| Flag | varchar(1) | YES |  | NULL |  |  |
| Active | varchar(1) | YES |  | Y |  |  |
| Color | text | YES |  | NULL |  |  |
| Enabled | varchar(1) | YES |  | Y |  |  |
| LastDate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MainName | yes | 1 |
| PRIMARY | SubName | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": "01000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU01",
    "Name": "",
    "Detail": "1.ตั้งค่า Mapping ก่อนการใช้งาน",
    "Type": "MENU",
    "Action": "SCRIPT",
    "cmd": "",
    "Title": "",
    "Flag": "N",
    "Active": "Y",
    "Color": "RGB(192,150,25)",
    "Enabled": "N",
    "LastDate": "2024-03-23 22:37:29"
  },
  {
    "ID": "02000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU02",
    "Name": "",
    "Detail": "2.ข้อมูลลูกหนี้การบริการ",
    "Type": "MENU",
    "Action": "SCRIPT",
    "cmd": "",
    "Title": "",
    "Flag": "N",
    "Active": "Y",
    "Color": "RGB(192,150,25)",
    "Enabled": "Y",
    "LastDate": "2024-03-19 05:12:32"
  },
  {
    "ID": "03000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU03",
    "Name": "",
    "Detail": "3.โปรแกรมนำเข้าไฟล์ตอบกลับตามสิทธิต่างๆ",
    "Type": "MENU",
    "Action": "SCRIPT",
    "cmd": "",
    "Title": "",
    "Flag": "N",
    "Active": "Y",
    "Color": "RGB(192,150,25)",
    "Enabled": "Y",
    "LastDate": "2024-03-19 05:12:54"
  },
  {
    "ID": "04000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU04",
    "Name": "",
    "Detail": "4.โปรแกรมส่งช้อมูลเบิกชดเชยกองทุนต่างๆ",
    "Type": "MENU",
    "Action": "SCRIPT",
    "cmd": "",
    "Title": "",
    "Flag": "Y",
    "Active": null,
    "Color": "RGB(192,150,25)",
    "Enabled": "Y",
    "LastDate": null
  },
  {
    "ID": "05000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU05",
    "Name": "",
    "Detail": "5.ข้อมูลรายงานการนำเข้าไฟล์ ตอบกลับและชดเชยค่ารักษาพยาบาล",
    "Type": "MENU",
    "Action": "",
    "cmd": "",
    "Title": "",
    "Flag": "N",
    "Active": null,
    "Color": "RGB(192,150,25)",
    "Enabled": "Y",
    "LastDate": null
  },
  {
    "ID": "06000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU06",
    "Name": "",
    "Detail": "6.โปรแกรมแบบบันทึกชดเชยค่าบริการลูกหนี้รายตัว",
    "Type": "MENU",
    "Action": "SCRIPT",
    "cmd": "",
    "Title": "",
    "Flag": "N",
    "Active": "Y",
    "Color": "RGB(192,150,25)",
    "Enabled": "Y",
    "LastDate": "2020-04-11 15:46:36"
  },
  {
    "ID": "07000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU07",
    "Name": "",
    "Detail": "7.ข้อมูลสรุปลูกหนี้ค่ารักษาพยาบาล",
    "Type": "MENU",
    "Action": "SCRIPT",
    "cmd": "",
    "Title": "",
    "Flag": "N",
    "Active": null,
    "Color": "RGB(192,150,25)",
    "Enabled": "Y",
    "LastDate": null
  },
  {
    "ID": "08000000000000000000",
    "MainName": "MENU",
    "SubName": "MENU08",
    "Name": "",
    "Detail": "8.รายงานอื่นๆ",
    "Type": "MENU",
    "Action": "SCRIPT",
    "cmd": "",
    "Title": "",
    "Flag": "N",
    "Active": null,
    "Color": "RGB(192,150,25)",
    "Enabled": "Y",
    "LastDate": null
  }
]
```
