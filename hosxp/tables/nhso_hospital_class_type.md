# `nhso_hospital_class_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_hospital_class_type_id | int(11) | NO | PRI | 0 |  |  |
| nhso_hospital_class_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_hospital_class_type_name | nhso_hospital_class_type_name | yes | 1 |
| PRIMARY | nhso_hospital_class_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "nhso_hospital_class_type_id": 1,
    "nhso_hospital_class_type_name": "P : หน่วยบริการปฐมภูมิ"
  },
  {
    "nhso_hospital_class_type_id": 2,
    "nhso_hospital_class_type_name": "H : หน่วยบริการประจำ"
  },
  {
    "nhso_hospital_class_type_id": 3,
    "nhso_hospital_class_type_name": "R : หน่วยบริการที่รับการส่งต่อ"
  },
  {
    "nhso_hospital_class_type_id": 4,
    "nhso_hospital_class_type_name": "J07 : หน่วยบริการที่รับการส่งต่อเฉพาะด้าน P"
  }
]
```
