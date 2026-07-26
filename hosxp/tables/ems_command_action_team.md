# `ems_command_action_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_action_team_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_list_id | int(11) | YES | MUL | NULL |  |  |
| ems_command_action_team_name | varchar(200) | YES |  | NULL |  |  |
| ems_command_action_group_name | varchar(200) | YES |  | NULL |  |  |
| team_inform_datetime | datetime | YES |  | NULL |  |  |
| team_command_datetime | datetime | YES |  | NULL |  |  |
| team_depart_datetime | datetime | YES |  | NULL |  |  |
| team_place_arrive_datetime | datetime | YES |  | NULL |  |  |
| team_place_finish_datetime | datetime | YES |  | NULL |  |  |
| team_hospital_datetime | datetime | YES |  | NULL |  |  |
| team_base_datetime | datetime | YES |  | NULL |  |  |
| vehicle_gauge_km1 | int(11) | YES |  | NULL |  |  |
| vehicle_gauge_km2 | int(11) | YES |  | NULL |  |  |
| vehicle_gauge_km3 | int(11) | YES |  | NULL |  |  |
| vehicle_gauge_km4 | int(11) | YES |  | NULL |  |  |
| vehicle_gauge_km5 | int(11) | YES |  | NULL |  |  |
| vehicle_total_km1 | int(11) | YES |  | NULL |  |  |
| vehicle_total_km2 | int(11) | YES |  | NULL |  |  |
| vehicle_total_km3 | int(11) | YES |  | NULL |  |  |
| vehicle_total_km4 | int(11) | YES |  | NULL |  |  |
| vehicle_total_km5 | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_list_id | ems_command_list_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_action_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
