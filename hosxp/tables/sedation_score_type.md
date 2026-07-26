# `sedation_score_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sedation_score_type_id | int(11) | NO | PRI | 0 |  |  |
| sedation_score_type_name | varchar(200) | YES | UNI | NULL |  |  |
| sedation_score_type_display | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sedation_score_type_name | sedation_score_type_name | yes | 1 |
| PRIMARY | sedation_score_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "sedation_score_type_id": 1,
    "sedation_score_type_name": "ไม่ง่วงซึม, ตื่นสดชื่นดี",
    "sedation_score_type_display": "0"
  },
  {
    "sedation_score_type_id": 2,
    "sedation_score_type_name": "ง่วงซึมเล็กน้อย, เรียกปลุกตื่นง่าย",
    "sedation_score_type_display": "1"
  },
  {
    "sedation_score_type_id": 3,
    "sedation_score_type_name": "ง่วงซึมปานกลาง, ง่วงบ่อยหรือตลอดเวลาแต่ปลุกตื่นง่าย",
    "sedation_score_type_display": "2"
  },
  {
    "sedation_score_type_id": 4,
    "sedation_score_type_name": "ง่วงซึมอย่างรุนแรง, หลับมาก, ปลุกตื่นยาก",
    "sedation_score_type_display": "3"
  },
  {
    "sedation_score_type_id": 5,
    "sedation_score_type_name": "นอนหลับปกติ",
    "sedation_score_type_display": "S"
  }
]
```
