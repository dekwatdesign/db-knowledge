# `refer_reply`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| doc_no | varchar(25) | YES | MUL | NULL |  |  |
| reply_date_time | datetime | YES |  | NULL |  |  |
| lab_text | text | YES |  | NULL |  |  |
| diagnosis_icd10 | varchar(7) | YES |  | NULL |  |  |
| treatment_text | text | YES |  | NULL |  |  |
| continue_text | text | YES |  | NULL |  |  |
| reply_doctor | varchar(7) | YES |  | NULL |  |  |
| dest_hospcode | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| reply_date | date | YES |  | NULL |  |  |
| reply_time | time | YES |  | NULL |  |  |
| diagnosis_text | text | YES |  | NULL |  |  |
| check_accept | char(1) | YES |  | NULL |  |  |
| check_medadj | char(1) | YES |  | NULL |  |  |
| check_consult | char(1) | YES |  | NULL |  |  |
| advice_text | text | YES |  | NULL |  |  |
| refer_reply_status_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_no | doc_no | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "vn": "560501083118",
    "doc_no": "1",
    "reply_date_time": "1899-12-30 12:59:00",
    "lab_text": null,
    "diagnosis_icd10": "F840",
    "treatment_text": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ  1 \rพฤติกรรมบำบัด  1 \rกระตุ้นพัฒนาการ  1 \rกระตุ้นประสาทสัมผัสทั้ง 5  1 \r",
    "continue_text": "ติดตามพฤติกรรมอย่างใกล้ชิด และให้รับประทานยาอย่างสม่ำเสมอ",
    "reply_doctor": "256",
    "dest_hospcode": "10685",
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "reply_date": null,
    "reply_time": null,
    "diagnosis_text": null,
    "check_accept": null,
    "check_medadj": null,
    "check_consult": null,
    "advice_text": null,
    "refer_reply_status_id": null
  },
  {
    "vn": "571021090032",
    "doc_no": "2",
    "reply_date_time": "2014-10-21 15:00:00",
    "lab_text": "????????????????????????",
    "diagnosis_icd10": "F900",
    "treatment_text": null,
    "continue_text": null,
    "reply_doctor": null,
    "dest_hospcode": "00000",
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "reply_date": null,
    "reply_time": null,
    "diagnosis_text": null,
    "check_accept": null,
    "check_medadj": null,
    "check_consult": null,
    "advice_text": null,
    "refer_reply_status_id": null
  },
  {
    "vn": "600809073000",
    "doc_no": "13",
    "reply_date_time": "2017-08-03 01:20:00",
    "lab_text": "ส่งการรักษา",
    "diagnosis_icd10": "F840",
    "treatment_text": null,
    "continue_text": null,
    "reply_doctor": null,
    "dest_hospcode": "10685",
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "reply_date": null,
    "reply_time": null,
    "diagnosis_text": null,
    "check_accept": null,
    "check_medadj": null,
    "check_consult": null,
    "advice_text": null,
    "refer_reply_status_id": null
  }
]
```
