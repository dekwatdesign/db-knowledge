# `ovst_service_time_uni`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_service_time_uni_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| ovst_service_time_type_code | varchar(15) | YES | MUL | NULL |  |  |
| start_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| total_second | int(11) | YES |  | NULL |  |  |
| total_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_unique | vn | yes | 1 |
| ix_vn_unique | ovst_service_time_type_code | yes | 2 |
| ix_vn_unique_index | ovst_service_time_type_code | yes | 1 |
| ix_vn_unique_index | vn | yes | 2 |
| PRIMARY | ovst_service_time_uni_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_service_time_uni_id": 1,
    "vn": "671003083026",
    "doctor": "353",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 08:48:01",
    "finish_datetime": "2024-10-03 09:03:18",
    "total_second": 917,
    "total_time": "0:15:17"
  },
  {
    "ovst_service_time_uni_id": 2,
    "vn": "671003083010",
    "doctor": "353",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 09:08:02",
    "finish_datetime": "2024-10-03 09:16:03",
    "total_second": 481,
    "total_time": "0:08:01"
  },
  {
    "ovst_service_time_uni_id": 3,
    "vn": "671003083008",
    "doctor": "353",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 09:20:31",
    "finish_datetime": "2024-10-03 09:37:05",
    "total_second": 994,
    "total_time": "0:16:34"
  },
  {
    "ovst_service_time_uni_id": 4,
    "vn": "671003083042",
    "doctor": "353",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 09:44:10",
    "finish_datetime": "2024-10-03 09:53:10",
    "total_second": 540,
    "total_time": "0:09:00"
  },
  {
    "ovst_service_time_uni_id": 5,
    "vn": "671003093022",
    "doctor": "068",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 10:27:23",
    "finish_datetime": "2024-10-03 10:40:31",
    "total_second": 788,
    "total_time": "0:13:08"
  },
  {
    "ovst_service_time_uni_id": 6,
    "vn": "671003103052",
    "doctor": "068",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 10:57:47",
    "finish_datetime": "2024-10-03 11:01:40",
    "total_second": 233,
    "total_time": "0:03:53"
  },
  {
    "ovst_service_time_uni_id": 7,
    "vn": "671003103050",
    "doctor": "068",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 11:06:22",
    "finish_datetime": "2024-10-03 11:09:54",
    "total_second": 212,
    "total_time": "0:03:32"
  },
  {
    "ovst_service_time_uni_id": 8,
    "vn": "671003103034",
    "doctor": "068",
    "ovst_service_time_type_code": "OPD-DOCTOR",
    "start_datetime": "2024-10-03 11:13:28",
    "finish_datetime": "2024-10-03 11:21:29",
    "total_second": 481,
    "total_time": "0:08:01"
  }
]
```
