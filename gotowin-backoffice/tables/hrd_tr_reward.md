# `hrd_tr_reward`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | bigint | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(10) | YES |  |  |  |  |
| REWARD_NAME | varchar(300) | YES |  |  |  |  |
| DATE_RECEIVE | date | YES |  | NULL |  |  |
| START_DATE | date | YES |  | NULL |  |  |
| END_DATE | date | YES |  | NULL |  |  |
| COMMENTS | varchar(300) | YES |  |  |  |  |
| IMG1 | longblob | YES |  | NULL |  |  |
| IMG2 | longblob | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| USER_EDIT_ID | varchar(20) | YES |  |  |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

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
    "PERSON_ID": "63",
    "REWARD_NAME": "เครื่องราชอิสริยาภรณ์จัตุรถาภรณ์มงกุฎไทย",
    "DATE_RECEIVE": "2017-09-27",
    "START_DATE": "2017-10-16",
    "END_DATE": "2027-10-15",
    "COMMENTS": "ตามประกาศราชกิจจานุเบกษา เล่ม 134 ตอนที่ 52 ข หน้า 284",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "63",
    "created_at": "2020-09-23 15:29:55",
    "updated_at": "2022-09-28 10:25:30"
  },
  {
    "ID": 2,
    "PERSON_ID": "66",
    "REWARD_NAME": "ข้าราชการพลเรือนดีเด่น กรมสุขภาพจิต ประจำปี 2560",
    "DATE_RECEIVE": "2018-04-09",
    "START_DATE": null,
    "END_DATE": null,
    "COMMENTS": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "66",
    "created_at": "2020-09-25 06:33:28",
    "updated_at": "2020-09-25 06:33:28"
  },
  {
    "ID": 3,
    "PERSON_ID": "182",
    "REWARD_NAME": "ข้าราชการดีเด่น",
    "DATE_RECEIVE": null,
    "START_DATE": null,
    "END_DATE": null,
    "COMMENTS": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "182",
    "created_at": "2020-09-28 03:11:05",
    "updated_at": "2020-09-28 03:11:05"
  },
  {
    "ID": 4,
    "PERSON_ID": "71",
    "REWARD_NAME": "ข้าราชการพลเรือนดีเด่น กรมสุขภาพจิต ประจำปี 2563",
    "DATE_RECEIVE": null,
    "START_DATE": null,
    "END_DATE": null,
    "COMMENTS": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "71",
    "created_at": "2020-09-28 03:16:51",
    "updated_at": "2020-09-28 03:16:51"
  },
  {
    "ID": 5,
    "PERSON_ID": "188",
    "REWARD_NAME": "ตริตราภรณ์มงกุฏไทย",
    "DATE_RECEIVE": null,
    "START_DATE": null,
    "END_DATE": null,
    "COMMENTS": null,
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "188",
    "created_at": "2020-09-28 08:09:32",
    "updated_at": "2020-09-28 08:09:32"
  },
  {
    "ID": 6,
    "PERSON_ID": "95",
    "REWARD_NAME": "นักจิตวิทยาคลินิกดีเด่นระดับชำนาญการพิเศษประจำปี 2567",
    "DATE_RECEIVE": "2024-11-20",
    "START_DATE": "2024-11-20",
    "END_DATE": "2025-11-20",
    "COMMENTS": "รางวัลจากสมาคมนักจิตวิทยาคลินิกไทย",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "95",
    "created_at": "2024-12-23 05:33:02",
    "updated_at": "2024-12-23 05:33:02"
  },
  {
    "ID": 7,
    "PERSON_ID": "294",
    "REWARD_NAME": "รางวัลรองชนะเลิศอันดับ 1 Best Paper Award ประชุมวิชาการและการนำเสนอผลงานวิจัยระดับชาติทางจิตวิทยา ครั้งที่ 9",
    "DATE_RECEIVE": "2024-07-05",
    "START_DATE": "2024-07-05",
    "END_DATE": "2024-07-05",
    "COMMENTS": "หัวข้อ \"อิทธิพลของความกดดันทางเวลาภายในและความกดดันทางเวลาภายนอกที่ส่งผลต่อการยับยั้งชั่งใจ",
    "IMG1": null,
    "IMG2": null,
    "DATE_TIME_SAVE": null,
    "USER_EDIT_ID": "294",
    "created_at": "2025-10-04 14:26:13",
    "updated_at": "2025-10-04 14:26:13"
  }
]
```
