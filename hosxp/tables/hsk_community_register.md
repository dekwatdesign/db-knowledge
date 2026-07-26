# `hsk_community_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| an | varchar(13) | NO | PRI |  |  |  |
| nfname | varchar(255) | YES |  | NULL |  |  |
| age | int(11) | YES |  | NULL |  |  |
| ad_count | int(11) | YES |  | NULL |  |  |
| admin_d | date | YES | MUL | NULL |  |  |
| disc_d | date | YES | MUL | NULL |  |  |
| hometel | varchar(15) | YES |  | NULL |  |  |
| addpart | varchar(255) | YES |  | NULL |  |  |
| addmoo | varchar(2) | YES |  | NULL |  |  |
| addrood | varchar(2) | YES |  | NULL |  |  |
| addtum | varchar(2) | YES |  | NULL |  |  |
| addamp | varchar(2) | YES |  | NULL |  |  |
| addchw | varchar(2) | YES |  | NULL |  |  |
| t_smiv | varchar(1) | YES |  | NULL |  |  |
| t_schi | varchar(1) | YES |  | NULL |  |  |
| t_sub | varchar(1) | YES |  | NULL |  |  |
| t_mood | varchar(1) | YES |  | NULL |  |  |
| t_social | varchar(1) | YES |  | NULL |  |  |
| t_re_ad | varchar(1) | YES |  | NULL |  |  |
| t_ad3y | varchar(1) | YES |  | NULL |  |  |
| t_niti | varchar(1) | YES |  | NULL |  |  |
| t_other | varchar(1) | YES |  | NULL |  |  |
| t_note | text | YES |  | NULL |  |  |
| time_stamp | timestamp | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| staff_date | date | YES |  | NULL |  |  |
| staff_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ad | admin_d | no | 1 |
| an | an | no | 1 |
| dc | disc_d | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | an | yes | 3 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "670828083054",
    "hn": "570001038",
    "an": "670828083054",
    "nfname": "[MASKED_FNAME]",
    "age": 13,
    "ad_count": 15,
    "admin_d": null,
    "disc_d": null,
    "hometel": "081-3993493",
    "addpart": "99/13",
    "addmoo": "6",
    "addrood": "-",
    "addtum": "03",
    "addamp": "01",
    "addchw": "11",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "",
    "t_re_ad": "",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "",
    "time_stamp": "2024-09-04 08:17:22",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-09-04",
    "staff_time": "8:17:22"
  },
  {
    "vn": "670607101507",
    "hn": "660001255",
    "an": "670000983",
    "nfname": "[MASKED_FNAME]",
    "age": 11,
    "ad_count": 7,
    "admin_d": "2024-06-07",
    "disc_d": "2024-07-05",
    "hometel": "0994169665",
    "addpart": "159/659",
    "addmoo": "-",
    "addrood": "ซอ",
    "addtum": "08",
    "addamp": "05",
    "addchw": "10",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "Y",
    "t_re_ad": "Y",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "",
    "time_stamp": "2024-09-06 09:27:13",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-09-06",
    "staff_time": "9:27:13"
  },
  {
    "vn": "670703145445",
    "hn": "670000804",
    "an": "670001103",
    "nfname": "[MASKED_FNAME]",
    "age": 13,
    "ad_count": 1,
    "admin_d": "2024-07-03",
    "disc_d": "2024-07-11",
    "hometel": "0893013815",
    "addpart": "75/1",
    "addmoo": "6",
    "addrood": "-",
    "addtum": "03",
    "addamp": "04",
    "addchw": "11",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "",
    "t_re_ad": "",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "เยี่ยมบ้านผู้ป่วย วันที่ 11 ก.ย.67\r\nพบบิดาและคุณย่า(อายุ 81 ปี) ให้การต้อนรับเป็นอย่างดี ลักษณะบ้านเป็นบ้านปูน 2 ชั้น ใต้ถุนสูง หลังใหญ่ ด้านข้างบ้านเปิดเป็นหอพัก 3 ชั้น จำนวน 15 ห้อง ในบ้านจัดของเป็นระเบียบเรียบร้อยดี แบ่งพื้นที่เป็นสัดเป็นส่วน ผู้ป่วยมีห้องของตนเอง จะมานอนห้องเดียวกันกับบิดามารดา ",
    "time_stamp": "2024-09-12 08:21:35",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-09-12",
    "staff_time": "8:21:35"
  },
  {
    "vn": "661222100140",
    "hn": "650005644",
    "an": "660001748",
    "nfname": "[MASKED_FNAME]",
    "age": 14,
    "ad_count": 11,
    "admin_d": "2023-12-22",
    "disc_d": "2023-12-28",
    "hometel": "092-336-9664",
    "addpart": "54/37",
    "addmoo": "-",
    "addrood": "ถ.",
    "addtum": "14",
    "addamp": "01",
    "addchw": "21",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "",
    "t_re_ad": "",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "Admit IPD5",
    "time_stamp": "2024-09-12 08:39:40",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-09-12",
    "staff_time": "8:39:40"
  },
  {
    "vn": "670104124419",
    "hn": "670000017",
    "an": "670000063",
    "nfname": "[MASKED_FNAME]",
    "age": 14,
    "ad_count": 1,
    "admin_d": "2024-01-04",
    "disc_d": "2024-01-12",
    "hometel": "0867853426",
    "addpart": "28/15",
    "addmoo": "10",
    "addrood": "ซ.",
    "addtum": "03",
    "addamp": "03",
    "addchw": "11",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "",
    "t_re_ad": "",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "Admit IPD5",
    "time_stamp": "2024-09-12 08:41:16",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-09-12",
    "staff_time": "8:41:16"
  },
  {
    "vn": "670105082958",
    "hn": "660001086",
    "an": "670000064",
    "nfname": "[MASKED_FNAME]",
    "age": 14,
    "ad_count": 3,
    "admin_d": "2024-01-05",
    "disc_d": "2024-01-16",
    "hometel": "0861356042",
    "addpart": "269/173",
    "addmoo": "-",
    "addrood": "ถน",
    "addtum": "01",
    "addamp": "44",
    "addchw": "10",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "",
    "t_re_ad": "",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "Admit IPD5",
    "time_stamp": "2024-09-12 08:41:55",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-09-12",
    "staff_time": "8:41:55"
  },
  {
    "vn": "670111084713",
    "hn": "660000908",
    "an": "670000104",
    "nfname": "[MASKED_FNAME]",
    "age": 12,
    "ad_count": 13,
    "admin_d": "2024-01-11",
    "disc_d": "2024-01-19",
    "hometel": "0816578747",
    "addpart": "300/200",
    "addmoo": "-",
    "addrood": "-",
    "addtum": "08",
    "addamp": "06",
    "addchw": "10",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "",
    "t_re_ad": "",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "Admit IPD5",
    "time_stamp": "2024-09-12 08:43:00",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-09-12",
    "staff_time": "8:43:00"
  },
  {
    "vn": "670819095045",
    "hn": "670000861",
    "an": "670001420",
    "nfname": "[MASKED_FNAME]",
    "age": 14,
    "ad_count": 4,
    "admin_d": "2024-08-19",
    "disc_d": "2024-09-27",
    "hometel": "0816639495",
    "addpart": "45/19",
    "addmoo": "3",
    "addrood": "-",
    "addtum": "05",
    "addamp": "01",
    "addchw": "20",
    "t_smiv": "",
    "t_schi": "",
    "t_sub": "",
    "t_mood": "",
    "t_social": "",
    "t_re_ad": "",
    "t_ad3y": "",
    "t_niti": "",
    "t_other": "",
    "t_note": "",
    "time_stamp": "2024-12-26 13:44:09",
    "staff": "[MASKED_FULLNAME]",
    "staff_date": "2024-12-26",
    "staff_time": "13:44:09"
  }
]
```
