# `patient_coc_severity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_severity_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_severity_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_coc_severity_type_name | patient_coc_severity_type_name | yes | 1 |
| PRIMARY | patient_coc_severity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "patient_coc_severity_type_id": 1,
    "patient_coc_severity_type_name": "กลุ่ม 1 (ช่วยเหลือตัวเองได้ทั้งหมด) บ้านสีเขียว"
  },
  {
    "patient_coc_severity_type_id": 2,
    "patient_coc_severity_type_name": "กลุ่ม 2 (ช่วยเหลือตัวเองได้บ้าง บางส่วน) บ้านสีเหลือง"
  },
  {
    "patient_coc_severity_type_id": 3,
    "patient_coc_severity_type_name": "กลุ่ม 3 (ช่วยเหลือตัวเองไม่ได้เลย) บ้านสีแดง"
  },
  {
    "patient_coc_severity_type_id": 4,
    "patient_coc_severity_type_name": "Palliative Care"
  },
  {
    "patient_coc_severity_type_id": 5,
    "patient_coc_severity_type_name": "เสียชีวิตจากโรงพยาบาล"
  }
]
```
