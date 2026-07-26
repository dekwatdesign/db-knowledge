# `asset_building`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| BUILD_NAME | varchar(255) | YES |  |  |  |  |
| LAND_ID | varchar(11) | YES |  |  |  |  |
| BUILD_NGUD_MONEY | decimal(10,2) | YES |  | NULL |  | งบที่ใช้กี่บาท |
| BUILD_NGUD_NAME | varchar(100) | YES |  |  |  |  |
| BUILD_CREATE | date | YES |  | NULL |  |  |
| BUILD_FINISH | date | YES |  | NULL |  |  |
| TRANSFER_DATE | date | YES |  | NULL |  | วันส่งมอบ |
| ENGINEER_NAME | varchar(100) | YES |  |  |  |  |
| SUP_ID | varchar(11) | YES |  |  |  | รหัสทะเบียนพัสดุ อ้างถึง |
| SUP_FSN | varchar(20) | YES |  |  |  | เลข FSN |
| DECLINE_ID | varchar(10) | YES |  |  |  |  |
| SIZE_CLASS | decimal(10,2) | YES |  | NULL |  | กี่ชั้น |
| SIZE_ROOM | int | YES |  | NULL |  | กี่ห้อง |
| BUILD_HR_ID | varchar(10) | YES |  |  |  |  |
| BUILD_HR_TEL | varchar(100) | YES |  | NULL |  |  |
| IMG | mediumblob | YES |  | NULL |  |  |
| BUDGET_ID | int | YES |  | NULL |  |  |
| METHOD_ID | varchar(10) | YES |  |  |  |  |
| BUY_ID | varchar(10) | YES |  |  |  |  |
| TOTAL | int | YES |  | NULL |  |  |
| COMMENT | varchar(255) | YES |  |  |  |  |
| OLD_USE | int | YES |  | NULL |  | อายุการใช้งาน |
| FILE | mediumblob | YES |  | NULL |  |  |
| FILE_SIZE | double | YES |  | NULL |  |  |
| FILE_TYPE | varchar(10) | YES |  |  |  |  |
| FILE_SIZE_MB | double | YES |  | NULL |  |  |
| LAND_RAWANG | varchar(50) | YES |  |  |  |  |
| STATUS_ID | int | YES |  | NULL |  |  |
| FILE_NAME | varchar(255) | YES |  | NULL |  | ไฟล์ตึก |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

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
    "BUILD_NAME": "อาคารผู้ป่วยนอกและอำนวยการ",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "57204234.00",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1996-10-01",
    "BUILD_FINISH": "1998-05-25",
    "TRANSFER_DATE": "1998-05-26",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": null,
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": null,
    "OLD_USE": 30,
    "FILE": null,
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": null,
    "updated_at": "2022-02-15 14:59:28",
    "created_at": "2021-11-24 14:04:41"
  },
  {
    "ID": 2,
    "BUILD_NAME": "อาคารผู้ป่วยใน 5 ชั้น",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "45103197.00",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1997-10-01",
    "BUILD_FINISH": "1999-04-26",
    "TRANSFER_DATE": "1999-04-27",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": null,
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": null,
    "OLD_USE": 30,
    "FILE": null,
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": null,
    "updated_at": "2022-10-05 15:42:32",
    "created_at": "2021-11-24 14:07:30"
  },
  {
    "ID": 3,
    "BUILD_NAME": "อาคารคลังพัสดุและซ่อมบำรุง",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "11902314.00",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1997-10-20",
    "BUILD_FINISH": "1998-10-20",
    "TRANSFER_DATE": "1998-10-21",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": null,
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": "",
    "OLD_USE": 30,
    "FILE": null,
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": null,
    "updated_at": "2022-01-18 11:49:31",
    "created_at": "2022-01-18 11:26:03"
  },
  {
    "ID": 4,
    "BUILD_NAME": "อาคารพักแพทย์พยาบาล",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "17990000.00",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1996-08-17",
    "BUILD_FINISH": "1997-08-17",
    "TRANSFER_DATE": "1997-08-18",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": null,
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": "",
    "OLD_USE": 30,
    "FILE": null,
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": null,
    "updated_at": "2022-01-18 11:30:27",
    "created_at": "2022-01-18 11:30:27"
  },
  {
    "ID": 5,
    "BUILD_NAME": "บ้านพักข้าราชการ  ระดับ 1-2",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "1116860.00",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1988-04-02",
    "BUILD_FINISH": "1989-04-02",
    "TRANSFER_DATE": "1989-04-03",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": null,
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": "",
    "OLD_USE": 30,
    "FILE": null,
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": null,
    "updated_at": "2022-01-18 11:44:19",
    "created_at": "2022-01-18 11:44:19"
  },
  {
    "ID": 6,
    "BUILD_NAME": "อาคารกรมหลวงนราธิวาสราชนครินทร์ 80 ปี (นันทนาการ)",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "47306104.24",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1999-04-23",
    "BUILD_FINISH": "2000-04-23",
    "TRANSFER_DATE": "2000-04-24",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": null,
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": null,
    "OLD_USE": 30,
    "FILE": null,
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": null,
    "updated_at": "2022-02-15 15:56:14",
    "created_at": "2022-01-18 11:48:36"
  },
  {
    "ID": 7,
    "BUILD_NAME": "อาคารโภชนาการ",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "1000000.00",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1997-04-23",
    "BUILD_FINISH": "1998-04-23",
    "TRANSFER_DATE": "1998-04-24",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": "b''",
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": null,
    "OLD_USE": 30,
    "FILE": "b''",
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": "",
    "updated_at": "2022-02-15 16:01:43",
    "created_at": "2022-01-18 11:48:36"
  },
  {
    "ID": 8,
    "BUILD_NAME": "อาคารซักฟอก",
    "LAND_ID": "1",
    "BUILD_NGUD_MONEY": "500000.00",
    "BUILD_NGUD_NAME": "",
    "BUILD_CREATE": "1999-04-23",
    "BUILD_FINISH": "2000-04-23",
    "TRANSFER_DATE": "2000-04-24",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "SUP_ID": "",
    "SUP_FSN": "",
    "DECLINE_ID": "1",
    "SIZE_CLASS": null,
    "SIZE_ROOM": null,
    "BUILD_HR_ID": "2",
    "BUILD_HR_TEL": "023805601",
    "IMG": "b'(NULL)'",
    "BUDGET_ID": 1,
    "METHOD_ID": "2",
    "BUY_ID": "3",
    "TOTAL": 1,
    "COMMENT": null,
    "OLD_USE": 30,
    "FILE": "b''",
    "FILE_SIZE": null,
    "FILE_TYPE": "",
    "FILE_SIZE_MB": null,
    "LAND_RAWANG": "",
    "STATUS_ID": null,
    "FILE_NAME": "",
    "updated_at": "2022-02-15 15:55:42",
    "created_at": "2022-01-18 11:48:36"
  }
]
```
