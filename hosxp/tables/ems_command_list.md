# `ems_command_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_list_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_no | varchar(25) | YES |  | NULL |  |  |
| ems_inform_type_id | int(11) | YES |  | NULL |  |  |
| ems_inform_type_note | varchar(200) | YES |  | NULL |  |  |
| ems_inform_name | varchar(150) | YES |  | NULL |  |  |
| ems_inform_phone | varchar(100) | YES |  | NULL |  |  |
| ems_inform_location | varchar(200) | YES |  | NULL |  |  |
| ems_command_date | date | YES | MUL | NULL |  |  |
| ems_command_time | time | YES |  | NULL |  |  |
| ems_command_symptom_text | text | YES |  | NULL |  |  |
| ems_command_incident_dispatch_type_id | int(11) | YES |  | NULL |  |  |
| ems_command_response_code_type_id | int(11) | YES |  | NULL |  |  |
| ems_command_service_result_type_id | int(11) | YES |  | NULL |  |  |
| ems_command_action_result_type_id | int(11) | YES |  | NULL |  |  |
| symptom_list_text | varchar(250) | YES |  | NULL |  |  |
| vehicle_list_text | varchar(250) | YES |  | NULL |  |  |
| patient_list_text | varchar(250) | YES |  | NULL |  |  |
| ems_command_level_type_id | int(11) | YES |  | NULL |  |  |
| ems_dispatch_detail_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_date | ems_command_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
