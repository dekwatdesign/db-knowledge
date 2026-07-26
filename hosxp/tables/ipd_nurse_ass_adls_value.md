# `ipd_nurse_ass_adls_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_ass_adls_value_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_ass_adls_act_id | int(11) | YES |  | NULL |  |  |
| value_name | varchar(250) | YES |  | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ipd_nurse_ass_adls_value_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_nurse_ass_adls_value_id": 1,
    "ipd_nurse_ass_adls_act_id": 1,
    "value_name": "ไม่สามารถตักอาหารเข้าปากได้",
    "score": 0,
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_value_id": 2,
    "ipd_nurse_ass_adls_act_id": 1,
    "value_name": "ตักอาหารเองได้ แต่ต้องมีคนช่วย เช่น ตักเป็นชิ้นเล็กๆให้",
    "score": 1,
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_value_id": 3,
    "ipd_nurse_ass_adls_act_id": 1,
    "value_name": "ตักอาหารและช่วยตัวเองได้ปกติ",
    "score": 2,
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_value_id": 4,
    "ipd_nurse_ass_adls_act_id": 2,
    "value_name": "ต้องการความช่วยเหลือ",
    "score": 0,
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_value_id": 5,
    "ipd_nurse_ass_adls_act_id": 2,
    "value_name": "ทำได้เอง(รวมทั้งที่ทำได้เองถ้าเตรียมอุปกรณ์ไว้ให้)",
    "score": 1,
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_value_id": 6,
    "ipd_nurse_ass_adls_act_id": 3,
    "value_name": "ไม่สามารถนั่งได้(นั่งแล้วจะล้มเสมอ)หรือต้องใช้คน 2 คนช่วยกันยก",
    "score": 0,
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_value_id": 7,
    "ipd_nurse_ass_adls_act_id": 3,
    "value_name": "ต้องใช้คนแข็งแรงหรือมีทักษะ 1 คน /คนทั่วไป 2 คน พยุงหรือดันขึ้นมาถึงจะนั่งได้",
    "score": 1,
    "active_status": "Y"
  },
  {
    "ipd_nurse_ass_adls_value_id": 8,
    "ipd_nurse_ass_adls_act_id": 3,
    "value_name": "ต้องการความช่วยเหลือบ้าง เช่น ช่วยพยุงเล็กน้อย/ต้องมีคนดูแล",
    "score": 2,
    "active_status": "Y"
  }
]
```
