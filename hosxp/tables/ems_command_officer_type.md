# `ems_command_officer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_officer_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_officer_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_officer_type_name | ems_command_officer_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_officer_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ems_command_officer_type_id": 1,
    "ems_command_officer_type_name": "แพทย์",
    "hos_guid": null
  },
  {
    "ems_command_officer_type_id": 2,
    "ems_command_officer_type_name": "พยาบาล",
    "hos_guid": null
  },
  {
    "ems_command_officer_type_id": 3,
    "ems_command_officer_type_name": "เจ้าหน้าที่",
    "hos_guid": null
  }
]
```
