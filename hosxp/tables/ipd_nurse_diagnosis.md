# `ipd_nurse_diagnosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_diagnosis_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| diag_start_datetime | datetime | YES |  | NULL |  |  |
| diag_finish_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| diagnosis_text | text | YES |  | NULL |  |  |
| target_text | text | YES |  | NULL |  |  |
| plan_text | text | YES |  | NULL |  |  |
| evaluation_text | text | YES |  | NULL |  |  |
| problem_solved | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipd_nurse_diagnosis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ipd_nurse_diagnosis_id": 4,
    "an": "690000010",
    "diag_start_datetime": "2026-01-12 13:31:11",
    "diag_finish_datetime": "2026-01-12 00:00:00",
    "doctor_code": "251",
    "diagnosis_text": "ผู้ปกครองขาดทักษะการปรับพฤติกรรม",
    "target_text": "ผู้ปกครองสามารถจัดการพฤติกรรมผู้ป่วยได้",
    "plan_text": "1.ฝึกวิเคราะห์พฤติกรรม\r\n2.ฝึกวางเงื่อนไข และให้แรงเสริม\r\n3.ฝึกการสื่อสารเชิงบวก และคำชม\r\n3. role play และสถานการณ์จริง",
    "evaluation_text": "ผู้ปกครองสามารรถวิเคราะห์พฤติกรรม และวางเงื่อนไขได้ ผู้ป่วยมีหงุดหงิดไม่อยากทำกิจกรรม ผู้ปกครองสามารถยืนยันกติกาได้",
    "problem_solved": "N"
  },
  {
    "ipd_nurse_diagnosis_id": 5,
    "an": "690000058",
    "diag_start_datetime": "2026-01-14 10:38:22",
    "diag_finish_datetime": "2026-01-13 00:00:00",
    "doctor_code": "251",
    "diagnosis_text": "ผู้ปกครองบกพร่องทักษะการปรับพฤติกรรม",
    "target_text": "ผู้ปกครองสามารถวางเงื่อนไขและปรับพฤติกรรมได้",
    "plan_text": "-ฝึกผู้ปกครองในการวางเงื่อนไขและปรับพฤติกรรม\r\n-วางกติกาและตารางกิจกรรมร่วมกับผู้ป่วยและผู้ปกครอง",
    "evaluation_text": "ผู้ปกครองสามารถวางเงื่อนไขและจัดการพฤติกรรมได้",
    "problem_solved": "N"
  }
]
```
