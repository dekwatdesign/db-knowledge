# `physic_main_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_main_ipd_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| type1 | char(1) | YES |  | NULL |  |  |
| type2 | char(1) | YES |  | NULL |  |  |
| type3 | char(1) | YES |  | NULL |  |  |
| service_text | varchar(250) | YES |  | NULL |  |  |
| physic_chronic_id | int(11) | YES | MUL | NULL |  |  |
| problem_text | longtext | YES |  | NULL |  |  |
| plan_text | longtext | YES |  | NULL |  |  |
| progress_text | longtext | YES |  | NULL |  |  |
| doctor_text | varchar(250) | YES |  | NULL |  |  |
| type_text | varchar(250) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| service_time | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| send_staff | varchar(15) | YES |  | NULL |  |  |
| send_ward | varchar(7) | YES |  | NULL |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |
| service_complete | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_physic_chronic_id | physic_chronic_id | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | physic_main_ipd_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_main_ipd_id": 9,
    "an": "540000985",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2012-02-09",
    "service_time": "9:00:00",
    "hn": "610001041",
    "send_staff": "yuwa079",
    "send_ward": "04",
    "send_datetime": "2012-02-09 13:54:34",
    "service_complete": "N",
    "hos_guid": null
  },
  {
    "physic_main_ipd_id": 15,
    "an": "630000931",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2020-10-22",
    "service_time": "10:03:43",
    "hn": "630000128",
    "send_staff": "yuwa227",
    "send_ward": "01",
    "send_datetime": "2020-10-22 10:03:49",
    "service_complete": "N",
    "hos_guid": null
  },
  {
    "physic_main_ipd_id": 17,
    "an": "640000127",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2021-03-11",
    "service_time": "14:30:52",
    "hn": "600001494",
    "send_staff": "yuwa066",
    "send_ward": "03",
    "send_datetime": "2021-03-11 14:30:55",
    "service_complete": "N",
    "hos_guid": null
  },
  {
    "physic_main_ipd_id": 18,
    "an": "640000128",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2021-03-11",
    "service_time": "14:32:20",
    "hn": "630000438",
    "send_staff": "yuwa066",
    "send_ward": "03",
    "send_datetime": "2021-03-11 14:32:27",
    "service_complete": "N",
    "hos_guid": null
  },
  {
    "physic_main_ipd_id": 19,
    "an": "640000129",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2021-03-11",
    "service_time": "14:32:38",
    "hn": "630000977",
    "send_staff": "yuwa066",
    "send_ward": "03",
    "send_datetime": "2021-03-11 14:32:39",
    "service_complete": "N",
    "hos_guid": null
  },
  {
    "physic_main_ipd_id": 20,
    "an": "640000131",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2021-03-11",
    "service_time": "14:33:03",
    "hn": "610001183",
    "send_staff": "yuwa066",
    "send_ward": "03",
    "send_datetime": "2021-03-11 14:33:05",
    "service_complete": "N",
    "hos_guid": null
  },
  {
    "physic_main_ipd_id": 21,
    "an": "640000196",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2021-03-11",
    "service_time": "14:33:24",
    "hn": "600000346",
    "send_staff": "yuwa066",
    "send_ward": "03",
    "send_datetime": "2021-03-11 14:33:25",
    "service_complete": "N",
    "hos_guid": null
  },
  {
    "physic_main_ipd_id": 23,
    "an": "640000195",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "\"\"",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": "\"\"",
    "type_text": "",
    "vstdate": "2021-03-11",
    "service_time": "14:33:44",
    "hn": "610001108",
    "send_staff": "yuwa066",
    "send_ward": "03",
    "send_datetime": "2021-03-11 14:33:46",
    "service_complete": "N",
    "hos_guid": null
  }
]
```
