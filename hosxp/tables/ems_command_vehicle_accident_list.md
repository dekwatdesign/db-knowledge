# `ems_command_vehicle_accident_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_vehicle_accident_list_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_list_id | int(11) | YES | MUL | NULL |  |  |
| vehicle_registration_group_no | varchar(10) | YES |  | NULL |  |  |
| vehicle_registration_no | varchar(10) | YES |  | NULL |  |  |
| vehicle_registration_chwpart | char(2) | YES |  | NULL |  |  |
| ems_command_vehicle_accident_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_list_id | ems_command_list_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_vehicle_accident_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
