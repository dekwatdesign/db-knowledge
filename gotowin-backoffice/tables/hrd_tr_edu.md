# `hrd_tr_edu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| VUT_ID | varchar(500) | YES |  |  |  |  |
| LAVEL | varchar(200) | YES |  |  |  |  |
| DATE_FINISH | varchar(500) | YES |  |  |  |  |
| GRADE | decimal(10,2) | YES |  | NULL |  |  |
| UNIVER_NAME | varchar(200) | YES |  |  |  |  |
| START_DATE | date | YES |  | NULL |  |  |
| CON_DATE | date | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| USER_EDIT_ID | int | YES |  | NULL |  |  |
| FAUCULTY | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

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
    "ID": 5,
    "PERSON_ID": "63",
    "VUT_ID": "10",
    "LAVEL": "-",
    "DATE_FINISH": "",
    "GRADE": null,
    "UNIVER_NAME": "โรงเรียนเมืองนครราชสีมา",
    "START_DATE": "1984-05-01",
    "CON_DATE": "1989-03-31",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "FAUCULTY": "-",
    "created_at": "2020-09-23 15:06:19",
    "updated_at": "2020-09-23 15:06:19"
  },
  {
    "ID": 6,
    "PERSON_ID": "63",
    "VUT_ID": "11",
    "LAVEL": "-",
    "DATE_FINISH": "",
    "GRADE": null,
    "UNIVER_NAME": "โรงเรียนบุญเหลือวิทยานุสรณ์",
    "START_DATE": "1989-05-01",
    "CON_DATE": "1992-03-31",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "FAUCULTY": "-",
    "created_at": "2020-09-23 15:08:22",
    "updated_at": "2020-09-23 15:08:22"
  },
  {
    "ID": 7,
    "PERSON_ID": "63",
    "VUT_ID": "01",
    "LAVEL": "วิทย์-คณิต",
    "DATE_FINISH": "",
    "GRADE": null,
    "UNIVER_NAME": "โรงเรียนบุญเหลือวิทยานุสรณ์",
    "START_DATE": "1992-05-04",
    "CON_DATE": "1995-03-31",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "FAUCULTY": "-",
    "created_at": "2020-09-23 15:09:31",
    "updated_at": "2020-09-23 15:09:31"
  },
  {
    "ID": 8,
    "PERSON_ID": "63",
    "VUT_ID": "06",
    "LAVEL": "วิทยาการคอมพิวเตอร์",
    "DATE_FINISH": "",
    "GRADE": "2.44",
    "UNIVER_NAME": "สถาบันราชภัฎนครราชสีมา",
    "START_DATE": "1995-06-01",
    "CON_DATE": "2001-11-26",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 63,
    "FAUCULTY": "วิทยาศาสตร์และเทคโนโลยี",
    "created_at": "2020-09-23 15:10:46",
    "updated_at": "2020-09-23 15:10:46"
  },
  {
    "ID": 9,
    "PERSON_ID": "59",
    "VUT_ID": "06",
    "LAVEL": "รัฐประศาสนศาสตร์",
    "DATE_FINISH": "",
    "GRADE": "3.22",
    "UNIVER_NAME": "มหาวิทยาลัยขอนแก่น",
    "START_DATE": "2008-05-01",
    "CON_DATE": "2012-03-30",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 59,
    "FAUCULTY": "มนุษยศาสตร์และสังคมศาสตร์",
    "created_at": "2020-09-25 03:35:54",
    "updated_at": "2020-09-25 03:35:54"
  },
  {
    "ID": 62,
    "PERSON_ID": "95",
    "VUT_ID": "06",
    "LAVEL": "จิตวิทยา(คลินิก)",
    "DATE_FINISH": "",
    "GRADE": "0.00",
    "UNIVER_NAME": "มหาวิทยาลัยเชียงใหม่",
    "START_DATE": "1995-04-01",
    "CON_DATE": "1998-04-01",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 95,
    "FAUCULTY": "มนุษยศาสตร์",
    "created_at": "2022-08-08 07:00:54",
    "updated_at": "2022-08-08 07:00:54"
  },
  {
    "ID": 63,
    "PERSON_ID": "95",
    "VUT_ID": "07",
    "LAVEL": "จิตวิทยาคลินิก",
    "DATE_FINISH": "",
    "GRADE": "3.62",
    "UNIVER_NAME": "มหาวิทยาลัยมหิดล",
    "START_DATE": "1999-04-01",
    "CON_DATE": "2001-04-02",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 95,
    "FAUCULTY": "แพทยศาสตร์",
    "created_at": "2022-08-08 07:02:15",
    "updated_at": "2022-08-08 07:02:15"
  },
  {
    "ID": 11,
    "PERSON_ID": "27",
    "VUT_ID": "07",
    "LAVEL": "การบัญชี",
    "DATE_FINISH": "",
    "GRADE": null,
    "UNIVER_NAME": "มหาวิทยาลัยรามคำแหง",
    "START_DATE": "2014-08-02",
    "CON_DATE": "2016-08-12",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 27,
    "FAUCULTY": "บริหารธุรกิจ",
    "created_at": "2020-09-25 04:46:21",
    "updated_at": "2020-09-25 04:46:21"
  }
]
```
