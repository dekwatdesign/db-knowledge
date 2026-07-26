# `hrd_tr_occu_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| DATE_RECEIVE | date | YES |  | NULL |  | วันที่ที่รับใบ |
| DATE_END | date | YES |  | NULL |  | วันหมดอายุ |
| COMMENT | varchar(255) | YES |  |  |  | หมายเหตุ |
| CARD_CODE | varchar(20) | YES |  |  |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| USER_EDIT_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "ID": 1,
    "PERSON_ID": "66",
    "DATE_RECEIVE": "2017-12-24",
    "DATE_END": "2022-12-23",
    "COMMENT": null,
    "CARD_CODE": "4511043339",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 66,
    "updated_at": "2020-09-25 06:51:08",
    "created_at": "2020-09-25 06:51:08"
  },
  {
    "ID": 2,
    "PERSON_ID": "70",
    "DATE_RECEIVE": "2017-12-24",
    "DATE_END": "2022-12-23",
    "COMMENT": "ต่ออายุครั้งที่ 4",
    "CARD_CODE": "4511032800",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 70,
    "updated_at": "2020-09-28 03:21:47",
    "created_at": "2020-09-28 03:21:47"
  },
  {
    "ID": 3,
    "PERSON_ID": "71",
    "DATE_RECEIVE": "2019-09-08",
    "DATE_END": "2024-09-07",
    "COMMENT": null,
    "CARD_CODE": "5211186602",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 71,
    "updated_at": "2020-09-28 03:25:13",
    "created_at": "2020-09-28 03:25:13"
  },
  {
    "ID": 4,
    "PERSON_ID": "87",
    "DATE_RECEIVE": "2005-04-22",
    "DATE_END": null,
    "COMMENT": "ใบประกอบตลอดชีพ",
    "CARD_CODE": "ภ. 19779",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 87,
    "updated_at": "2020-10-01 03:25:45",
    "created_at": "2020-10-01 03:25:45"
  },
  {
    "ID": 5,
    "PERSON_ID": "189",
    "DATE_RECEIVE": null,
    "DATE_END": null,
    "COMMENT": null,
    "CARD_CODE": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 189,
    "updated_at": "2020-10-01 08:10:45",
    "created_at": "2020-10-01 08:10:45"
  },
  {
    "ID": 6,
    "PERSON_ID": "213",
    "DATE_RECEIVE": "2019-03-08",
    "DATE_END": "2024-03-07",
    "COMMENT": null,
    "CARD_CODE": "2340",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 213,
    "updated_at": "2023-06-01 07:16:21",
    "created_at": "2023-06-01 07:16:21"
  },
  {
    "ID": 7,
    "PERSON_ID": "46",
    "DATE_RECEIVE": "2021-09-10",
    "DATE_END": "2026-09-09",
    "COMMENT": null,
    "CARD_CODE": "กนอ.543",
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": 46,
    "updated_at": "2024-09-11 07:10:59",
    "created_at": "2024-09-11 07:10:59"
  }
]
```
