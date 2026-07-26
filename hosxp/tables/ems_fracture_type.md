# `ems_fracture_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_fracture_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_fracture_type_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_fracture_type_code | varchar(10) | YES |  | NULL |  |  |
| ems_fracture_type_level_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_fracture_type_name | ems_fracture_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_fracture_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ems_fracture_type_id": 1,
    "ems_fracture_type_name": "แขนท่อนบน",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_fracture_type_id": 2,
    "ems_fracture_type_name": "แขนท่อนล่าง",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_fracture_type_id": 3,
    "ems_fracture_type_name": "ขาท่อนบน",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_fracture_type_id": 4,
    "ems_fracture_type_name": "ขาท่อนล่าง",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_fracture_type_id": 5,
    "ems_fracture_type_name": "ใบหน้า",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_fracture_type_id": 6,
    "ems_fracture_type_name": "มือ",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_fracture_type_id": 7,
    "ems_fracture_type_name": "เท้า",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_fracture_type_id": 8,
    "ems_fracture_type_name": "ไม่มีกระดูกหัก",
    "ems_fracture_type_code": null,
    "ems_fracture_type_level_id": 2,
    "hos_guid": null
  }
]
```
