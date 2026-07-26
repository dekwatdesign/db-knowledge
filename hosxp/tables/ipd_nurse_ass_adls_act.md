# `ipd_nurse_ass_adls_act`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_ass_adls_act_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_ass_adls_act_name | varchar(250) | YES |  | NULL |  |  |
| ipd_nurse_ass_adls_act_note | varchar(250) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ipd_nurse_ass_adls_act_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_nurse_ass_adls_act_id": 1,
    "ipd_nurse_ass_adls_act_name": "Feeding",
    "ipd_nurse_ass_adls_act_note": "การรับประทานอาหาร",
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_act_id": 2,
    "ipd_nurse_ass_adls_act_name": "Grooming",
    "ipd_nurse_ass_adls_act_note": "การล้างหน้า หวีผม แปรวงฟัน โกนหนวดในระยะเวลา 24-48 ชั่วโมงที่ผ่านมา",
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_act_id": 3,
    "ipd_nurse_ass_adls_act_name": "Transfer",
    "ipd_nurse_ass_adls_act_note": "ลุกจากที่นอนหรือจากเตียงไปยังเก้าอี้",
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_act_id": 4,
    "ipd_nurse_ass_adls_act_name": "Toilet  Use",
    "ipd_nurse_ass_adls_act_note": "การใช้ห้องน้ำ",
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_act_id": 5,
    "ipd_nurse_ass_adls_act_name": "Bathing",
    "ipd_nurse_ass_adls_act_note": "การอาบน้ำ",
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_act_id": 6,
    "ipd_nurse_ass_adls_act_name": "Dressing",
    "ipd_nurse_ass_adls_act_note": "การสวมใส่เสื้อผ้า",
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_act_id": 7,
    "ipd_nurse_ass_adls_act_name": "Mobility",
    "ipd_nurse_ass_adls_act_note": "การเคลื่อย้ายตนเองภายในห้อง/บ้าน",
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_act_id": 8,
    "ipd_nurse_ass_adls_act_name": "Stairs",
    "ipd_nurse_ass_adls_act_note": "การขึ้นลงบันใน 1 ชั้น",
    "active_status": "Y"
  }
]
```
