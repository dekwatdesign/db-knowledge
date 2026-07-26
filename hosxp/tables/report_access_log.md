# `report_access_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_access_id | int(11) | NO | PRI | 0 |  |  |
| report_name | varchar(250) | YES | MUL | NULL |  |  |
| loginname | varchar(20) | YES | MUL | NULL |  |  |
| department | char(3) | YES | MUL | NULL |  |  |
| access_date_time | datetime | YES | MUL | NULL |  |  |
| successful | char(1) | YES |  | NULL |  |  |
| finish_date_time | datetime | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| time_second | int(11) | YES |  | NULL |  |  |
| parameter_list | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| access_date_time | access_date_time | no | 1 |
| department | department | no | 1 |
| loginname | loginname | no | 1 |
| PRIMARY | report_access_id | yes | 1 |
| report_name | report_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "report_access_id": 2505893,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:21:57",
    "successful": null,
    "finish_date_time": "2022-12-09 07:22:25",
    "computer_name": "A63-0045",
    "time_second": 28,
    "parameter_list": null
  },
  {
    "report_access_id": 2505894,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:23:11",
    "successful": null,
    "finish_date_time": "2022-12-09 07:23:16",
    "computer_name": "A63-0045",
    "time_second": 5,
    "parameter_list": null
  },
  {
    "report_access_id": 2505895,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:26:44",
    "successful": null,
    "finish_date_time": "2022-12-09 07:27:01",
    "computer_name": "A63-0045",
    "time_second": 17,
    "parameter_list": null
  },
  {
    "report_access_id": 2505896,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:27:08",
    "successful": null,
    "finish_date_time": "2022-12-09 07:27:29",
    "computer_name": "A63-0045",
    "time_second": 21,
    "parameter_list": null
  },
  {
    "report_access_id": 2505897,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:27:35",
    "successful": null,
    "finish_date_time": "2022-12-09 07:27:47",
    "computer_name": "A63-0045",
    "time_second": 12,
    "parameter_list": null
  },
  {
    "report_access_id": 2505898,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:33:43",
    "successful": null,
    "finish_date_time": "2022-12-09 07:33:45",
    "computer_name": "A63-0045",
    "time_second": 2,
    "parameter_list": null
  },
  {
    "report_access_id": 2505899,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:33:53",
    "successful": null,
    "finish_date_time": "2022-12-09 07:34:03",
    "computer_name": "A63-0045",
    "time_second": 10,
    "parameter_list": null
  },
  {
    "report_access_id": 2505900,
    "report_name": "Appointment List 1",
    "loginname": "yuwa244",
    "department": "032",
    "access_date_time": "2022-12-09 07:38:05",
    "successful": null,
    "finish_date_time": "2022-12-09 07:38:10",
    "computer_name": "A63-0045",
    "time_second": 5,
    "parameter_list": null
  }
]
```
