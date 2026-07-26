# `hrd_tr_train_spacial`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| DATE_BEGIN | date | YES |  | NULL |  |  |
| DATE_END | date | YES |  | NULL |  |  |
| TRAIN_NAME | varchar(255) | YES |  |  |  |  |
| SCHOOL_NAME | varchar(255) | YES |  |  |  |  |
| USER_EDIT_ID | varchar(20) | YES |  | NULL |  |  |
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
    "PERSON_ID": "66",
    "DATE_BEGIN": "1997-06-02",
    "DATE_END": "1997-09-19",
    "TRAIN_NAME": "เฉพาะทางการพยาบาลสุขภาพจิตและจิตเวช",
    "SCHOOL_NAME": "สถาบันจิตเวชศาสตร์สมเด็จเจ้าพระยา",
    "USER_EDIT_ID": "66",
    "updated_at": "2020-09-25 06:49:52",
    "created_at": "2020-09-25 06:49:52"
  },
  {
    "ID": 2,
    "PERSON_ID": "182",
    "DATE_BEGIN": null,
    "DATE_END": null,
    "TRAIN_NAME": "การพยาบาลเฉพาะทางจิตเวชผู้ใหญ่",
    "SCHOOL_NAME": "โรงพยาบาลสวนปรุง",
    "USER_EDIT_ID": "182",
    "updated_at": "2020-09-28 03:12:34",
    "created_at": "2020-09-28 03:12:34"
  },
  {
    "ID": 3,
    "PERSON_ID": "70",
    "DATE_BEGIN": "2004-12-07",
    "DATE_END": "2005-03-30",
    "TRAIN_NAME": "อบรมระยะสั้น การพยาบาลเฉพาะทาง สาขาการพยาบาลสุขภาพจิตและจิตเวช",
    "SCHOOL_NAME": "จุฬาลงกรณ์มหาวิทยาลัย ร่วมกับ กรมสุขภาพจิต",
    "USER_EDIT_ID": "70",
    "updated_at": "2020-09-28 03:19:53",
    "created_at": "2020-09-28 03:19:53"
  },
  {
    "ID": 4,
    "PERSON_ID": "71",
    "DATE_BEGIN": "2002-12-11",
    "DATE_END": "2003-03-28",
    "TRAIN_NAME": "เฉพาะทางการพยาบาลสุขภาพจิตและจิตเวช",
    "SCHOOL_NAME": "สถาบันจิตเวชศาสตร์สมเด็จเจ้าพระยา",
    "USER_EDIT_ID": "71",
    "updated_at": "2020-09-28 03:23:49",
    "created_at": "2020-09-28 03:23:49"
  },
  {
    "ID": 5,
    "PERSON_ID": "188",
    "DATE_BEGIN": null,
    "DATE_END": null,
    "TRAIN_NAME": "การพยาบาลเฉพาะทางจิตเวชเด็กและวัยรุ่น",
    "SCHOOL_NAME": "ราชานุกูล",
    "USER_EDIT_ID": "188",
    "updated_at": "2020-09-28 08:11:24",
    "created_at": "2020-09-28 08:11:24"
  },
  {
    "ID": 6,
    "PERSON_ID": "185",
    "DATE_BEGIN": "2010-08-02",
    "DATE_END": "2010-11-30",
    "TRAIN_NAME": "การพยาบาลเฉพาะทางสุขภาพจิต และจิตเวชเด็กและวัยรุ่น",
    "SCHOOL_NAME": "สถาบันราชานุกูล",
    "USER_EDIT_ID": "185",
    "updated_at": "2020-10-01 04:50:47",
    "created_at": "2020-10-01 04:50:07"
  },
  {
    "ID": 7,
    "PERSON_ID": "147",
    "DATE_BEGIN": null,
    "DATE_END": null,
    "TRAIN_NAME": "การพยาบาลเฉพาะทางสุขภาพจิตเด็กและวัยรุ่น",
    "SCHOOL_NAME": "มหาวิทยาลัยธรรมศาสตร์",
    "USER_EDIT_ID": "147",
    "updated_at": "2020-10-01 06:47:33",
    "created_at": "2020-10-01 06:47:33"
  },
  {
    "ID": 8,
    "PERSON_ID": "189",
    "DATE_BEGIN": "2012-08-01",
    "DATE_END": "2012-12-15",
    "TRAIN_NAME": "การพยาบาลเฉพาะทางสุขภาพจิต และจิตเวชเด็กและวัยรุ่น",
    "SCHOOL_NAME": "ราชานุกูล",
    "USER_EDIT_ID": "189",
    "updated_at": "2020-10-01 08:10:19",
    "created_at": "2020-10-01 08:10:19"
  }
]
```
