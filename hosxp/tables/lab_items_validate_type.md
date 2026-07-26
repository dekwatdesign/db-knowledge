# `lab_items_validate_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_validate_type_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_validate_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_validate_type_name | lab_items_validate_type_name | yes | 1 |
| PRIMARY | lab_items_validate_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_items_validate_type_id": 1,
    "lab_items_validate_type_name": "จำนวนต่อวัน"
  },
  {
    "lab_items_validate_type_id": 2,
    "lab_items_validate_type_name": "จำนวนต่อปี งบประมาณ (1 ต.ค. - 30 ก.ย.)"
  },
  {
    "lab_items_validate_type_id": 3,
    "lab_items_validate_type_name": "จำนวนต่อปีปฏิทิน"
  },
  {
    "lab_items_validate_type_id": 4,
    "lab_items_validate_type_name": "จำนวนต่อ 30 วัน ย้อนหลัง"
  },
  {
    "lab_items_validate_type_id": 5,
    "lab_items_validate_type_name": "จำนวนต่อ 60 วัน ย้อนหลัง"
  },
  {
    "lab_items_validate_type_id": 6,
    "lab_items_validate_type_name": "จำนวนต่อ 90 วัน ย้อนหลัง"
  },
  {
    "lab_items_validate_type_id": 7,
    "lab_items_validate_type_name": "จำนวนต่อ 120 วัน ย้อนหลัง"
  },
  {
    "lab_items_validate_type_id": 8,
    "lab_items_validate_type_name": "จำนวนทั้งหมด (ไม่ระบุช่วงเวลา)"
  }
]
```
