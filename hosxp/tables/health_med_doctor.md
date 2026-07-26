# `health_med_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_doctor_id | int(11) | NO | PRI | 0 |  |  |
| health_med_doctor_name | varchar(150) | YES | UNI | NULL |  |  |
| doctor_code | varchar(9) | YES |  | NULL |  |  |
| pname | varchar(30) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| license_number | varchar(50) | YES |  | NULL |  |  |
| health_med_curriculum_id | int(11) | YES |  | NULL |  |  |
| health_med_educational_id | int(11) | YES |  | NULL |  |  |
| health_med_institute_type_id | int(11) | YES |  | NULL |  |  |
| health_med_institute_id | int(11) | YES |  | NULL |  |  |
| health_med_license_type_id | int(11) | YES |  | NULL |  |  |
| health_med_doctor_type_id | int(11) | YES |  | NULL |  |  |
| health_med_curriculum_other | varchar(200) | YES |  | NULL |  |  |
| health_med_educational_other | varchar(200) | YES |  | NULL |  |  |
| health_med_institute_type_other | varchar(200) | YES |  | NULL |  |  |
| health_med_institute_other | varchar(200) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_doctor_name | health_med_doctor_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
