# `ems_respiration_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_respiration_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_respiration_type_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_respiration_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_respiration_type_name | ems_respiration_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_respiration_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ems_respiration_type_id": 1,
    "ems_respiration_type_name": "เร็ว",
    "ems_respiration_type_code": null,
    "hos_guid": null
  },
  {
    "ems_respiration_type_id": 2,
    "ems_respiration_type_name": "ปกติ",
    "ems_respiration_type_code": null,
    "hos_guid": null
  },
  {
    "ems_respiration_type_id": 3,
    "ems_respiration_type_name": "ช้า",
    "ems_respiration_type_code": null,
    "hos_guid": null
  },
  {
    "ems_respiration_type_id": 4,
    "ems_respiration_type_name": "ไม่สม่ำเสมอ",
    "ems_respiration_type_code": null,
    "hos_guid": null
  },
  {
    "ems_respiration_type_id": 5,
    "ems_respiration_type_name": "ไม่หายใจ",
    "ems_respiration_type_code": null,
    "hos_guid": null
  }
]
```
