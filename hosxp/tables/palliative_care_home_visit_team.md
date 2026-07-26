# `palliative_care_home_visit_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_home_visit_team_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_home_visit_id | int(11) | YES |  | NULL |  |  |
| doctor_code | char(6) | YES |  | NULL |  |  |
| doctor_position_id | int(11) | YES |  | NULL |  |  |
| palliative_care_technician_name | varchar(255) | YES |  | NULL |  |  |
| palliative_care_technician_type_id | int(11) | YES |  | NULL |  |  |
| palliative_care_home_visit_team_phone | varchar(255) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_home_visit_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
