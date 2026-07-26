# `referout_reply`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hcode | varchar(5) | NO | PRI |  |  |  |
| refertype_id | varchar(5) | YES |  | NULL |  |  |
| referout_no | varchar(20) | NO | PRI |  |  |  |
| referout_date | datetime | YES |  | NULL |  |  |
| referout_time | varchar(10) | YES |  | NULL |  |  |
| station_id | varchar(5) | YES |  | NULL |  |  |
| location_id | varchar(50) | YES |  | NULL |  |  |
| location_name | varchar(50) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(50) | YES |  | NULL |  |  |
| pname | varchar(20) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| age | varchar(10) | YES |  | NULL |  |  |
| addrpart | varchar(100) | YES |  | NULL |  |  |
| moopart | varchar(5) | YES |  | NULL |  |  |
| tmbpart | varchar(2) | YES |  | NULL |  |  |
| amppart | varchar(2) | YES |  | NULL |  |  |
| chwpart | varchar(2) | YES |  | NULL |  |  |
| pttype_id | varchar(100) | YES |  | NULL |  |  |
| pttype_name | varchar(500) | YES |  | NULL |  |  |
| pttypeno | varchar(100) | YES |  | NULL |  |  |
| hospmain | varchar(5) | YES |  | NULL |  |  |
| hospsub | varchar(5) | YES |  | NULL |  |  |
| typept_id | varchar(5) | YES |  | NULL |  |  |
| strength_id | varchar(5) | YES |  | NULL |  |  |
| doctor_id | varchar(100) | YES |  | NULL |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| refer_hospcode | varchar(5) | YES |  | NULL |  |  |
| cause_referout_id | varchar(5) | YES |  | NULL |  |  |
| expire_date | datetime | YES |  | NULL |  |  |
| loads_id | varchar(5) | YES |  | NULL |  |  |
| is_coordinate_doctor | varchar(1) | YES |  | NULL |  |  |
| is_coordinate_nurse | varchar(1) | YES |  | NULL |  |  |
| coordinate_id | varchar(5) | YES |  | NULL |  |  |
| receive_no | varchar(20) | YES |  | NULL |  |  |
| receive_date | datetime | YES |  | NULL |  |  |
| receive_time | varchar(5) | YES |  | NULL |  |  |
| receive_station_id | varchar(5) | YES |  | NULL |  |  |
| receive_spclty_id | varchar(5) | YES |  | NULL |  |  |
| image1 | binary(1) | YES |  | NULL |  |  |
| image2 | binary(1) | YES |  | NULL |  |  |
| image3 | binary(1) | YES |  | NULL |  |  |
| image4 | binary(1) | YES |  | NULL |  |  |
| image5 | binary(1) | YES |  | NULL |  |  |
| sex | varchar(45) | YES |  | NULL |  |  |
| is_coordinate_not | varchar(45) | YES |  | NULL |  |  |
| is_coordinate_no | varchar(45) | YES |  | NULL |  |  |
| is_dead_refer | varchar(45) | YES |  | NULL |  |  |
| is_dead_er | varchar(45) | YES |  | NULL |  |  |
| is_dead_ward | varchar(45) | YES |  | NULL |  |  |
| memo | text | YES |  | NULL |  |  |
| memodiag | text | YES |  | NULL |  |  |
| drugallergy | varchar(900) | YES |  | NULL |  |  |
| cc | varchar(4500) | YES |  | NULL |  |  |
| user_save | varchar(150) | YES |  | NULL |  |  |
| vn | varchar(150) | YES |  | NULL |  |  |
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
| father | varchar(150) | YES |  | NULL |  |  |
| mother | varchar(150) | YES |  | NULL |  |  |
| Send_spclty_id | varchar(50) | YES |  | NULL |  |  |
| load_date | date | YES |  | NULL |  |  |
| load_time | varchar(10) | YES |  | NULL |  |  |
| typept_id_end | varchar(5) | YES |  | NULL |  |  |
| strength_id_end | varchar(5) | YES |  | NULL |  |  |
| memoDiag_end | varchar(8000) | YES |  | NULL |  |  |
| bed_id | varchar(50) | YES |  | NULL |  |  |
| spo2 | varchar(50) | YES |  | NULL |  |  |
| clinicgroup | varchar(50) | YES |  | NULL |  |  |
| clinicsub | varchar(50) | YES |  | NULL |  |  |
| station_name | varchar(100) | YES |  | NULL |  |  |
| readdata_date | datetime | YES |  | NULL |  |  |
| readdata_time | varchar(100) | YES |  | NULL |  |  |
| showdata_date | datetime | YES |  | NULL |  |  |
| showdata_time | varchar(100) | YES |  | NULL |  |  |
| memonote | varchar(8000) | YES |  | NULL |  |  |
| forward_flag | varchar(50) | YES |  | NULL |  |  |
| save_date | datetime | YES |  | NULL |  |  |
| save_time | varchar(10) | YES |  | NULL |  |  |
| warfarin_note | varchar(1500) | YES |  | NULL |  |  |
| app_date | datetime | YES |  | NULL |  |  |
| ett_no | varchar(20) | YES |  | NULL |  |  |
| ett_mark | varchar(20) | YES |  | NULL |  |  |
| hn_tohosp | varchar(50) | YES |  | NULL |  |  |
| sync_memo | varchar(2000) | YES |  | NULL |  |  |
| sync_memo_read | varchar(5) | YES |  | NULL |  |  |
| level_acute | varchar(50) | YES |  | NULL |  |  |
| level_acute_end | varchar(50) | YES |  | NULL |  |  |
| bedtype | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hcode | yes | 1 |
| PRIMARY | referout_no | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
