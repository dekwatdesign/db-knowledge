# `ipd_nurse_eval_type_score`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_eval_type_score_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_eval_type_id | int(11) | YES | MUL | NULL |  |  |
| score | int(11) | YES | MUL | NULL |  |  |
| description | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id_score | ipd_nurse_eval_type_id | no | 1 |
| ix_id_score | score | no | 2 |
| ix_id_score_index | score | no | 1 |
| ix_id_score_index | ipd_nurse_eval_type_id | no | 2 |
| PRIMARY | ipd_nurse_eval_type_score_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_nurse_eval_type_score_id": 1,
    "ipd_nurse_eval_type_id": 1,
    "score": 1,
    "description": "สัญญาณชีพคงที่และมีโอกาสเปลี่ยนได้น้อย ต้องการการเฝ้าระวัง วันละ 1-2 ครั้ง\r\n"
  },
  {
    "ipd_nurse_eval_type_score_id": 2,
    "ipd_nurse_eval_type_id": 1,
    "score": 2,
    "description": "สัญญาณชีพปกติแต่มีโอกาสที่จะเปลี่ยนแปลงได้ง่าย ต้องเฝ้าระวังทุก 4-6 ชั่วโมง"
  },
  {
    "ipd_nurse_eval_type_score_id": 3,
    "ipd_nurse_eval_type_id": 1,
    "score": 3,
    "description": "สัญญาณชีพผิดปกติแต่อยู่ในระดับที่ควบคุมได้ หรือ ข. สัญญาณชีพปกติแต่มีโอกาสเปลี่ยนแปลงได้ตลอดเวลาจำเป็นต้องเฝ้าระวังทุก 15 นาที - ทุก 2 ชั่วโมง"
  },
  {
    "ipd_nurse_eval_type_score_id": 4,
    "ipd_nurse_eval_type_id": 1,
    "score": 4,
    "description": "สัญญาณชีพผิดปกติ มีอาการ เปลี่ยนแปลงตลอดเวลา หรือมีการ เปลี่ยนแปลงอย่างรวดเร็วของ T, P, R, และ/หรือ BP รวมถึงความผิดปกติของคลื่นไฟฟ้าหัวใจในลักษณะที่บ่งบอกถึงความผิดปกติที่รุนแรง จำเป็นต้องเฝ้าระวังตลอดเวลา อย่างน้อยทุก 15 นาที"
  },
  {
    "ipd_nurse_eval_type_score_id": 5,
    "ipd_nurse_eval_type_id": 2,
    "score": 1,
    "description": "อาการ/อาการแสดงทางระบบประสาทปกติหรือคงที่"
  },
  {
    "ipd_nurse_eval_type_score_id": 6,
    "ipd_nurse_eval_type_id": 2,
    "score": 2,
    "description": "อาการ/อาการแสดงทางระบบประสาทปกติหรือคงที่ มีโอกาสเปลี่ยนแปลงน้อย ต้องการการเฝ้าระวัง เวรละ 1 ครั้ง"
  },
  {
    "ipd_nurse_eval_type_score_id": 7,
    "ipd_nurse_eval_type_id": 2,
    "score": 3,
    "description": "อาการ/อาการแสดงทางระบบประสาทผิดปกติแต่อยู่ในภาวะที่ควบคุมได้ มีโอกาสเปลี่ยนแปลงที่เลวลง ต้องการการเฝ้าระวังทุก 2-4 ชั่วโมง"
  },
  {
    "ipd_nurse_eval_type_score_id": 8,
    "ipd_nurse_eval_type_id": 2,
    "score": 4,
    "description": "มีการเปลี่ยนแปลงหรือโอกาสเปลี่ยนของ GCS ได้ตลอดเวลาต้องการเฝ้าระวังอาการ/อาการแสดงทางระบบประสาท (Neurological Signs) อย่างน้อยทุก 30 นาที - 1 ชั่วโมง"
  }
]
```
