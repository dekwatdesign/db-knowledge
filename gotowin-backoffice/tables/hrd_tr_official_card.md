# `hrd_tr_official_card`

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
    "PERSON_ID": "33",
    "DATE_RECEIVE": "1970-01-01",
    "DATE_END": "1970-01-01",
    "COMMENT": null,
    "CARD_CODE": "1 ขษ 404",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 33,
    "IMG": null,
    "updated_at": "2020-09-25 06:31:46",
    "created_at": "2020-09-25 06:31:37"
  },
  {
    "ID": 2,
    "PERSON_ID": "70",
    "DATE_RECEIVE": "1970-01-01",
    "DATE_END": "1970-01-01",
    "COMMENT": "รถเก๋ง เมอร์เซเดส เบนซ์ CLA200 สีดำ",
    "CARD_CODE": "9กท9655",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-30 05:03:36",
    "created_at": "2020-09-28 03:25:53"
  },
  {
    "ID": 3,
    "PERSON_ID": "70",
    "DATE_RECEIVE": "1970-01-01",
    "DATE_END": "1970-01-01",
    "COMMENT": "รถเก๋ง นิสสันซันนี่ นีโอ สีดำ",
    "CARD_CODE": "9กม9655",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-28 03:29:14",
    "created_at": "2020-09-28 03:26:39"
  },
  {
    "ID": 4,
    "PERSON_ID": "71",
    "DATE_RECEIVE": null,
    "DATE_END": null,
    "COMMENT": "honda city",
    "CARD_CODE": "8กน5464",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 71,
    "IMG": null,
    "updated_at": "2020-09-28 03:27:48",
    "created_at": "2020-09-28 03:27:48"
  },
  {
    "ID": 5,
    "PERSON_ID": "70",
    "DATE_RECEIVE": null,
    "DATE_END": null,
    "COMMENT": "รถกระบะ อีซูซุ สีดำ",
    "CARD_CODE": "9กฬ3545",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "IMG": null,
    "updated_at": "2020-09-28 03:29:01",
    "created_at": "2020-09-28 03:29:01"
  },
  {
    "ID": 6,
    "PERSON_ID": "190",
    "DATE_RECEIVE": null,
    "DATE_END": null,
    "COMMENT": null,
    "CARD_CODE": "8กษ-1018 กทม.",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 190,
    "IMG": null,
    "updated_at": "2020-09-28 05:45:25",
    "created_at": "2020-09-28 05:45:25"
  },
  {
    "ID": 7,
    "PERSON_ID": "188",
    "DATE_RECEIVE": null,
    "DATE_END": null,
    "COMMENT": null,
    "CARD_CODE": "1กถ6051 กทม.",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 188,
    "IMG": null,
    "updated_at": "2020-09-28 08:12:31",
    "created_at": "2020-09-28 08:12:31"
  },
  {
    "ID": 8,
    "PERSON_ID": "87",
    "DATE_RECEIVE": "1970-01-01",
    "DATE_END": "1970-01-01",
    "COMMENT": null,
    "CARD_CODE": "1กธ165 กทม",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 87,
    "IMG": null,
    "updated_at": "2020-10-02 02:14:55",
    "created_at": "2020-09-29 10:11:18"
  }
]
```
