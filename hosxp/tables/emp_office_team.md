# `emp_office_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_team_id | int(11) | NO | PRI | 0 |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_office_id | int(11) | YES |  | NULL |  |  |
| emp_office_team_position | varchar(100) | YES |  | NULL |  |  |
| emp_office_team_stay_place | varchar(150) | YES |  | NULL |  |  |
| emp_office_team_phone | varchar(15) | YES |  | NULL |  |  |
| emp_vehicle_id | int(11) | YES |  | NULL |  |  |
| emp_office_team_bus_price | double(22,3) | YES |  | NULL |  |  |
| emp_office_team_register_price | double(22,3) | YES |  | NULL |  |  |
| emp_office_team_other_price | double(22,3) | YES |  | NULL |  |  |
| emp_office_team_move | char(1) | YES |  | NULL |  |  |
| emp_office_team_sdate | date | YES |  | NULL |  |  |
| emp_office_team_edate | date | YES |  | NULL |  |  |
| emp_office_team_room_type_id | int(11) | YES |  | NULL |  |  |
| emp_office_team_way_date | date | YES |  | NULL |  |  |
| emp_office_team_back_date | date | YES |  | NULL |  |  |
| emp_office_team_work_date | date | YES |  | NULL |  |  |
| emp_office_team_staff | varchar(20) | YES |  | NULL |  |  |
| emp_office_cert_id | int(11) | YES |  | NULL |  |  |
| emp_office_team_lastupdate | date | YES |  | NULL |  |  |
| emp_office_team_come_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
