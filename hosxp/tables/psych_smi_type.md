# `psych_smi_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_smi_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_smi_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_smi_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psych_smi_type_id": 1,
    "psych_smi_type_name": "มีประวัติทำร้ายตัวเองด้วยวิธีรุนแรงมุ่งหวังให้เสียชีวิต",
    "active": null
  },
  {
    "psych_smi_type_id": 2,
    "psych_smi_type_name": "มีประวัติทำร้ายผู้อื่นด้วยวิธีรุนแรง / ก่อเหตุการณ์รุนแรงในชุมชน",
    "active": null
  },
  {
    "psych_smi_type_id": 3,
    "psych_smi_type_name": "ผู้ป่วยที่มีอาการหลงผิด มีความคิดทำร้ายผู้อื่นให้ถึงแก่ชีวิต หรือมุ่งร้ายผู้อื่นแบบเฉพาะเจาะจง เช่น ระบุชื่อบุคคลที่จะมุ่งร้าย",
    "active": null
  },
  {
    "psych_smi_type_id": 4,
    "psych_smi_type_name": "เคยมีประวัติก่อคดีอาญารุนแรง (ฆ่า พยายามฆ่า ข่มขืน วางพลิง)",
    "active": null
  }
]
```
