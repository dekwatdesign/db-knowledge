# `rvp_accident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_accident_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| rvp_department_type_id | int(11) | YES |  | NULL |  |  |
| rvp_accident_type_id | int(11) | YES |  | NULL |  |  |
| rvp_dead_status_id | int(11) | YES |  | NULL |  |  |
| rvp_victim_type_id | int(11) | YES |  | NULL |  |  |
| rvp_accident_case_type_id | int(11) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| accident_datetime | datetime | YES |  | NULL |  |  |
| accident_place_text | varchar(200) | YES |  | NULL |  |  |
| accident_description_text | varchar(250) | YES |  | NULL |  |  |
| vehicle_serial_no | varchar(100) | YES |  | NULL |  |  |
| vehicle_license_no_text | varchar(10) | YES |  | NULL |  |  |
| vehicle_license_no_number | varchar(10) | YES |  | NULL |  |  |
| eclaim_accident_no | varchar(100) | YES |  | NULL |  |  |
| eclaim_hospital_no | varchar(100) | YES |  | NULL |  |  |
| inform_datetime | datetime | YES |  | NULL |  |  |
| vehicle_license_chwpart | char(2) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| current_rvp_status_text | varchar(100) | YES |  | NULL |  |  |
| rvp_transaction_datetime | datetime | YES |  | NULL |  |  |
| rvp_accident_duplicateno | varchar(100) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| rvp_accident_motor_type_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | rvp_accident_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
