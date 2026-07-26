# `doctor_consult_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_consult_history_id | int(11) | NO | PRI | 0 |  |  |
| consult_id | int(11) | YES | MUL | NULL |  |  |
| reply_date | date | YES |  | NULL |  |  |
| reply_time | time | YES |  | NULL |  |  |
| reply_doctor | varchar(7) | YES |  | NULL |  |  |
| consult_reply | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_consult_id | consult_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_consult_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_consult_history_id": 1,
    "consult_id": 1,
    "reply_date": "2009-11-25",
    "reply_time": "16:14:00",
    "reply_doctor": "069",
    "consult_reply": "methydopa 1*1 pc",
    "hos_guid": null
  },
  {
    "doctor_consult_history_id": 2,
    "consult_id": 3,
    "reply_date": "2009-12-08",
    "reply_time": "15:32:09",
    "reply_doctor": "070",
    "consult_reply": "มีปัญหาเจ็บขากรรไกรล่างด้านซ้ายเวลาเคี้ยวของแข็ง ทำให้อ้าปากได้แคบลง แนะนำให้พยายามฝึกอ้าปาก ทานยาคลายกล้ามเนื้อถ้ามีอาการปวด   observed อาการดูสักระยะหนึ่งก่อน ถ้าไม่ดีขึ้นก็ให้กลับมาตรวจอีกครั้ง",
    "hos_guid": null
  },
  {
    "doctor_consult_history_id": 3,
    "consult_id": 5,
    "reply_date": "2009-12-15",
    "reply_time": "9:37:37",
    "reply_doctor": "055",
    "consult_reply": "off asa  7 day  ka",
    "hos_guid": null
  },
  {
    "doctor_consult_history_id": 4,
    "consult_id": 7,
    "reply_date": "2009-12-22",
    "reply_time": "9:30:21",
    "reply_doctor": "055",
    "consult_reply": "o.k  จัดให้",
    "hos_guid": null
  },
  {
    "doctor_consult_history_id": 5,
    "consult_id": 8,
    "reply_date": "2009-12-24",
    "reply_time": "9:13:34",
    "reply_doctor": "055",
    "consult_reply": "off  asa   7   days   ",
    "hos_guid": null
  },
  {
    "doctor_consult_history_id": 6,
    "consult_id": 9,
    "reply_date": "2009-12-29",
    "reply_time": "13:36:49",
    "reply_doctor": "055",
    "consult_reply": "off  aspent  7  days ",
    "hos_guid": null
  },
  {
    "doctor_consult_history_id": 7,
    "consult_id": 10,
    "reply_date": "2009-12-30",
    "reply_time": "13:55:20",
    "reply_doctor": "055",
    "consult_reply": "o.k.",
    "hos_guid": null
  },
  {
    "doctor_consult_history_id": 8,
    "consult_id": 14,
    "reply_date": "2010-01-07",
    "reply_time": "10:17:59",
    "reply_doctor": "055",
    "consult_reply": "off  asa   7  days",
    "hos_guid": null
  }
]
```
