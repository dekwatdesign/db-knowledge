# `med_error_risk_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_error_risk_type_id | int(11) | NO | PRI | 0 |  |  |
| med_error_risk_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_med_error_risk_type_name | med_error_risk_type_name | yes | 1 |
| PRIMARY | med_error_risk_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_error_risk_type_id": 1,
    "med_error_risk_type_name": "Category A: ไม่มีความคลาดเคลื่อนเกิดขึ้น แต่มีเหตุการณ์ที่อาจทำให้เกิดความคลาดเคลื่อนได้"
  },
  {
    "med_error_risk_type_id": 2,
    "med_error_risk_type_name": "Category B: มีความคลาดเคลื่อนเกิดขึ้น แต่ไม่เป็นอันตรายต่อผู้ป่วย เนื่องจากความคลาด เคลื่อนไปไม่ถึงผู้ป่วย"
  },
  {
    "med_error_risk_type_id": 3,
    "med_error_risk_type_name": "Category C: มีความคลาดเคลื่อนเกิดขึ้น แต่ไม่เป็นอันตรายต่อผู้ป่วย ถึงแม้ว่าความคลาดเคลื่อนนั้นจะไปถึงผู้ป่วยแล้ว"
  },
  {
    "med_error_risk_type_id": 4,
    "med_error_risk_type_name": "Category D: มีความคลาดเคลื่อนเกิดขึ้น แม้ไม่เป็นอันตรายต่อผู้ป่วย แต่ยังจำเป็นต้องมีการติดตามผู้ป่วยเพิ่มเติม"
  },
  {
    "med_error_risk_type_id": 5,
    "med_error_risk_type_name": "Category E: มีความคลาดเคลื่อนเกิดขึ้น และเป็นอันตรายต่อผู้ป่วยเพียงชั่วคราวรวมถึงจำเป็นต้องได้รับการรักษาหรือแก้ไขเพิ่มเติม"
  },
  {
    "med_error_risk_type_id": 6,
    "med_error_risk_type_name": "Category F: มีความคลาดเคลื่อนเกิดขึ้น และเป็นอันตรายต่อผู้ป่วยเพียงชั่วคราวรวมถึงจำเป็นต้องได้รับการรักษาในโรงพยาบาลหรือยืดระยะเวลาในการรักษาตัวในโรงพยาบาลออกไป"
  },
  {
    "med_error_risk_type_id": 7,
    "med_error_risk_type_name": "Category G: มีความคลาดเคลื่อนเกิดขึ้น และเป็นอันตรายต่อผู้ป่วยถาวร"
  },
  {
    "med_error_risk_type_id": 8,
    "med_error_risk_type_name": "Category H: มีความคลาดเคลื่อนเกิดขึ้นและเป็นอันตรายต่อผู้ป่วยจนเกือบถึงแก่ชีวิต(เช่น แพ้ยาแบบ anaphylaxis และหัวใจหยุดเต้น)มีความคลาดเคลื่อน และเป็นอันตรายจนเสียชีวิต"
  }
]
```
