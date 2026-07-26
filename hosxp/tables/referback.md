# `referback`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(20) | NO | PRI |  |  |  |
| referout_no | varchar(20) | YES |  | NULL |  |  |
| refer_date | datetime | YES | MUL | NULL |  |  |
| refer_time | varchar(10) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| pname | varchar(20) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| age | varchar(10) | YES |  | NULL |  |  |
| doctor_id | varchar(100) | YES |  | NULL |  |  |
| refer_hospcode | varchar(5) | YES |  | NULL |  |  |
| cause_referback_id | varchar(5) | YES |  | NULL |  |  |
| hhc_detail | text | YES |  | NULL |  |  |
| is_upload | int(11) | YES |  | NULL |  |  |
| is_download | int(11) | YES |  | NULL |  |  |
| is_receive | int(11) | YES |  | NULL |  |  |
| sex | varchar(45) | YES |  | NULL |  |  |
| memo | text | YES |  | NULL |  |  |
| memodiag | text | YES |  | NULL |  |  |
| drugallergy | varchar(900) | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| vn | varchar(150) | YES |  | NULL |  |  |
| user_save | varchar(150) | YES |  | NULL |  |  |
| telephone | varchar(150) | YES |  | NULL |  |  |
| patient_move | varchar(150) | YES |  | NULL |  |  |
| O2 | varchar(150) | YES |  | NULL |  |  |
| patient_move_etc | varchar(2000) | YES |  | NULL |  |  |
| conscious | varchar(150) | YES |  | NULL |  |  |
| e | varchar(150) | YES |  | NULL |  |  |
| v | varchar(150) | YES |  | NULL |  |  |
| m | varchar(150) | YES |  | NULL |  |  |
| evm_total | varchar(150) | YES |  | NULL |  |  |
| pupil_right | varchar(150) | YES |  | NULL |  |  |
| pupil_left | varchar(150) | YES |  | NULL |  |  |
| t | varchar(150) | YES |  | NULL |  |  |
| p | varchar(150) | YES |  | NULL |  |  |
| r | varchar(150) | YES |  | NULL |  |  |
| bp | varchar(150) | YES |  | NULL |  |  |
| spo2 | varchar(150) | YES |  | NULL |  |  |
| load_detail | varchar(500) | YES |  | NULL |  |  |
| pick_drug | varchar(50) | YES |  | NULL |  |  |
| get_drug | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(50) | YES |  | NULL |  |  |
| ward | varchar(500) | YES |  | NULL |  |  |
| rightname | varchar(500) | YES |  | NULL |  |  |
| admitdate | datetime | YES |  | NULL |  |  |
| suction | varchar(50) | YES |  | NULL |  |  |
| respirator | varchar(50) | YES |  | NULL |  |  |
| nurse | varchar(50) | YES |  | NULL |  |  |
| doctor | varchar(50) | YES |  | NULL |  |  |
| etc | varchar(2000) | YES |  | NULL |  |  |
| dischdate | datetime | YES |  | NULL |  |  |
| memofollowup | varchar(8000) | YES |  | NULL |  |  |
| from_hospname | varchar(1500) | YES |  | NULL |  |  |
| to_hospname | varchar(1500) | YES |  | NULL |  |  |
| cause_referback_name | varchar(500) | YES |  | NULL |  |  |
| location_id | varchar(50) | YES |  | NULL |  |  |
| location_name | varchar(500) | YES |  | NULL |  |  |
| referback_patient_type | varchar(50) | YES |  | NULL |  |  |
| warfarin_note | varchar(1500) | YES |  | NULL |  |  |
| station_id | varchar(50) | YES |  | NULL |  |  |
| station_name | varchar(500) | YES |  | NULL |  |  |
| doctorstaff_id | varchar(10) | YES |  | NULL |  |  |
| doctorstaff_name | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | refer_no | yes | 1 |
| refer_date | refer_date | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
