# `doctor_consult`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| consult_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| consult_date | date | YES | MUL | NULL |  |  |
| consult_time | time | YES |  | NULL |  |  |
| consult_question | longtext | YES |  | NULL |  |  |
| consult_reply | longtext | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| reply_date | date | YES |  | NULL |  |  |
| reply_time | time | YES |  | NULL |  |  |
| urgent_flag | char(1) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| confirm | char(1) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| consult_to_doctor | char(1) | YES | MUL | NULL |  |  |
| consult_to_depcode | char(1) | YES |  | NULL |  |  |
| reply_staff | varchar(50) | YES |  | NULL |  |  |
| anonymous_consult | char(1) | YES |  | NULL |  |  |
| doctor_consult_priority_id | int(11) | YES |  | NULL |  |  |
| from_depcode | char(3) | YES |  | NULL |  |  |
| from_doctor | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_confirm | confirm | no | 1 |
| ix_consult_date | consult_date | no | 1 |
| ix_consult_to_doctor | consult_to_doctor | no | 1 |
| ix_doctor | doctor | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | consult_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "consult_id": 1,
    "vn": "640722090645",
    "hn": "530161154",
    "consult_date": "2021-07-22",
    "consult_time": "9:12:14",
    "consult_question": "ทดสอบส่ง",
    "consult_reply": "นัด14/08/2564",
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "0",
    "doctor": "",
    "confirm": "Y",
    "depcode": "025",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  },
  {
    "consult_id": 2,
    "vn": "640722090645",
    "hn": "530161154",
    "consult_date": "2021-07-22",
    "consult_time": "9:35:34",
    "consult_question": "นัดทำไอคิว projective test ด่วน",
    "consult_reply": "นัด30/08/64",
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "2",
    "doctor": "",
    "confirm": "Y",
    "depcode": "025",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  },
  {
    "consult_id": 3,
    "vn": "640722090645",
    "hn": "530161154",
    "consult_date": "2021-07-22",
    "consult_time": "10:08:39",
    "consult_question": "ส่งทำIQ",
    "consult_reply": "นัด test IQ 30/07/64",
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "0",
    "doctor": "",
    "confirm": "Y",
    "depcode": "025",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  },
  {
    "consult_id": 4,
    "vn": "640722090645",
    "hn": "530161154",
    "consult_date": "2021-07-22",
    "consult_time": "10:11:10",
    "consult_question": "กำลังฆ่าตัวตาย",
    "consult_reply": "กำลังจะทำเหมือนกัน",
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "2",
    "doctor": "091",
    "confirm": "Y",
    "depcode": "025",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  },
  {
    "consult_id": 5,
    "vn": "640907083005",
    "hn": "620000058",
    "consult_date": "2021-09-07",
    "consult_time": "9:34:26",
    "consult_question": "ส่งตรวจIQ",
    "consult_reply": null,
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "0",
    "doctor": "",
    "confirm": "N",
    "depcode": "004",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  },
  {
    "consult_id": 6,
    "vn": "640916082428",
    "hn": "610000064",
    "consult_date": "2021-09-16",
    "consult_time": "9:33:03",
    "consult_question": "ตรวจ IQ/WRAT ประเมิน LD",
    "consult_reply": null,
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "0",
    "doctor": "",
    "confirm": "N",
    "depcode": "004",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  },
  {
    "consult_id": 7,
    "vn": "641005093008",
    "hn": "610001508",
    "consult_date": "2021-10-05",
    "consult_time": "9:47:01",
    "consult_question": "พูดไม่ชัด \r\nLanguage disorder\r\nส่งปรับวิธีพูด",
    "consult_reply": null,
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "1",
    "doctor": "",
    "confirm": "N",
    "depcode": "031",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  },
  {
    "consult_id": 8,
    "vn": "641005104928",
    "hn": "600001407",
    "consult_date": "2021-10-05",
    "consult_time": "11:51:39",
    "consult_question": "IQ test (R/O ID, เตรียมวางแผนขึ้นประถม)",
    "consult_reply": null,
    "staff": "[MASKED_FULLNAME]",
    "reply_date": null,
    "reply_time": null,
    "urgent_flag": "0",
    "doctor": "",
    "confirm": "N",
    "depcode": "004",
    "hos_guid": null,
    "consult_to_doctor": null,
    "consult_to_depcode": null,
    "reply_staff": null,
    "anonymous_consult": null,
    "doctor_consult_priority_id": null,
    "from_depcode": null,
    "from_doctor": null
  }
]
```
