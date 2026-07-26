# `patient_photo_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_photo_type_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | MUL | NULL |  |  |
| patient_photo_group_service_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_photo_type_name | name | no | 1 |
| PRIMARY | patient_photo_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_photo_type_id": 1,
    "name": "ก่อนทำ-หน้าตรง",
    "patient_photo_group_service_id": 1
  },
  {
    "patient_photo_type_id": 2,
    "name": "ก่อนทำ-ด้านซ้าย45",
    "patient_photo_group_service_id": 1
  },
  {
    "patient_photo_type_id": 3,
    "name": "ก่อนทำ-ด้านขวา45",
    "patient_photo_group_service_id": 1
  },
  {
    "patient_photo_type_id": 4,
    "name": "ก่อนทำ-ด้านซ้าย90",
    "patient_photo_group_service_id": 1
  },
  {
    "patient_photo_type_id": 5,
    "name": "ก่อนทำ-ด้านขวา90",
    "patient_photo_group_service_id": 1
  },
  {
    "patient_photo_type_id": 6,
    "name": "หลังทำ W1-หน้าตรง",
    "patient_photo_group_service_id": 1
  },
  {
    "patient_photo_type_id": 7,
    "name": "หลังทำ W1-ซ้าย45",
    "patient_photo_group_service_id": 1
  },
  {
    "patient_photo_type_id": 8,
    "name": "หลังทำ W1-ขวา45",
    "patient_photo_group_service_id": 1
  }
]
```
