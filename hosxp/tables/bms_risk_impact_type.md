# `bms_risk_impact_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_impact_type_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_impact_type_code | char(1) | YES |  | NULL |  |  |
| bms_risk_impact_level | int(11) | YES |  | NULL |  |  |
| impact_person_text | text | YES |  | NULL |  |  |
| impact_asses_text | text | YES |  | NULL |  |  |
| impact_system_text | text | YES |  | NULL |  |  |
| impact_represent_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | bms_risk_impact_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "bms_risk_impact_type_id": 1,
    "bms_risk_impact_type_code": "A",
    "bms_risk_impact_level": 1,
    "impact_person_text": "ดักจับได้ โดยหน่วยงาน ก่อนที่จะไปถึงผู้ป่วย/เจ้าหน้าที่ ",
    "impact_asses_text": "-",
    "impact_system_text": "-",
    "impact_represent_text": "-\r\n"
  },
  {
    "bms_risk_impact_type_id": 2,
    "bms_risk_impact_type_code": "B",
    "bms_risk_impact_level": 1,
    "impact_person_text": "เกิดความคลาดเคลื่อนขึ้น   \r\nแต่ สามารถตรวจพบได้ก่อน\r\n ยังไม่ถึงตัวผู้ป่วย/ เจ้าหน้าที่",
    "impact_asses_text": "-",
    "impact_system_text": "-",
    "impact_represent_text": "-"
  },
  {
    "bms_risk_impact_type_id": 3,
    "bms_risk_impact_type_code": "C",
    "bms_risk_impact_level": 2,
    "impact_person_text": "ส่งผลกระทบ ถึง ผู้ป่วย\r\nเจ้าหน้าที่\r\nแต่ไม่ได้รับอันตราย",
    "impact_asses_text": "ทรัพย์สินเสียหาย เล็กน้อย อุปกรณ์ชำรุด มูลค่าความเสียหายไม่เกิน 1,000บาท",
    "impact_system_text": "เริ่มมีผลกระทบต่อภารกิจหลักของหน่วยงาน แก้ไขภายในหน่วยงาน ผลเป็นที่น่าพอใจ",
    "impact_represent_text": "-"
  },
  {
    "bms_risk_impact_type_id": 4,
    "bms_risk_impact_type_code": "D",
    "bms_risk_impact_level": 2,
    "impact_person_text": " ต้องมีการเฝ้าระวังเพิ่มเติม  เพื่อให้มั่นใจว่าไม่เกิดอันตราย ",
    "impact_asses_text": "ทรัพย์สินเสียหาย มูลค่า> 1,000  5,000 บาท",
    "impact_system_text": "ภารกิจหยุดชะงักชั่วคราวต้องมีการเฝ้าระวังแก้ไขภายในน่วยงาน และต้องมีการปรับระบบงานภายใน ",
    "impact_represent_text": "ถูกร้องเรียนภายในโรงพยาบาล ระบุชื่อยังไม่แพร่กระจายออกนอก รพ."
  },
  {
    "bms_risk_impact_type_id": 5,
    "bms_risk_impact_type_code": "E",
    "bms_risk_impact_level": 3,
    "impact_person_text": "เกิดอันตราย (harm) ชั่วคราว ต้องมีการรักษาหรือแก้ไขเพิ่มเติม  ",
    "impact_asses_text": "ทรัพย์สินเสียหาย มูลค่า >5,000-10,000  บาท",
    "impact_system_text": "มีผลกระทบต่อนอกหน่วยงาน ต้องวิเคราะห์ สาเหตุ   ปรับระบบงานภายใน ร่วมกัน ",
    "impact_represent_text": "บุคคลภายนอกหน่วยงานเริ่มทราบเรื่อง  อาจเกิดการเสียชื่อเสียงของรพ. แต่ควบคุมได้ "
  },
  {
    "bms_risk_impact_type_id": 6,
    "bms_risk_impact_type_code": "F",
    "bms_risk_impact_level": 3,
    "impact_person_text": "เกิดอันตราย(harm) เป็นการชั่วคราว ต้องรับไว้นอนโรงพยาบาล  หรือนอนโรงพยาบาลนานขึ้น",
    "impact_asses_text": "ทรัพย์สินเสียหายมูลค่า  > 10,000-20,000  บาท",
    "impact_system_text": "มีผลกระทบต่อนอกหน่วยงาน ต้องวิเคราะห์ สาเหตุ ปรับระบบงานที่สำคัญ ร่วมกับทีมนำ",
    "impact_represent_text": "มีบุคคลภายนอกทราบเรื่อง        มีแนวโน้มจะเกิดการร้องเรียน "
  },
  {
    "bms_risk_impact_type_id": 7,
    "bms_risk_impact_type_code": "G",
    "bms_risk_impact_level": 4,
    "impact_person_text": "เกิดความสูญเสีย (harm)  เป็น อันตรายถาวร เช่น\r\nสูญเสียอวัยวะ  /พิการ ",
    "impact_asses_text": "ทรัพย์สินเสียหายมูลค่า > 20,000-50,000  บาท",
    "impact_system_text": "มีผลกระทบต่อชุมชน\r\nแก้ปัญหาระดับ รพ.",
    "impact_represent_text": "เกิดการร้องเรียนขึ้นในชุมชน "
  },
  {
    "bms_risk_impact_type_id": 8,
    "bms_risk_impact_type_code": "H",
    "bms_risk_impact_level": 4,
    "impact_person_text": "อันตรายเกือบเสียชีวิต เช่น การแพ้ยา  anaphylaxis  หัวใจหยุดเต้นต้องช่วย CPR ",
    "impact_asses_text": "ทรัพย์สินเสียหายมูลค่า  > 50,000-100,000  บาท",
    "impact_system_text": "เกิดผลกระทบต่อชุมชนและสิ่งแวดล้อม แก้ปัญหาระดับโรงพยาบาล",
    "impact_represent_text": "มีแนวโน้มเสี่ยงต่อการฟ้องร้อง และ เรียกค่าเสียหาย"
  }
]
```
