# `opdrent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rent_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| rent_date | date | YES | MUL | NULL |  |  |
| rent_time | time | YES |  | NULL |  |  |
| rent_depcode | char(3) | YES |  | NULL |  |  |
| rent_user | varchar(150) | YES |  | NULL |  |  |
| return_date | date | YES | MUL | NULL |  |  |
| return_time | time | YES |  | NULL |  |  |
| checkin | char(1) | YES | MUL | NULL |  |  |
| track_depcode | char(3) | YES |  | NULL |  |  |
| comment | varchar(250) | YES |  | NULL |  |  |
| rent_reason_id | int(11) | YES |  | NULL |  |  |
| phone | varchar(100) | YES |  | NULL |  |  |
| link_vn | varchar(12) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| due_date | date | YES |  | NULL |  |  |
| return_staff | varchar(50) | YES |  | NULL |  |  |
| rent_doctor_code | varchar(10) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| rent_user_list | text | YES |  | NULL |  |  |
| return_depcode | varchar(3) | YES |  | NULL |  |  |
| return_computer_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| checkin | checkin | no | 1 |
| hn | hn | no | 1 |
| ix_ch_date | checkin | no | 1 |
| ix_ch_date | return_date | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_link_vn | link_vn | no | 1 |
| PRIMARY | rent_id | yes | 1 |
| rent_date | rent_date | no | 1 |
| return_date | return_date | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rent_id": 0,
    "hn": null,
    "rent_date": null,
    "rent_time": null,
    "rent_depcode": null,
    "rent_user": null,
    "return_date": null,
    "return_time": null,
    "checkin": "N",
    "track_depcode": null,
    "comment": null,
    "rent_reason_id": null,
    "phone": null,
    "link_vn": null,
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  },
  {
    "rent_id": 6,
    "hn": "530030647",
    "rent_date": "2011-10-10",
    "rent_time": "9:36:44",
    "rent_depcode": "029",
    "rent_user": "yuwa153",
    "return_date": "2012-04-12",
    "return_time": "11:09:23",
    "checkin": "Y",
    "track_depcode": null,
    "comment": "Auto checkout",
    "rent_reason_id": null,
    "phone": null,
    "link_vn": "541010083000",
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  },
  {
    "rent_id": 8,
    "hn": "530210348",
    "rent_date": "2011-10-10",
    "rent_time": "9:37:24",
    "rent_depcode": "029",
    "rent_user": "yuwa153",
    "return_date": "2012-04-10",
    "return_time": "14:19:16",
    "checkin": "Y",
    "track_depcode": null,
    "comment": "Auto checkout",
    "rent_reason_id": null,
    "phone": null,
    "link_vn": "541010083002",
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  },
  {
    "rent_id": 10,
    "hn": "530107352",
    "rent_date": "2011-10-10",
    "rent_time": "9:37:53",
    "rent_depcode": "017",
    "rent_user": "yuwa153",
    "return_date": "2011-10-24",
    "return_time": "10:09:24",
    "checkin": "Y",
    "track_depcode": null,
    "comment": "Auto checkout",
    "rent_reason_id": null,
    "phone": null,
    "link_vn": "541010083004",
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  },
  {
    "rent_id": 11,
    "hn": "530167846",
    "rent_date": "2011-10-10",
    "rent_time": "9:38:05",
    "rent_depcode": "017",
    "rent_user": "yuwa153",
    "return_date": "2011-11-24",
    "return_time": "12:45:38",
    "checkin": "Y",
    "track_depcode": null,
    "comment": "Auto checkout",
    "rent_reason_id": null,
    "phone": null,
    "link_vn": "541010083005",
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  },
  {
    "rent_id": 12,
    "hn": "530207051",
    "rent_date": "2011-10-10",
    "rent_time": "9:38:37",
    "rent_depcode": "017",
    "rent_user": "yuwa153",
    "return_date": "2011-10-24",
    "return_time": "15:48:36",
    "checkin": "Y",
    "track_depcode": null,
    "comment": "Auto checkout",
    "rent_reason_id": null,
    "phone": null,
    "link_vn": "541010093000",
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  },
  {
    "rent_id": 13,
    "hn": "530064446",
    "rent_date": "2011-10-10",
    "rent_time": "9:39:06",
    "rent_depcode": "017",
    "rent_user": "yuwa153",
    "return_date": "2011-10-10",
    "return_time": "10:02:58",
    "checkin": "Y",
    "track_depcode": null,
    "comment": "Auto checkout",
    "rent_reason_id": null,
    "phone": null,
    "link_vn": "541010060000",
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  },
  {
    "rent_id": 14,
    "hn": "530082548",
    "rent_date": "2011-10-10",
    "rent_time": "9:39:33",
    "rent_depcode": "025",
    "rent_user": "yuwa153",
    "return_date": "2013-09-10",
    "return_time": "12:11:14",
    "checkin": "Y",
    "track_depcode": null,
    "comment": "Auto checkout",
    "rent_reason_id": null,
    "phone": null,
    "link_vn": "541010093001",
    "hos_guid": null,
    "staff": null,
    "due_date": null,
    "return_staff": null,
    "rent_doctor_code": null,
    "hospital_department_id": null,
    "rent_user_list": null,
    "return_depcode": null,
    "return_computer_name": null
  }
]
```
