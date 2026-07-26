# `hospital_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_service_type_id | int(11) | NO | PRI | 0 |  |  |
| hospital_service_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_service_type_name | hospital_service_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "hospital_service_type_id": 1,
    "hospital_service_type_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "hospital_service_type_id": 2,
    "hospital_service_type_name": "โรงพยาบาลชุมชน หรือ โรงพยาบาลทั่วไปขนาดเล็ก (ต่ำกว่า 100 เตียง)",
    "hos_guid": null
  },
  {
    "hospital_service_type_id": 3,
    "hospital_service_type_name": "โรงพยาบาลชุมชนขนาดกลาง 120 เตียง",
    "hos_guid": null
  },
  {
    "hospital_service_type_id": 4,
    "hospital_service_type_name": "โรงพยาบาลทั่วไป (ขนาด 100 เตียงขึ้นไป)",
    "hos_guid": null
  },
  {
    "hospital_service_type_id": 5,
    "hospital_service_type_name": "โรงพยาบาลเฉพาะทาง",
    "hos_guid": null
  },
  {
    "hospital_service_type_id": 6,
    "hospital_service_type_name": "โรงพยาบาลศูนย์/โรงพยาบาลมหาวิทยาลัย/โรงพยาบาลที่ให้การดูแลระดับตติยภูมิ",
    "hos_guid": null
  }
]
```
