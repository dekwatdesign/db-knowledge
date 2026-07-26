# `moph_vaccine_appointment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_vaccine_appointment_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| hospital_appointment_slot_id | int(11) | YES |  | NULL |  |  |
| appointment_date | date | YES |  | NULL |  |  |
| appointment_time | time | YES |  | NULL |  |  |
| appointment_type | varchar(100) | YES |  | NULL |  |  |
| dose_no | int(11) | YES |  | NULL |  |  |
| hospital_code | varchar(10) | YES |  | NULL |  |  |
| hospital_name | varchar(200) | YES |  | NULL |  |  |
| update_flag | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_cid_update_flag | cid | no | 1 |
| ix_cid_update_flag | update_flag | no | 2 |
| PRIMARY | moph_vaccine_appointment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "moph_vaccine_appointment_id": 3680,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743593,
    "appointment_date": "2021-09-27",
    "appointment_time": "9:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  },
  {
    "moph_vaccine_appointment_id": 225,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743533,
    "appointment_date": "2021-09-27",
    "appointment_time": "8:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  },
  {
    "moph_vaccine_appointment_id": 246,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743653,
    "appointment_date": "2021-09-27",
    "appointment_time": "10:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  },
  {
    "moph_vaccine_appointment_id": 245,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743654,
    "appointment_date": "2021-09-27",
    "appointment_time": "10:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  },
  {
    "moph_vaccine_appointment_id": 247,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743655,
    "appointment_date": "2021-09-27",
    "appointment_time": "10:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  },
  {
    "moph_vaccine_appointment_id": 248,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743656,
    "appointment_date": "2021-09-27",
    "appointment_time": "10:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  },
  {
    "moph_vaccine_appointment_id": 249,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743657,
    "appointment_date": "2021-09-27",
    "appointment_time": "10:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  },
  {
    "moph_vaccine_appointment_id": 250,
    "cid": "1xxxxxxxxxxxx",
    "hospital_appointment_slot_id": 75743658,
    "appointment_date": "2021-09-27",
    "appointment_time": "10:00:00",
    "appointment_type": "เจ้าหน้าที่",
    "dose_no": 2,
    "hospital_code": "12251",
    "hospital_name": "โรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "update_flag": "Z"
  }
]
```
