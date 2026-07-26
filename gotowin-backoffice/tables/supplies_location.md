# `supplies_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LOCATION_ID | int | NO | PRI | NULL | auto_increment |  |
| LOCATION_NAME | varchar(200) | YES |  |  |  |  |
| LOCATION_PHONE | varchar(100) | YES |  |  |  |  |
| COMMENT | varchar(255) | YES |  |  |  |  |
| PERSON_CONTACT_ID | varchar(20) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LOCATION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "LOCATION_ID": 1,
    "LOCATION_NAME": "อาคารผู้ป่วยนอกและอำนวยการ",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2022-01-18 11:17:05",
    "created_at": "2021-11-24 14:04:41"
  },
  {
    "LOCATION_ID": 2,
    "LOCATION_NAME": "อาคารผู้ป่วยใน 5 ชั้น",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2022-01-18 11:20:40",
    "created_at": "2021-11-24 14:07:30"
  },
  {
    "LOCATION_ID": 3,
    "LOCATION_NAME": "อาคารคลังพัสดุและซ่อมบำรุง",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2022-01-18 11:26:03",
    "created_at": "2022-01-18 11:26:03"
  },
  {
    "LOCATION_ID": 4,
    "LOCATION_NAME": "อาคารพักแพทย์พยาบาล",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2022-01-18 11:30:27",
    "created_at": "2022-01-18 11:30:27"
  },
  {
    "LOCATION_ID": 5,
    "LOCATION_NAME": "บ้านพักข้าราชการ  ระดับ 1-2",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2022-01-18 11:44:19",
    "created_at": "2022-01-18 11:44:19"
  },
  {
    "LOCATION_ID": 6,
    "LOCATION_NAME": "อาคารกรมหลวงนราธิวาสราชนครินทร์ 80 ปี (นันทนาการ)",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2022-01-18 11:52:47",
    "created_at": "2022-01-18 11:48:36"
  },
  {
    "LOCATION_ID": 7,
    "LOCATION_NAME": "อาคารโภชนาการ",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2023-08-21 10:18:30",
    "created_at": "2023-08-21 10:18:30"
  },
  {
    "LOCATION_ID": 8,
    "LOCATION_NAME": "อาคารซักฟอก",
    "LOCATION_PHONE": "023805601",
    "COMMENT": "",
    "PERSON_CONTACT_ID": "2",
    "updated_at": "2023-08-21 10:18:30",
    "created_at": "2023-08-21 10:18:30"
  }
]
```
