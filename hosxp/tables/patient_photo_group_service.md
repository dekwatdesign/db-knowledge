# `patient_photo_group_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_photo_group_service_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_photo_group_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_photo_group_service_id": 1,
    "name": "ทำตาสองชั้น"
  },
  {
    "patient_photo_group_service_id": 2,
    "name": "Sub Brow Lift"
  },
  {
    "patient_photo_group_service_id": 3,
    "name": "เสริมจมูก"
  },
  {
    "patient_photo_group_service_id": 4,
    "name": "ตัดปีกจมูก"
  },
  {
    "patient_photo_group_service_id": 5,
    "name": "Hifu"
  },
  {
    "patient_photo_group_service_id": 6,
    "name": "Botox"
  },
  {
    "patient_photo_group_service_id": 7,
    "name": "Ulthera"
  },
  {
    "patient_photo_group_service_id": 8,
    "name": "จัดฟัน"
  }
]
```
