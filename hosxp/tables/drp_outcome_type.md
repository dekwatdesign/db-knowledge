# `drp_outcome_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_outcome_type_id | int(11) | NO | PRI | 0 |  |  |
| drp_outcome_type_name | varchar(200) | YES | UNI | NULL |  |  |
| std_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_outcome_type_name | drp_outcome_type_name | yes | 1 |
| PRIMARY | drp_outcome_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "drp_outcome_type_id": 1,
    "drp_outcome_type_name": "ไม่ทราบผลลัพธ์",
    "std_code": "O0.1"
  },
  {
    "drp_outcome_type_id": 2,
    "drp_outcome_type_name": "แก้ไขปัญหาได้ทั้งหมด",
    "std_code": "O1.1"
  },
  {
    "drp_outcome_type_id": 3,
    "drp_outcome_type_name": "แก้ไขปัญหาได้บางส่วน",
    "std_code": "O2.1"
  },
  {
    "drp_outcome_type_id": 4,
    "drp_outcome_type_name": "ไม่สามารถแก้ไขปัญหาได้เนื่องจากผู้ป่วยไม่ให้ความร่วมมือ",
    "std_code": "O3.1"
  },
  {
    "drp_outcome_type_id": 5,
    "drp_outcome_type_name": "ไม่สามารถแก้ไขปัญหาได้เนื่องจากแพทย์ไม่ให้ความร่วมมือ",
    "std_code": "O3.2"
  },
  {
    "drp_outcome_type_id": 6,
    "drp_outcome_type_name": "ไม่สามารถแก้ไขปัญหาได้ เนื่องจาก intervention ไม่ได้ผล",
    "std_code": "O3.3"
  },
  {
    "drp_outcome_type_id": 7,
    "drp_outcome_type_name": "ไม่มีความจำเป็นต้องแก้ปัญหาหรือไม่มีความเป็นไปได้ที่ปัญหาจะถูกแก้ไข",
    "std_code": "O3.4"
  }
]
```
