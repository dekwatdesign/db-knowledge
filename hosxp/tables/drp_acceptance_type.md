# `drp_acceptance_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_acceptance_type_id | int(11) | NO | PRI | 0 |  |  |
| drp_acceptance_type_name | varchar(200) | YES | UNI | NULL |  |  |
| drp_acceptance_type_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_acceptance_type_name | drp_acceptance_type_name | yes | 1 |
| PRIMARY | drp_acceptance_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drp_acceptance_type_id": 1,
    "drp_acceptance_type_name": "Intervention ได้รับการยอมรับและนำไปใช้/ปฏิบัติ",
    "drp_acceptance_type_code": "A1.1"
  },
  {
    "drp_acceptance_type_id": 2,
    "drp_acceptance_type_name": "Intervention ได้รับการยอมรับและนำไปใช้/ปฏิบัติบางส่วน",
    "drp_acceptance_type_code": "A1.2"
  },
  {
    "drp_acceptance_type_id": 3,
    "drp_acceptance_type_name": "Intervention ได้รับการยอมรับแต่ไม่ถูกนำไปใช้/ปฏิบัติ",
    "drp_acceptance_type_code": "A1.3"
  },
  {
    "drp_acceptance_type_id": 4,
    "drp_acceptance_type_name": "Intervention ได้รับการยอมรับแต่ไม่ทราบผลการนำไปใช้/ปฏิบัติ",
    "drp_acceptance_type_code": "A1.4"
  },
  {
    "drp_acceptance_type_id": 5,
    "drp_acceptance_type_name": "Intervention ไม่ได้รับการยอมรับ - ไม่เหมาะสม",
    "drp_acceptance_type_code": "A2.1"
  },
  {
    "drp_acceptance_type_id": 6,
    "drp_acceptance_type_name": "Intervention ไม่ได้รับการยอมรับ - ไม่เห็นด้วย",
    "drp_acceptance_type_code": "A2.2"
  },
  {
    "drp_acceptance_type_id": 7,
    "drp_acceptance_type_name": "Intervention ไม่ได้รับการยอมรับ - ด้วยเหตุผลอื่น",
    "drp_acceptance_type_code": "A2.3"
  },
  {
    "drp_acceptance_type_id": 8,
    "drp_acceptance_type_name": "Intervention ไม่ได้รับการยอมรับไม่ทราบหตุผล",
    "drp_acceptance_type_code": "A2.4"
  }
]
```
