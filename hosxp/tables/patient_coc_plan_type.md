# `patient_coc_plan_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_plan_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_plan_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_coc_plan_type_name | patient_coc_plan_type_name | yes | 1 |
| PRIMARY | patient_coc_plan_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_coc_plan_type_id": 1,
    "patient_coc_plan_type_name": "ดูแลตามหลัก 3อ.2ส."
  },
  {
    "patient_coc_plan_type_id": 2,
    "patient_coc_plan_type_name": "เข้าชมรมผู้สูงอายุ"
  },
  {
    "patient_coc_plan_type_id": 3,
    "patient_coc_plan_type_name": "แผนการดูแลรักษา"
  },
  {
    "patient_coc_plan_type_id": 4,
    "patient_coc_plan_type_name": "ด้านการพยาบาล"
  },
  {
    "patient_coc_plan_type_id": 5,
    "patient_coc_plan_type_name": "ด้านเภสัชกรรม"
  },
  {
    "patient_coc_plan_type_id": 6,
    "patient_coc_plan_type_name": "ด้านการฟื้นฟูสมรรถภาพทางกาย"
  },
  {
    "patient_coc_plan_type_id": 7,
    "patient_coc_plan_type_name": "ด้านสุขภาพจิต"
  },
  {
    "patient_coc_plan_type_id": 8,
    "patient_coc_plan_type_name": "ด้านสุขภาพช่องปาก"
  }
]
```
