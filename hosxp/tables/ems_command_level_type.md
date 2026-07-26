# `ems_command_level_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_level_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_level_type_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_command_level_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_level_type_name | ems_command_level_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_level_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ems_command_level_type_id": 1,
    "ems_command_level_type_name": "ระดับเบื้องต้น",
    "ems_command_level_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_level_type_id": 2,
    "ems_command_level_type_name": "ระดับพื้นฐาน",
    "ems_command_level_type_code": null,
    "hos_guid": null
  },
  {
    "ems_command_level_type_id": 3,
    "ems_command_level_type_name": "ระดับสูง",
    "ems_command_level_type_code": null,
    "hos_guid": null
  }
]
```
