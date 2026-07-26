# `hrd_person_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_PERSON_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_PERSON_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| HR_LEAVE04_CON | text | YES |  | NULL |  | เงื่อนไขการลาพักผ่อน |
| HR_LEAVE04_CMD | varchar(255) | YES |  |  |  | หมายเหตุ |
| HR_LEAVE04_DAY | int | YES |  | NULL |  | จำนวนลาพักผ่อนต่อปี |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_HR_PERSON_TYPE_ID | HR_PERSON_TYPE_ID | no | 1 |
| PRIMARY | HR_PERSON_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_PERSON_TYPE_ID": 1,
    "HR_PERSON_TYPE_NAME": "ข้าราชการ",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ทำงานครบ 1 ปี ลาได้ 10 วัน สะสมไม่เกิน 20 ทำงานครบ 10 ปีสะสมได้ไม่เกิน 30",
    "HR_LEAVE04_DAY": 10,
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_PERSON_TYPE_ID": 2,
    "HR_PERSON_TYPE_NAME": "ลูกจ้างประจำ",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ทำงานครบ 1 ปี ลาได้ 10 วัน สะสมไม่เกิน 20 ทำงานครบ 10 ปีสะสมได้ไม่เกิน 30",
    "HR_LEAVE04_DAY": 10,
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_PERSON_TYPE_ID": 3,
    "HR_PERSON_TYPE_NAME": "พนักงานราชการ",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ทำงานครบ 1 ปี สะสมได้ไม่เกิน 15 วัน เมื่อรวมกับ ปีปัจจุบันแล้ว ทุกอายุงาน ทำยังไม่ครบ 6 เดือนไม่มีสิทธิลาพักผ่อน",
    "HR_LEAVE04_DAY": 10,
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_PERSON_TYPE_ID": 4,
    "HR_PERSON_TYPE_NAME": "พนักงานกระทรวงสาธารณสุข",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ทำงานครบ 1 ปี สะสมได้ไม่เกิน 15 วัน เมื่อรวมกับ ปีปัจจุบันแล้ว ทุกอายุงาน ทำยังไม่ครบ 6 เดือนไม่มีสิทธิลาพักผ่อน",
    "HR_LEAVE04_DAY": 10,
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_PERSON_TYPE_ID": 5,
    "HR_PERSON_TYPE_NAME": "ลูกจ้างชั่วคราว",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ทำงานไม่ครบ 6 เดือน ลาไม่ได้   ไม่มีสิทธิสะสม",
    "HR_LEAVE04_DAY": 10,
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_PERSON_TYPE_ID": 6,
    "HR_PERSON_TYPE_NAME": "ลูกจ้างรายวัน",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ไม่มีสิทธิลาสะสม",
    "HR_LEAVE04_DAY": 0,
    "updated_at": "2020-09-18 07:58:38",
    "created_at": null
  },
  {
    "HR_PERSON_TYPE_ID": 7,
    "HR_PERSON_TYPE_NAME": "แพทย์ที่ปรึกษา",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ไม่มีสิทธิลาสะสม",
    "HR_LEAVE04_DAY": 0,
    "updated_at": "2020-09-18 07:58:29",
    "created_at": "2020-09-16 03:10:46"
  },
  {
    "HR_PERSON_TYPE_ID": 8,
    "HR_PERSON_TYPE_NAME": "ลูกจ้างรายคาบ",
    "HR_LEAVE04_CON": null,
    "HR_LEAVE04_CMD": "ไม่มีสิทธิลาสะสม",
    "HR_LEAVE04_DAY": 0,
    "updated_at": "2020-09-18 07:11:04",
    "created_at": "2020-09-18 07:11:04"
  }
]
```
