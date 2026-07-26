# `ems_command_patient_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_command_patient_list_id | int(11) | NO | PRI | 0 |  |  |
| ems_command_list_id | int(11) | YES | MUL | NULL |  |  |
| ems_command_patient_name | varchar(200) | YES |  | NULL |  |  |
| ems_command_patient_age_year | int(11) | YES |  | NULL |  |  |
| ems_command_patient_hn | varchar(9) | YES |  | NULL |  |  |
| ems_command_patient_cid | varchar(13) | YES |  | NULL |  |  |
| ems_command_patient_transfer_chwpart | char(2) | YES |  | NULL |  |  |
| ems_command_patient_transfer_hospcode | varchar(9) | YES |  | NULL |  |  |
| ems_command_patient_regulation_list_text | varchar(250) | YES |  | NULL |  |  |
| ems_command_transfer_communication_type_id | int(11) | YES |  | NULL |  |  |
| sex_code | char(1) | YES |  | NULL |  |  |
| pttype_vehicle_registration_no | varchar(15) | YES |  | NULL |  |  |
| ems_emergency_type_id | int(11) | YES |  | NULL |  |  |
| ems_conscious_type_id | int(11) | YES |  | NULL |  |  |
| ems_respiration_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_command_list_id | ems_command_list_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_command_patient_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
