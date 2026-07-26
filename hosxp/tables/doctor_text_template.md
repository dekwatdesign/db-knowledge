# `doctor_text_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_text_template_id | int(11) | NO | PRI | 0 |  |  |
| template_code | varchar(50) | YES | MUL | NULL |  |  |
| doctor_code | varchar(25) | YES | MUL | NULL |  |  |
| template_name | varchar(250) | YES |  | NULL |  |  |
| template_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_template_code_doctor_code | template_code | no | 1 |
| ix_template_code_doctor_code | doctor_code | no | 2 |
| ix_template_code_doctor_code_index | doctor_code | no | 1 |
| ix_template_code_doctor_code_index | template_code | no | 2 |
| PRIMARY | doctor_text_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "doctor_text_template_id": 1,
    "template_code": "DOCTOR_NOTE",
    "doctor_code": "353",
    "template_name": "ASD  L1 L2H และ ADHD",
    "template_text": "เรียนอยู่ชั้น\r\nโรงเรียน\r\nมาติดตามนัดกับ\r\n\r\nความสามารถในการสื่อสาร\r\n\r\nความสามารถในการดูแลตนเอง\r\n\r\n\r\nความสามารถในการเรียน\r\nความรับผิดชอบ\r\nความสัมพันธ์กับเพื่อนและครู\r\nวิชาที่ชอบ\r\n\r\n\r\nความสัมพันธ์กับคนในบ้าน\r\nงานบ้าน\r\n\r\n\r\nงานอดิเรก \r\nสิ่งที่ชอบ\r\nความสนใจพิเศษแบบหมกมุ่น"
  }
]
```
