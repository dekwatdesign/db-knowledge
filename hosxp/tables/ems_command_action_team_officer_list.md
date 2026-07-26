# `ems_command_action_team_officer_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_action_team_officer_list_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_action_team_id | int(11) | YES | MUL | NULL |  |  |
| ems_command_action_team_officer_name | varchar(200) | YES |  | NULL |  |  |
| ems_command_officer_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_action_team_id | ems_command_action_team_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_action_team_officer_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
