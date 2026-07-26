# `opd_visit_symptom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| symptom_name | varchar(200) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | symptom_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "symptom_name": "well baby clinic"
  },
  {
    "symptom_name": "การตรวจสุขภาพทั่วไป"
  },
  {
    "symptom_name": "การตรวจสุขภาพทั่วไปและกลุ่มเสี่ยง"
  },
  {
    "symptom_name": "การฟื้นฟูสภาพ"
  },
  {
    "symptom_name": "ฉุกเฉิน"
  },
  {
    "symptom_name": "ทันตกรรมพื้นฐาน"
  },
  {
    "symptom_name": "ทันตกรรมสุขภาพ"
  },
  {
    "symptom_name": "บริการผู้สูงอายุ"
  }
]
```
