# `hrd_tr_work`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(10) | YES |  |  |  |  |
| DATEDO_WORK | date | YES |  | NULL |  |  |
| DATEDO_EXIT | date | YES |  | NULL |  |  |
| BECOURSE_EXIT | varchar(500) | YES |  |  |  |  |
| POSITION_WORK | varchar(500) | YES |  |  |  |  |
| LOCATION_WORK | varchar(500) | YES |  |  |  |  |
| SALARY | decimal(10,2) | YES |  | NULL |  |  |
| IMG1 | longblob | YES |  | NULL |  |  |
| IMG2 | longblob | YES |  | NULL |  |  |
| USER_EDIT_ID | varchar(20) | YES |  |  |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |

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
    "ID": 6,
    "PERSON_ID": "63",
    "DATEDO_WORK": "1995-07-03",
    "DATEDO_EXIT": "1996-07-31",
    "BECOURSE_EXIT": "ได้บรรจุเป็นลูกจ้างชั่วคราวที่ศูนย์ส่งเสริมอุตสาหกรรมภาคที่ 6 นครราชสีมา",
    "POSITION_WORK": "พนักงานร้าน",
    "LOCATION_WORK": "ร้านพิซซ่าฮัท",
    "SALARY": "4000.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "63",
    "created_at": "2020-09-23 15:12:16",
    "updated_at": "2020-09-23 15:26:26",
    "DATE_TIME_SAVE": null
  },
  {
    "ID": 7,
    "PERSON_ID": "63",
    "DATEDO_WORK": "1996-08-01",
    "DATEDO_EXIT": "2001-10-31",
    "BECOURSE_EXIT": "สิ้นสุดสัญญาจ้าง (โครงการร่วมมือระหว่างประเทศ)",
    "POSITION_WORK": "เจ้าหน้าที่บันทึกข้อมูล",
    "LOCATION_WORK": "ศูนย์ส่งเสริมอุตสาหกรรมภาคที่ 6",
    "SALARY": "4700.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "63",
    "created_at": "2020-09-23 15:13:16",
    "updated_at": "2020-09-23 15:13:16",
    "DATE_TIME_SAVE": null
  },
  {
    "ID": 8,
    "PERSON_ID": "63",
    "DATEDO_WORK": "2001-11-01",
    "DATEDO_EXIT": "2003-11-30",
    "BECOURSE_EXIT": "ได้บรรจุเป็นลูกจ้างชั่วคราวที่ศูนย์สุขภาพจิตที่ 5 กรมสุขภาพจิต",
    "POSITION_WORK": "พนักงานร้าน",
    "LOCATION_WORK": "ร้านอินเว็บ",
    "SALARY": "6000.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "63",
    "created_at": "2020-09-23 15:15:29",
    "updated_at": "2020-09-23 15:25:29",
    "DATE_TIME_SAVE": null
  },
  {
    "ID": 10,
    "PERSON_ID": "63",
    "DATEDO_WORK": "2011-04-18",
    "DATEDO_EXIT": "2020-08-24",
    "BECOURSE_EXIT": "ได้บรรจุเป็นข้าราชการที่โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "POSITION_WORK": "นักวิชาการคอมพิวเตอร์",
    "LOCATION_WORK": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "SALARY": "28110.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "63",
    "created_at": "2020-09-23 15:23:04",
    "updated_at": "2020-09-23 15:27:24",
    "DATE_TIME_SAVE": null
  },
  {
    "ID": 9,
    "PERSON_ID": "63",
    "DATEDO_WORK": "2003-12-01",
    "DATEDO_EXIT": "2011-04-15",
    "BECOURSE_EXIT": "ได้บรรจุพนักงานราชการที่โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "POSITION_WORK": "นักวิชาการคอมพิวเตอร์",
    "LOCATION_WORK": "ศูนย์สุขภาพจิตที่ 5 กรมสุขภาพจิต",
    "SALARY": "12500.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "63",
    "created_at": "2020-09-23 15:16:48",
    "updated_at": "2020-09-23 15:27:04",
    "DATE_TIME_SAVE": null
  },
  {
    "ID": 11,
    "PERSON_ID": "59",
    "DATEDO_WORK": "2012-06-01",
    "DATEDO_EXIT": "2013-02-28",
    "BECOURSE_EXIT": "เปลี่ยนงานใหม่",
    "POSITION_WORK": "เจ้าหน้าที่โครงการร้านค้าถูกใจ",
    "LOCATION_WORK": "พาณิชจังหวัดศรีสะเกษ",
    "SALARY": "15000.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "59",
    "created_at": "2020-09-25 03:40:16",
    "updated_at": "2020-09-25 03:40:16",
    "DATE_TIME_SAVE": null
  },
  {
    "ID": 12,
    "PERSON_ID": "59",
    "DATEDO_WORK": "2013-03-01",
    "DATEDO_EXIT": "2014-07-04",
    "BECOURSE_EXIT": "เปลี่ยนงานใหม่",
    "POSITION_WORK": "ธุรการโรงเรียน",
    "LOCATION_WORK": "โรงเรียนบ้านโคกตาล/โรงเรียนบ้านลุมพุกคลองแก้ว",
    "SALARY": "15000.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "59",
    "created_at": "2020-09-25 03:42:25",
    "updated_at": "2020-09-25 03:42:25",
    "DATE_TIME_SAVE": null
  },
  {
    "ID": 15,
    "PERSON_ID": "66",
    "DATEDO_WORK": "1989-04-03",
    "DATEDO_EXIT": "1990-12-25",
    "BECOURSE_EXIT": "ช่วยราชการ ย้ายกลับต้นสังกัด",
    "POSITION_WORK": "พยาบาลวิชาชีพ 3",
    "LOCATION_WORK": "โรงพยาบาลนิติจิตเวช",
    "SALARY": "4020.00",
    "IMG1": null,
    "IMG2": null,
    "USER_EDIT_ID": "66",
    "created_at": "2020-09-25 06:27:46",
    "updated_at": "2020-09-25 06:27:46",
    "DATE_TIME_SAVE": null
  }
]
```
