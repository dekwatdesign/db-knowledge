# `hrd_tr_cid_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| DATE_RECEIVE | date | YES |  | NULL |  | วันที่ทำบัตร |
| DATE_END | date | YES |  | NULL |  | วันหมดอายุ |
| COMMENT | varchar(255) | YES |  |  |  | หมายเหตุ |
| CARD_CODE | varchar(20) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| USER_EDIT_ID | int | YES |  | NULL |  |  |
| IMG | blob | YES |  | NULL |  |  |
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
    "PERSON_ID": "59",
    "DATE_RECEIVE": "2014-11-11",
    "DATE_END": "2020-11-10",
    "COMMENT": null,
    "CARD_CODE": "457/2557",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 59,
    "IMG": null,
    "updated_at": "2020-09-25 03:45:19",
    "created_at": "2020-09-25 03:45:03"
  },
  {
    "ID": 2,
    "PERSON_ID": "33",
    "DATE_RECEIVE": "2017-08-15",
    "DATE_END": "2026-06-07",
    "COMMENT": null,
    "CARD_CODE": "1xxxxxxxxxxxx",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 33,
    "IMG": null,
    "updated_at": "2020-09-25 06:30:49",
    "created_at": "2020-09-25 06:30:49"
  },
  {
    "ID": 3,
    "PERSON_ID": "68",
    "DATE_RECEIVE": "2015-02-09",
    "DATE_END": "2024-01-31",
    "COMMENT": null,
    "CARD_CODE": "1xxxxxxxxxxxx",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 68,
    "IMG": null,
    "updated_at": "2020-09-25 06:32:27",
    "created_at": "2020-09-25 06:32:27"
  },
  {
    "ID": 4,
    "PERSON_ID": "70",
    "DATE_RECEIVE": "2015-02-07",
    "DATE_END": "2023-09-24",
    "COMMENT": "บัตรประชาชน",
    "CARD_CODE": "1xxxxxxxxxxxx",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-30 05:08:43",
    "created_at": "2020-09-28 03:24:20"
  },
  {
    "ID": 5,
    "PERSON_ID": "71",
    "DATE_RECEIVE": "2013-05-27",
    "DATE_END": "2021-12-28",
    "COMMENT": null,
    "CARD_CODE": "1xxxxxxxxxxxx",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 71,
    "IMG": null,
    "updated_at": "2020-09-28 03:26:50",
    "created_at": "2020-09-28 03:26:50"
  },
  {
    "ID": 6,
    "PERSON_ID": "188",
    "DATE_RECEIVE": null,
    "DATE_END": null,
    "COMMENT": null,
    "CARD_CODE": "1xxxxxxxxxxxx",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 188,
    "IMG": null,
    "updated_at": "2020-09-28 08:11:44",
    "created_at": "2020-09-28 08:11:44"
  },
  {
    "ID": 7,
    "PERSON_ID": "70",
    "DATE_RECEIVE": "2013-07-25",
    "DATE_END": "2019-07-24",
    "COMMENT": "บัตรข้าราชการพลเรือน",
    "CARD_CODE": "2572556",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-30 05:10:37",
    "created_at": "2020-09-30 05:10:37"
  },
  {
    "ID": 8,
    "PERSON_ID": "70",
    "DATE_RECEIVE": "2016-01-01",
    "DATE_END": "2021-12-31",
    "COMMENT": "บัตรประจำตัวพนักงานเจ้าหน้าที่ตามพระราชบัญญัติสุขภาพจิต พ.ศ.2551",
    "CARD_CODE": "58302559",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-30 05:12:42",
    "created_at": "2020-09-30 05:12:42"
  }
]
```
