# `hd_short_dialysis_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | NULL |  |  |
| reason_name | varchar(255) | YES |  | NULL |  |  |
| dmis_export | int(11) | YES |  | NULL |  |  |
| hd_export | int(11) | YES |  | NULL |  |  |
| is_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "reason_name": "เป็นสัปดาห์แรกของการฟอก",
    "dmis_export": 1,
    "hd_export": 1,
    "is_active": "Y"
  },
  {
    "id": 2,
    "reason_name": "เส้นเลือดที่ใช้ในการฟอกเลือดมีปัญหาใช้งานไม่ได้",
    "dmis_export": 2,
    "hd_export": 2,
    "is_active": "Y"
  },
  {
    "id": 3,
    "reason_name": "ความดันโลหิตต่ำ",
    "dmis_export": 3,
    "hd_export": 3,
    "is_active": "Y"
  },
  {
    "id": 4,
    "reason_name": "ซัก หรือมีอาการเปลี่ยนแปลงระดับความรู้สึกตัว เช่น ซึมลง หรือหมดสติ",
    "dmis_export": 4,
    "hd_export": 4,
    "is_active": "Y"
  },
  {
    "id": 5,
    "reason_name": "มีภาวะไข้สูง และหนาวสั่น",
    "dmis_export": 5,
    "hd_export": 5,
    "is_active": "Y"
  },
  {
    "id": 6,
    "reason_name": "มีอาการเจ็บปวดของอวัยวะอย่างรุนแรง เช่น ปวดท้อง หรือหน้าอก",
    "dmis_export": 6,
    "hd_export": 6,
    "is_active": "Y"
  },
  {
    "id": 7,
    "reason_name": "ต้องเข้ารับการผ่าตัดเปลี่ยนไต",
    "dmis_export": 7,
    "hd_export": 7,
    "is_active": "Y"
  },
  {
    "id": 8,
    "reason_name": "ต้องเข้ารับการรักษาตัวเป็นผู้ป่วยใน หรือผู้ป่วยในห้อง ICU",
    "dmis_export": 8,
    "hd_export": 8,
    "is_active": "Y"
  }
]
```
