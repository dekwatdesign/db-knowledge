# `ems_command_vehicle_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_vehicle_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_vehicle_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ems_command_vehicle_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_vehicle_type_name | ems_command_vehicle_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_vehicle_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ems_command_vehicle_type_id": 1,
    "ems_command_vehicle_type_name": "รถ FR",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_vehicle_type_id": 2,
    "ems_command_vehicle_type_name": "รถ BLS",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_vehicle_type_id": 3,
    "ems_command_vehicle_type_name": "รถ ILS",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_vehicle_type_id": 4,
    "ems_command_vehicle_type_name": "รถ ALS",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_vehicle_type_id": 5,
    "ems_command_vehicle_type_name": "เรือ ป.1",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_vehicle_type_id": 6,
    "ems_command_vehicle_type_name": "เรือ ป.2",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_vehicle_type_id": 7,
    "ems_command_vehicle_type_name": "เรือ ป.3",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_vehicle_type_id": 8,
    "ems_command_vehicle_type_name": "เรื่อประเภทอื่นๆ",
    "ems_command_vehicle_type_code": null,
    "hos_guid": null
  }
]
```
