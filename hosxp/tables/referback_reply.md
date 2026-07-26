# `referback_reply`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hcode | varchar(5) | NO | PRI |  |  |  |
| referback_no | varchar(20) | NO | PRI |  |  |  |
| referback_date | datetime | YES |  | NULL |  |  |
| referback_time | varchar(10) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| pname | varchar(20) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| age | varchar(10) | YES |  | NULL |  |  |
| doctor_id | varchar(100) | YES |  | NULL |  |  |
| refer_hospcode | varchar(5) | YES |  | NULL |  |  |
| cause_referback_id | varchar(3) | YES |  | NULL |  |  |
| hhc_detail | text | YES |  | NULL |  |  |
| receive_no | varchar(20) | YES |  | NULL |  |  |
| receive_date | datetime | YES |  | NULL |  |  |
| receive_time | varchar(5) | YES |  | NULL |  |  |
| receive_station_id | varchar(5) | YES |  | NULL |  |  |
| receive_spclty_id | varchar(5) | YES |  | NULL |  |  |
| sex | varchar(45) | YES |  | NULL |  |  |
| memo | text | YES |  | NULL |  |  |
| memodiag | text | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| drugallergy | varchar(900) | YES |  | NULL |  |  |
| user_save | varchar(150) | YES |  | NULL |  |  |
| vn | varchar(150) | YES |  | NULL |  |  |
| telephone | varchar(150) | YES |  | NULL |  |  |
| patient_move | varchar(150) | YES |  | NULL |  |  |
| O2 | varchar(150) | YES |  | NULL |  |  |
| patient_move_etc | varchar(2000) | YES |  | NULL |  |  |
| conscious | varchar(150) | YES |  | NULL |  |  |
| e | varchar(150) | YES |  | NULL |  |  |
| v | varchar(150) | YES |  | NULL |  |  |
| m | varchar(150) | YES |  | NULL |  |  |
| evm_total | varchar(150) | YES |  | NULL |  |  |
| pupil_right | varchar(150) | YES |  | NULL |  |  |
| pupil_left | varchar(150) | YES |  | NULL |  |  |
| t | varchar(150) | YES |  | NULL |  |  |
| p | varchar(150) | YES |  | NULL |  |  |
| r | varchar(150) | YES |  | NULL |  |  |
| bp | varchar(150) | YES |  | NULL |  |  |
| spo2 | varchar(150) | YES |  | NULL |  |  |
| load_detail | varchar(500) | YES |  | NULL |  |  |
| pick_drug | varchar(50) | YES |  | NULL |  |  |
| get_drug | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(50) | YES |  | NULL |  |  |
| ward | varchar(500) | YES |  | NULL |  |  |
| rightname | varchar(500) | YES |  | NULL |  |  |
| admitdate | datetime | YES |  | NULL |  |  |
| suction | varchar(50) | YES |  | NULL |  |  |
| respirator | varchar(50) | YES |  | NULL |  |  |
| nurse | varchar(50) | YES |  | NULL |  |  |
| doctor | varchar(50) | YES |  | NULL |  |  |
| etc | varchar(2000) | YES |  | NULL |  |  |
| dischdate | datetime | YES |  | NULL |  |  |
| memofollowup | varchar(8000) | YES |  | NULL |  |  |
| from_hospname | varchar(1500) | YES |  | NULL |  |  |
| to_hospname | varchar(1500) | YES |  | NULL |  |  |
| cause_referback_name | varchar(500) | YES |  | NULL |  |  |
| location_id | varchar(50) | YES |  | NULL |  |  |
| location_name | varchar(500) | YES |  | NULL |  |  |
| referback_patient_type | varchar(50) | YES |  | NULL |  |  |
| savedatadate | datetime | YES |  | NULL |  |  |
| savedatatime | varchar(50) | YES |  | NULL |  |  |
| referout_no | varchar(50) | YES |  | NULL |  |  |
| warfarin_note | varchar(1500) | YES |  | NULL |  |  |
| doctorstaff_id | varchar(10) | YES |  | NULL |  |  |
| doctorstaff_name | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hcode | yes | 1 |
| PRIMARY | referback_no | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "hcode": "10672",
    "referback_no": "10672-3-55001554",
    "referback_date": "2012-12-18 00:00:00",
    "referback_time": "14:15",
    "cid": "1xxxxxxxxxxxx",
    "pname": "คุณ",
    "fname": "[MASKED_FNAME]",
    "lname": "[MASKED_LNAME]",
    "age": "060-02-15",
    "doctor_id": "23287",
    "refer_hospcode": "11147",
    "cause_referback_id": "1",
    "hhc_detail": "",
    "receive_no": null,
    "receive_date": null,
    "receive_time": null,
    "receive_station_id": null,
    "receive_spclty_id": null,
    "sex": "หญิง",
    "memo": "ผู้ป่วยรู้ตัว อ่อนเพลีย เหนื่อยเล็กน้อย",
    "memodiag": "AKI with ARDS with A haum VAP",
    "doctor_name": "[MASKED_FULLNAME]",
    "drugallergy": "ปฏิเสธ",
    "user_save": null,
    "vn": null,
    "telephone": "8600",
    "patient_move": "เปลนอน",
    "O2": "True",
    "patient_move_etc": "NULL",
    "conscious": "0",
    "e": "4",
    "v": "5",
    "m": "6",
    "evm_total": null,
    "pupil_right": "3",
    "pupil_left": "3",
    "t": "37.7",
    "p": "100",
    "r": "22",
    "bp": "150/90",
    "spo2": null,
    "load_detail": "รถ Refer ของรพช. มารับ",
    "pick_drug": "False",
    "get_drug": "False",
    "hn": "4316890",
    "ward": "อายุรกรรมหญิง 1",
    "rightname": "สิทธิเบิกหน่วยราชการ",
    "admitdate": "2012-12-01 00:00:00",
    "suction": "False",
    "respirator": "False",
    "nurse": "False",
    "doctor": "False",
    "etc": "NULL",
    "dischdate": null,
    "memofollowup": "",
    "from_hospname": "ลำปาง, โรงพยาบาล",
    "to_hospname": "เกาะคา, รพช.",
    "cause_referback_name": "Admit รักษาต่อเนื่อง",
    "location_id": "14",
    "location_name": "อายุรกรรมหญิง 1",
    "referback_patient_type": "IPD",
    "savedatadate": "2012-12-18 00:00:00",
    "savedatatime": "15:48",
    "referout_no": "11147-1-55004833",
    "warfarin_note": "",
    "doctorstaff_id": null,
    "doctorstaff_name": null
  },
  {
    "hcode": "10672",
    "referback_no": "10672-3-55001566",
    "referback_date": "2012-12-21 00:00:00",
    "referback_time": "10:29",
    "cid": "1xxxxxxxxxxxx",
    "pname": "คุณ",
    "fname": "[MASKED_FNAME]",
    "lname": "[MASKED_LNAME]",
    "age": "056-09-15",
    "doctor_id": "17889",
    "refer_hospcode": "11147",
    "cause_referback_id": "1",
    "hhc_detail": "",
    "receive_no": null,
    "receive_date": null,
    "receive_time": null,
    "receive_station_id": null,
    "receive_spclty_id": null,
    "sex": "ชาย",
    "memo": "รู้สึกตัวดี\r\nหายใจเหนื่อยเล้กน้อย ไม่มีไข้\r\nOn O2 ",
    "memodiag": "AspiratePneumonia",
    "doctor_name": "[MASKED_FULLNAME]",
    "drugallergy": "",
    "user_save": null,
    "vn": null,
    "telephone": "8711",
    "patient_move": "เปลนอน",
    "O2": "True",
    "patient_move_etc": "NULL",
    "conscious": "1",
    "e": "4",
    "v": "5",
    "m": "5",
    "evm_total": null,
    "pupil_right": null,
    "pupil_left": null,
    "t": "36.8",
    "p": "88",
    "r": "22",
    "bp": "120/80",
    "spo2": "98",
    "load_detail": "รถ Refer ของรพช. มารับ",
    "pick_drug": "True",
    "get_drug": "False",
    "hn": "5126220",
    "ward": "อายุรกรรมชาย 2",
    "rightname": "ผู้ประกันตน รพ.ลำปาง",
    "admitdate": "2012-12-10 00:00:00",
    "suction": "True",
    "respirator": "False",
    "nurse": "True",
    "doctor": "False",
    "etc": "NULL",
    "dischdate": null,
    "memofollowup": "meropenam 1 gm q 8 hr\r\nO2 theraphy",
    "from_hospname": "ลำปาง, โรงพยาบาล",
    "to_hospname": "เกาะคา, รพช.",
    "cause_referback_name": "Admit รักษาต่อเนื่อง",
    "location_id": "12",
    "location_name": "อายุรกรรมชาย 2",
    "referback_patient_type": "IPD",
    "savedatadate": "2012-12-21 00:00:00",
    "savedatatime": "11:51",
    "referout_no": "11147-1-55004936",
    "warfarin_note": "",
    "doctorstaff_id": null,
    "doctorstaff_name": null
  }
]
```
