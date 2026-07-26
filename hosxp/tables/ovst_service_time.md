# `ovst_service_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_service_time_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| service_date | date | YES |  | NULL |  |  |
| service_begin_datetime | datetime | YES |  | NULL |  |  |
| service_end_datetime | datetime | YES |  | NULL |  |  |
| service_time_hour | int(11) | YES |  | NULL |  |  |
| service_time_minute | int(11) | YES |  | NULL |  |  |
| service_time_minute_total | int(11) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| service_time_second | int(11) | YES |  | NULL |  |  |
| ovst_service_time_type_code | varchar(15) | YES |  | NULL |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_service_time_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_service_time_id": 1,
    "vn": "671003083026",
    "depcode": "",
    "doctor": "353",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 08:48:01",
    "service_end_datetime": "2024-10-03 09:03:18",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 09:03:18",
    "service_time_second": 917,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  },
  {
    "ovst_service_time_id": 2,
    "vn": "671003083010",
    "depcode": "",
    "doctor": "353",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 09:08:02",
    "service_end_datetime": "2024-10-03 09:16:03",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 09:16:03",
    "service_time_second": 481,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  },
  {
    "ovst_service_time_id": 3,
    "vn": "671003083008",
    "depcode": "",
    "doctor": "353",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 09:20:31",
    "service_end_datetime": "2024-10-03 09:37:05",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 09:37:05",
    "service_time_second": 994,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  },
  {
    "ovst_service_time_id": 4,
    "vn": "671003083042",
    "depcode": "",
    "doctor": "353",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 09:44:10",
    "service_end_datetime": "2024-10-03 09:53:10",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 09:53:10",
    "service_time_second": 540,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  },
  {
    "ovst_service_time_id": 5,
    "vn": "671003093022",
    "depcode": "",
    "doctor": "068",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 10:27:23",
    "service_end_datetime": "2024-10-03 10:40:31",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 10:40:31",
    "service_time_second": 788,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  },
  {
    "ovst_service_time_id": 6,
    "vn": "671003103052",
    "depcode": "",
    "doctor": "068",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 10:57:47",
    "service_end_datetime": "2024-10-03 11:01:40",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 11:01:40",
    "service_time_second": 233,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  },
  {
    "ovst_service_time_id": 7,
    "vn": "671003103050",
    "depcode": "",
    "doctor": "068",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 11:06:22",
    "service_end_datetime": "2024-10-03 11:09:54",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 11:09:54",
    "service_time_second": 212,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  },
  {
    "ovst_service_time_id": 8,
    "vn": "671003103034",
    "depcode": "",
    "doctor": "068",
    "service_date": "2024-10-03",
    "service_begin_datetime": "2024-10-03 11:13:28",
    "service_end_datetime": "2024-10-03 11:21:29",
    "service_time_hour": null,
    "service_time_minute": null,
    "service_time_minute_total": null,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2024-10-03 11:21:29",
    "service_time_second": 481,
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "computer_name": "S08000201-00052"
  }
]
```
