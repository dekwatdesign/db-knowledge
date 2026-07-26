# `caregiver_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| caregiver_type_id | int(11) | NO | PRI | 0 |  |  |
| caregiver_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_caregiver_type_name | caregiver_type_name | yes | 1 |
| PRIMARY | caregiver_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "caregiver_type_id": 1,
    "caregiver_type_name": "บุคคลในครอบครัวเดียวกัน"
  },
  {
    "caregiver_type_id": 2,
    "caregiver_type_name": "ผู้ดูแลตามกฏหมาย"
  },
  {
    "caregiver_type_id": 3,
    "caregiver_type_name": "เพื่อน"
  },
  {
    "caregiver_type_id": 4,
    "caregiver_type_name": "ผู้ดูแลสุขภาพ ที่ได้รับการแต่งตั้ง"
  },
  {
    "caregiver_type_id": 5,
    "caregiver_type_name": "อาสาสมัคร"
  },
  {
    "caregiver_type_id": 6,
    "caregiver_type_name": "เพื่อนบ้าน"
  },
  {
    "caregiver_type_id": 7,
    "caregiver_type_name": "อื่นๆ"
  }
]
```
