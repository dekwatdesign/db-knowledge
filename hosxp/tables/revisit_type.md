# `revisit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| revisit_type_id | int(11) | NO | PRI | 0 |  |  |
| revisit_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_revisit_type_name | revisit_type_name | yes | 1 |
| PRIMARY | revisit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "revisit_type_id": 1,
    "revisit_type_name": "อาการกำเริบ (มาก่อนนัด)"
  },
  {
    "revisit_type_id": 2,
    "revisit_type_name": "อาการดี ไม่มาตามนัด"
  },
  {
    "revisit_type_id": 3,
    "revisit_type_name": "ลืมวันนัด / ดูวันนัดผิด"
  },
  {
    "revisit_type_id": 4,
    "revisit_type_name": "ติดธุระมาไม่สะดวก"
  },
  {
    "revisit_type_id": 5,
    "revisit_type_name": "ไม่มีเงิน"
  },
  {
    "revisit_type_id": 6,
    "revisit_type_name": "ไม่มีคนนำมา"
  },
  {
    "revisit_type_id": 7,
    "revisit_type_name": "ยาหมดก่อน / ยาเปียกน้ำ"
  },
  {
    "revisit_type_id": 8,
    "revisit_type_name": "อาการกำเริบเนื่องจากผลข้างเคียงทางยา"
  }
]
```
