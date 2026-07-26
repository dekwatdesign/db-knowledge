# `hsk_assessment_ass04`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| department | varchar(5) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| namesent | varchar(100) | YES |  | NULL |  |  |
| namesent_status | varchar(100) | YES |  | NULL |  |  |
| infosent | varchar(1) | YES |  | NULL |  |  |
| infosent_other | varchar(100) | YES |  | NULL |  |  |
| status_sent | varchar(1) | YES |  | NULL |  |  |
| status_sent_other | varchar(100) | YES |  | NULL |  |  |
| kadee | int(1) | YES |  | NULL |  |  |
| kadee_other | varchar(100) | YES |  | NULL |  |  |
| smiv | int(1) | YES |  | NULL |  |  |
| smiv_1 | int(1) | YES |  | NULL |  |  |
| smiv_2 | int(1) | YES |  | NULL |  |  |
| smiv_3 | int(1) | YES |  | NULL |  |  |
| smiv_4 | int(1) | YES |  | NULL |  |  |
| badpar | int(1) | YES |  | NULL |  |  |
| badpar_other | varchar(100) | YES |  | NULL |  |  |
| c21 | text | YES |  | NULL |  |  |
| c22 | text | YES |  | NULL |  |  |
| c23 | text | YES |  | NULL |  |  |
| c24 | text | YES |  | NULL |  |  |
| c22_1 | varchar(1) | YES |  | NULL |  |  |
| c22_1_Y | varchar(100) | YES |  | NULL |  |  |
| c22_1_S | varchar(100) | YES |  | NULL |  |  |
| c22_2 | varchar(1) | YES |  | NULL |  |  |
| c22_2_Y | varchar(100) | YES |  | NULL |  |  |
| c22_3 | varchar(1) | YES |  | NULL |  |  |
| c22_3_Y | varchar(100) | YES |  | NULL |  |  |
| c22_3_p1 | int(1) | YES |  | NULL |  |  |
| c22_3_p2 | int(1) | YES |  | NULL |  |  |
| c22_3_p3 | int(1) | YES |  | NULL |  |  |
| c22_3_p4 | int(1) | YES |  | NULL |  |  |
| c22_3_p5 | int(1) | YES |  | NULL |  |  |
| c22_3_p5_other | varchar(100) | YES |  | NULL |  |  |
| c22_4 | int(1) | YES |  | NULL |  |  |
| c22_4_1 | int(1) | YES |  | NULL |  |  |
| c22_4_1_text1 | varchar(100) | YES |  | NULL |  |  |
| c22_4_1_text2 | varchar(100) | YES |  | NULL |  |  |
| c22_4_1_text3 | varchar(100) | YES |  | NULL |  |  |
| c22_4_1_text4 | varchar(100) | YES |  | NULL |  |  |
| c22_4_2 | int(1) | YES |  | NULL |  |  |
| c22_4_2_text1 | varchar(100) | YES |  | NULL |  |  |
| c22_4_2_text2 | varchar(100) | YES |  | NULL |  |  |
| c22_4_2_text3 | varchar(100) | YES |  | NULL |  |  |
| c22_4_2_text4 | varchar(100) | YES |  | NULL |  |  |
| c22_4_3 | int(1) | YES |  | NULL |  |  |
| c22_4_3_text1 | varchar(100) | YES |  | NULL |  |  |
| c22_4_3_text2 | varchar(100) | YES |  | NULL |  |  |
| c22_4_3_text3 | varchar(100) | YES |  | NULL |  |  |
| c22_4_3_text4 | varchar(100) | YES |  | NULL |  |  |
| c22_5 | varchar(200) | YES |  | NULL |  |  |
| c23_1 | varchar(200) | YES |  | NULL |  |  |
| c23_2 | varchar(200) | YES |  | NULL |  |  |
| c23_3 | varchar(200) | YES |  | NULL |  |  |
| c23_4 | varchar(200) | YES |  | NULL |  |  |
| c23_5 | varchar(200) | YES |  | NULL |  |  |
| c23_6 | varchar(200) | YES |  | NULL |  |  |
| c31_1 | varchar(1) | YES |  | NULL |  |  |
| c31_2 | varchar(1) | YES |  | NULL |  |  |
| c31_3 | varchar(1) | YES |  | NULL |  |  |
| c31_4 | varchar(1) | YES |  | NULL |  |  |
| c31_5 | varchar(200) | YES |  | NULL |  |  |
| c32_1 | varchar(1) | YES |  | NULL |  |  |
| c32_2 | varchar(1) | YES |  | NULL |  |  |
| c32_3 | varchar(1) | YES |  | NULL |  |  |
| c32_4_text | varchar(200) | YES |  | NULL |  |  |
| c32_5 | varchar(1) | YES |  | NULL |  |  |
| c32_6 | varchar(1) | YES |  | NULL |  |  |
| c32_7 | varchar(1) | YES |  | NULL |  |  |
| c32_8_text | varchar(200) | YES |  | NULL |  |  |
| c32_9 | varchar(1) | YES |  | NULL |  |  |
| c32_10_text | varchar(200) | YES |  | NULL |  |  |
| c33_1 | varchar(1) | YES |  | NULL |  |  |
| c33_2 | varchar(1) | YES |  | NULL |  |  |
| c33_3 | varchar(1) | YES |  | NULL |  |  |
| c33_4 | varchar(1) | YES |  | NULL |  |  |
| c33_5_text | varchar(200) | YES |  | NULL |  |  |
| c33_6_text | varchar(200) | YES |  | NULL |  |  |
| c33_7 | varchar(1) | YES |  | NULL |  |  |
| c33_8 | varchar(1) | YES |  | NULL |  |  |
| c33_9 | varchar(1) | YES |  | NULL |  |  |
| c33_10_text | varchar(200) | YES |  | NULL |  |  |
| c34_1 | varchar(1) | YES |  | NULL |  |  |
| c34_2_text | varchar(200) | YES |  | NULL |  |  |
| c35_1 | varchar(1) | YES |  | NULL |  |  |
| c35_2 | varchar(200) | YES |  | NULL |  |  |
| c36_1 | varchar(1) | YES |  | NULL |  |  |
| c36_2 | varchar(1) | YES |  | NULL |  |  |
| staff_register | varchar(20) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "id": 3492,
    "hn": "600000545",
    "an": "670001750",
    "department": "OPD",
    "vstdate": "2024-10-16",
    "vsttime": "9:57:27",
    "namesent": "ปวีณา",
    "namesent_status": "มารดา",
    "infosent": "N",
    "infosent_other": "",
    "status_sent": "D",
    "status_sent_other": "",
    "kadee": 0,
    "kadee_other": "",
    "smiv": 0,
    "smiv_1": 0,
    "smiv_2": 0,
    "smiv_3": 0,
    "smiv_4": 0,
    "badpar": 0,
    "badpar_other": "",
    "c21": "อาละวาสดทำร้ายคนอื่น",
    "c22": "",
    "c23": "Asd",
    "c24": "ไม่มี",
    "c22_1": "N",
    "c22_1_Y": "",
    "c22_1_S": "",
    "c22_2": "C",
    "c22_2_Y": "",
    "c22_3": "",
    "c22_3_Y": "",
    "c22_3_p1": 0,
    "c22_3_p2": 0,
    "c22_3_p3": 0,
    "c22_3_p4": 0,
    "c22_3_p5": 0,
    "c22_3_p5_other": "",
    "c22_4": 0,
    "c22_4_1": 0,
    "c22_4_1_text1": "",
    "c22_4_1_text2": "",
    "c22_4_1_text3": "",
    "c22_4_1_text4": "",
    "c22_4_2": 0,
    "c22_4_2_text1": "",
    "c22_4_2_text2": "",
    "c22_4_2_text3": "",
    "c22_4_2_text4": "",
    "c22_4_3": 0,
    "c22_4_3_text1": "",
    "c22_4_3_text2": "",
    "c22_4_3_text3": "",
    "c22_4_3_text4": "",
    "c22_5": "",
    "c23_1": "",
    "c23_2": "",
    "c23_3": "",
    "c23_4": "",
    "c23_5": "",
    "c23_6": "",
    "c31_1": "",
    "c31_2": "",
    "c31_3": "",
    "c31_4": "",
    "c31_5": "",
    "c32_1": "",
    "c32_2": "",
    "c32_3": "",
    "c32_4_text": "",
    "c32_5": "",
    "c32_6": "",
    "c32_7": "",
    "c32_8_text": "",
    "c32_9": "",
    "c32_10_text": "",
    "c33_1": "",
    "c33_2": "",
    "c33_3": "",
    "c33_4": "",
    "c33_5_text": "",
    "c33_6_text": "",
    "c33_7": "",
    "c33_8": "",
    "c33_9": "",
    "c33_10_text": "",
    "c34_1": "",
    "c34_2_text": "",
    "c35_1": "",
    "c35_2": "",
    "c36_1": "",
    "c36_2": "",
    "staff_register": "yuwa319",
    "d_update": "2024-10-16 09:57:27"
  },
  {
    "id": 3493,
    "hn": "560000042",
    "an": "670001877",
    "department": "OPD",
    "vstdate": "2024-11-11",
    "vsttime": "11:04:40",
    "namesent": "อุมาพร",
    "namesent_status": "มารดา",
    "infosent": "S",
    "infosent_other": "",
    "status_sent": "D",
    "status_sent_other": "",
    "kadee": 0,
    "kadee_other": "",
    "smiv": 0,
    "smiv_1": 0,
    "smiv_2": 0,
    "smiv_3": 0,
    "smiv_4": 0,
    "badpar": 0,
    "badpar_other": "",
    "c21": "อาละวาสดทำร้ายคนอื่น",
    "c22": "",
    "c23": "Asd",
    "c24": "ไมมี",
    "c22_1": "N",
    "c22_1_Y": "",
    "c22_1_S": "",
    "c22_2": "N",
    "c22_2_Y": "",
    "c22_3": "",
    "c22_3_Y": "",
    "c22_3_p1": 0,
    "c22_3_p2": 0,
    "c22_3_p3": 0,
    "c22_3_p4": 0,
    "c22_3_p5": 0,
    "c22_3_p5_other": "",
    "c22_4": 0,
    "c22_4_1": 0,
    "c22_4_1_text1": "",
    "c22_4_1_text2": "",
    "c22_4_1_text3": "",
    "c22_4_1_text4": "",
    "c22_4_2": 0,
    "c22_4_2_text1": "",
    "c22_4_2_text2": "",
    "c22_4_2_text3": "",
    "c22_4_2_text4": "",
    "c22_4_3": 0,
    "c22_4_3_text1": "",
    "c22_4_3_text2": "",
    "c22_4_3_text3": "",
    "c22_4_3_text4": "",
    "c22_5": "",
    "c23_1": "",
    "c23_2": "",
    "c23_3": "",
    "c23_4": "",
    "c23_5": "",
    "c23_6": "",
    "c31_1": "",
    "c31_2": "1",
    "c31_3": "",
    "c31_4": "",
    "c31_5": "",
    "c32_1": "1",
    "c32_2": "",
    "c32_3": "",
    "c32_4_text": "",
    "c32_5": "",
    "c32_6": "",
    "c32_7": "",
    "c32_8_text": "",
    "c32_9": "",
    "c32_10_text": "",
    "c33_1": "",
    "c33_2": "1",
    "c33_3": "",
    "c33_4": "",
    "c33_5_text": "",
    "c33_6_text": "",
    "c33_7": "",
    "c33_8": "",
    "c33_9": "",
    "c33_10_text": "",
    "c34_1": "1",
    "c34_2_text": "",
    "c35_1": "1",
    "c35_2": "",
    "c36_1": "0",
    "c36_2": "0",
    "staff_register": "yuwa228",
    "d_update": "2024-11-11 11:04:40"
  },
  {
    "id": 3494,
    "hn": "680001290",
    "an": "680001985",
    "department": "OPD",
    "vstdate": "2026-01-10",
    "vsttime": "23:56:19",
    "namesent": "ปวีณา",
    "namesent_status": "มารดา",
    "infosent": "S",
    "infosent_other": "",
    "status_sent": "D",
    "status_sent_other": "",
    "kadee": 0,
    "kadee_other": "",
    "smiv": 0,
    "smiv_1": 0,
    "smiv_2": 0,
    "smiv_3": 0,
    "smiv_4": 0,
    "badpar": 0,
    "badpar_other": "",
    "c21": "คิดอยากตาย 1 วันก่อนมาโรงพยาบาล",
    "c22": "4 เดือน มีเครียด เก็บตัว เริ่มมีเก็บมีดและกรีดแขนตนเอง รู้สึกตนเองภาพลักษณ์ไม่ดี\r\n",
    "c23": "ไม่มี",
    "c24": "เคยกรีดแขนตนเอง",
    "c22_1": "C",
    "c22_1_Y": "",
    "c22_1_S": "",
    "c22_2": "C",
    "c22_2_Y": "",
    "c22_3": "",
    "c22_3_Y": "",
    "c22_3_p1": 0,
    "c22_3_p2": 0,
    "c22_3_p3": 0,
    "c22_3_p4": 0,
    "c22_3_p5": 0,
    "c22_3_p5_other": "",
    "c22_4": 0,
    "c22_4_1": 0,
    "c22_4_1_text1": "",
    "c22_4_1_text2": "",
    "c22_4_1_text3": "",
    "c22_4_1_text4": "",
    "c22_4_2": 0,
    "c22_4_2_text1": "",
    "c22_4_2_text2": "",
    "c22_4_2_text3": "",
    "c22_4_2_text4": "",
    "c22_4_3": 0,
    "c22_4_3_text1": "",
    "c22_4_3_text2": "",
    "c22_4_3_text3": "",
    "c22_4_3_text4": "",
    "c22_5": "มีประจำเดือนแล้ว มาปกติทุกเดือน",
    "c23_1": "สมส่วน",
    "c23_2": "ขาวเหลือง",
    "c23_3": "มีรอยแผลเป็นจากการกรีดแขนที่แขนสองข้าง",
    "c23_4": "ไม่มี",
    "c23_5": "ปกติ",
    "c23_6": "ไม่มี",
    "c31_1": "",
    "c31_2": "",
    "c31_3": "1",
    "c31_4": "",
    "c31_5": "",
    "c32_1": "",
    "c32_2": "",
    "c32_3": "",
    "c32_4_text": "กรีดแขน",
    "c32_5": "",
    "c32_6": "",
    "c32_7": "",
    "c32_8_text": "",
    "c32_9": "",
    "c32_10_text": "",
    "c33_1": "",
    "c33_2": "",
    "c33_3": "",
    "c33_4": "",
    "c33_5_text": "",
    "c33_6_text": "",
    "c33_7": "",
    "c33_8": "",
    "c33_9": "",
    "c33_10_text": "คิดลบ โทษตนเอง",
    "c34_1": "1",
    "c34_2_text": "",
    "c35_1": "1",
    "c35_2": "",
    "c36_1": "0",
    "c36_2": "0",
    "staff_register": "yuwa231",
    "d_update": "2026-01-10 23:56:19"
  },
  {
    "id": 3495,
    "hn": "680001290",
    "an": "680001962",
    "department": "",
    "vstdate": "2026-01-11",
    "vsttime": "0:00:19",
    "namesent": "ปวีณา",
    "namesent_status": "มารดา",
    "infosent": "N",
    "infosent_other": "",
    "status_sent": "",
    "status_sent_other": "",
    "kadee": 0,
    "kadee_other": "",
    "smiv": 0,
    "smiv_1": 0,
    "smiv_2": 0,
    "smiv_3": 0,
    "smiv_4": 0,
    "badpar": 0,
    "badpar_other": "",
    "c21": "คิดอยากตาย 1 วันก่อนมาโรงพยาบาล",
    "c22": "4 เดือน มีเครียด เก็บตัว เริ่มมีเก็บมีดและกรีดแขนตนเอง รู้สึกตนเองภาพลักษณ์ไม่ดี\r\n",
    "c23": "ไม่มี",
    "c24": "ไมมี",
    "c22_1": "N",
    "c22_1_Y": "",
    "c22_1_S": "",
    "c22_2": "N",
    "c22_2_Y": "",
    "c22_3": "",
    "c22_3_Y": "",
    "c22_3_p1": 0,
    "c22_3_p2": 0,
    "c22_3_p3": 0,
    "c22_3_p4": 0,
    "c22_3_p5": 0,
    "c22_3_p5_other": "",
    "c22_4": 0,
    "c22_4_1": 0,
    "c22_4_1_text1": "",
    "c22_4_1_text2": "",
    "c22_4_1_text3": "",
    "c22_4_1_text4": "",
    "c22_4_2": 0,
    "c22_4_2_text1": "",
    "c22_4_2_text2": "",
    "c22_4_2_text3": "",
    "c22_4_2_text4": "",
    "c22_4_3": 0,
    "c22_4_3_text1": "",
    "c22_4_3_text2": "",
    "c22_4_3_text3": "",
    "c22_4_3_text4": "",
    "c22_5": "มีประจำเดือนแล้ว มาปกติทุกเดือน",
    "c23_1": "สมส่วน",
    "c23_2": "ขาวเหลือง",
    "c23_3": "มีรอยแผลเป็นจากการกรีดแขนที่แขนสองข้าง",
    "c23_4": "ไม่มี",
    "c23_5": "ปกติ",
    "c23_6": "ไม่มี",
    "c31_1": "",
    "c31_2": "",
    "c31_3": "1",
    "c31_4": "",
    "c31_5": "",
    "c32_1": "",
    "c32_2": "",
    "c32_3": "",
    "c32_4_text": "กรีดแขน",
    "c32_5": "",
    "c32_6": "",
    "c32_7": "",
    "c32_8_text": "",
    "c32_9": "",
    "c32_10_text": "",
    "c33_1": "",
    "c33_2": "",
    "c33_3": "",
    "c33_4": "",
    "c33_5_text": "",
    "c33_6_text": "",
    "c33_7": "",
    "c33_8": "",
    "c33_9": "",
    "c33_10_text": "คิดลบ โทษตนเอง",
    "c34_1": "1",
    "c34_2_text": "",
    "c35_1": "1",
    "c35_2": "",
    "c36_1": "0",
    "c36_2": "0",
    "staff_register": "yuwa231",
    "d_update": "2026-01-11 00:01:02"
  },
  {
    "id": 3496,
    "hn": "680001290",
    "an": "680001920",
    "department": "IPD",
    "vstdate": "2026-01-11",
    "vsttime": "23:35:45",
    "namesent": "ปวีณา",
    "namesent_status": "มารดา",
    "infosent": "S",
    "infosent_other": "",
    "status_sent": "D",
    "status_sent_other": "",
    "kadee": 0,
    "kadee_other": "",
    "smiv": 0,
    "smiv_1": 0,
    "smiv_2": 0,
    "smiv_3": 0,
    "smiv_4": 0,
    "badpar": 0,
    "badpar_other": "",
    "c21": "คิดอยากตาย 1 วันก่อนมาโรงพยาบาล",
    "c22": "",
    "c23": "ไม่มี",
    "c24": "ไมมี",
    "c22_1": "N",
    "c22_1_Y": "",
    "c22_1_S": "",
    "c22_2": "N",
    "c22_2_Y": "",
    "c22_3": "",
    "c22_3_Y": "",
    "c22_3_p1": 0,
    "c22_3_p2": 0,
    "c22_3_p3": 0,
    "c22_3_p4": 0,
    "c22_3_p5": 0,
    "c22_3_p5_other": "",
    "c22_4": 0,
    "c22_4_1": 0,
    "c22_4_1_text1": "",
    "c22_4_1_text2": "",
    "c22_4_1_text3": "",
    "c22_4_1_text4": "",
    "c22_4_2": 0,
    "c22_4_2_text1": "",
    "c22_4_2_text2": "",
    "c22_4_2_text3": "",
    "c22_4_2_text4": "",
    "c22_4_3": 0,
    "c22_4_3_text1": "",
    "c22_4_3_text2": "",
    "c22_4_3_text3": "",
    "c22_4_3_text4": "",
    "c22_5": "มีประจำเดือนแล้ว มาปกติทุกเดือน",
    "c23_1": "สมส่วน",
    "c23_2": "ขาวเหลือง",
    "c23_3": "มีรอยแผลเป็นจากการกรีดแขนที่แขนสองข้าง",
    "c23_4": "ไม่มี",
    "c23_5": "ปกติ",
    "c23_6": "ไม่มี",
    "c31_1": "",
    "c31_2": "",
    "c31_3": "1",
    "c31_4": "",
    "c31_5": "",
    "c32_1": "",
    "c32_2": "",
    "c32_3": "",
    "c32_4_text": "กรีดแขน",
    "c32_5": "",
    "c32_6": "",
    "c32_7": "",
    "c32_8_text": "",
    "c32_9": "",
    "c32_10_text": "",
    "c33_1": "",
    "c33_2": "",
    "c33_3": "",
    "c33_4": "",
    "c33_5_text": "",
    "c33_6_text": "",
    "c33_7": "",
    "c33_8": "",
    "c33_9": "",
    "c33_10_text": "คิดลบ โทษตนเอง",
    "c34_1": "1",
    "c34_2_text": "",
    "c35_1": "1",
    "c35_2": "",
    "c36_1": "0",
    "c36_2": "0",
    "staff_register": "yuwa231",
    "d_update": "2026-01-11 23:35:45"
  }
]
```
