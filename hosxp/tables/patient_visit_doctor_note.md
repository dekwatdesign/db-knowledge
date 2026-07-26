# `patient_visit_doctor_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_visit_doctor_note_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| note_datetime | datetime | YES |  | NULL |  |  |
| doctor_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | patient_visit_doctor_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_visit_doctor_note_id": 1,
    "vn": "",
    "hn": "550000751",
    "doctor_code": "",
    "note_datetime": null,
    "doctor_note_text": null
  },
  {
    "patient_visit_doctor_note_id": 2,
    "vn": "",
    "hn": "560000899",
    "doctor_code": "",
    "note_datetime": null,
    "doctor_note_text": "ADHD"
  },
  {
    "patient_visit_doctor_note_id": 3,
    "vn": "600628093022",
    "hn": "530000454",
    "doctor_code": "068",
    "note_datetime": "2017-06-28 10:26:33",
    "doctor_note_text": "school report ยังมีปัญหาเรื่องเหม่อลอย วอกแวก โมโหง่าย ทำงานช้า\r\n"
  },
  {
    "patient_visit_doctor_note_id": 6,
    "vn": "",
    "hn": "530059450",
    "doctor_code": "",
    "note_datetime": null,
    "doctor_note_text": null
  },
  {
    "patient_visit_doctor_note_id": 8,
    "vn": "",
    "hn": "590001199",
    "doctor_code": "",
    "note_datetime": null,
    "doctor_note_text": null
  },
  {
    "patient_visit_doctor_note_id": 15,
    "vn": "",
    "hn": "530179143",
    "doctor_code": "",
    "note_datetime": null,
    "doctor_note_text": null
  },
  {
    "patient_visit_doctor_note_id": 16,
    "vn": "640831083001",
    "hn": "600001094",
    "doctor_code": "318",
    "note_datetime": "2021-08-31 14:32:56",
    "doctor_note_text": "อารมณ์หงุดหงิดบ้าง\r\nยังไม่คุมกำเนิด\r\nดูแลประจำเดือนไม่ได้ ยายต้องใส่ผ้าอนามัยให้"
  },
  {
    "patient_visit_doctor_note_id": 18,
    "vn": "641221095932",
    "hn": "530024345",
    "doctor_code": "062",
    "note_datetime": "2021-12-21 10:55:52",
    "doctor_note_text": "k21.9"
  }
]
```
