# `schedule`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| parentid | int(11) | YES |  | NULL |  |  |
| sc_type | int(11) | YES |  | NULL |  |  |
| start_date | datetime | YES |  | NULL |  |  |
| finish_date | datetime | YES |  | NULL |  |  |
| options | int(11) | YES |  | NULL |  |  |
| caption | varchar(250) | YES |  | NULL |  |  |
| recurrence_index | int(11) | YES |  | NULL |  |  |
| recurrence_info | blob | YES |  | NULL |  |  |
| resource_id | int(11) | YES |  | NULL |  |  |
| location | varchar(250) | YES |  | NULL |  |  |
| message | longtext | YES |  | NULL |  |  |
| reminder | int(11) | YES |  | NULL |  |  |
| state | int(11) | YES |  | NULL |  |  |
| label_color | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| reminder_date | datetime | YES |  | NULL |  |  |
| reminder_minutes_beforestart | int(11) | YES |  | NULL |  |  |
| reminder_resources_data | blob | YES |  | NULL |  |  |
| sync_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor_code | doctor_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2013-09-09 12:30:00",
    "finish_date": "2013-09-09 13:00:00",
    "options": 2,
    "caption": "OPD",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x02\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x005\\xa2\\x00\\x00'",
    "resource_id": null,
    "location": "",
    "message": null,
    "reminder": null,
    "state": 2,
    "label_color": 7649020,
    "doctor_code": "270",
    "reminder_date": "2013-09-09 12:15:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  },
  {
    "id": 2,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2013-09-02 08:00:00",
    "finish_date": "2013-09-02 08:30:00",
    "options": 2,
    "caption": "ออกชุมชน",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x02\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00.\\xa2\\x00\\x00'",
    "resource_id": null,
    "location": "",
    "message": null,
    "reminder": null,
    "state": 1,
    "label_color": 8703700,
    "doctor_code": "270",
    "reminder_date": "2013-09-02 07:45:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  },
  {
    "id": 3,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2013-09-06 08:00:00",
    "finish_date": "2013-09-06 08:30:00",
    "options": 2,
    "caption": "NM..",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x02\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x002\\xa2\\x00\\x00'",
    "resource_id": null,
    "location": "",
    "message": null,
    "reminder": null,
    "state": 2,
    "label_color": 8689404,
    "doctor_code": "270",
    "reminder_date": "2013-09-06 07:45:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  },
  {
    "id": 4,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2020-10-29 11:00:00",
    "finish_date": "2020-10-29 11:10:00",
    "options": 2,
    "caption": "[MASKED_FULLNAME]",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x04\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00d\\xac\\x00\\x00'",
    "resource_id": 2,
    "location": "ห้องบัตร:จิตเวชเด็กและวัยรุ่น",
    "message": null,
    "reminder": null,
    "state": 912455,
    "label_color": 8689404,
    "doctor_code": null,
    "reminder_date": "2020-10-29 10:45:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  },
  {
    "id": 5,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2020-10-29 11:00:00",
    "finish_date": "2020-10-29 11:10:00",
    "options": 2,
    "caption": "[MASKED_FULLNAME]",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x04\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00d\\xac\\x00\\x00'",
    "resource_id": 2,
    "location": "โต๊ะคัดกรอง:จิตเวชเด็กและวัยรุ่น",
    "message": "097-1373735",
    "reminder": null,
    "state": 912425,
    "label_color": 8689404,
    "doctor_code": null,
    "reminder_date": "2020-10-29 10:45:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  },
  {
    "id": 6,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2020-12-29 08:30:00",
    "finish_date": "2020-12-29 08:40:00",
    "options": 2,
    "caption": "[MASKED_FULLNAME]",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x04\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\xa1\\xac\\x00\\x00'",
    "resource_id": 2,
    "location": "โต๊ะคัดกรอง:จิตเวชเด็กและวัยรุ่น",
    "message": "064-2696055",
    "reminder": null,
    "state": 912318,
    "label_color": 8689404,
    "doctor_code": null,
    "reminder_date": "2020-12-29 08:15:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  },
  {
    "id": 7,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2020-12-29 08:30:00",
    "finish_date": "2020-12-29 08:40:00",
    "options": 2,
    "caption": "[MASKED_FULLNAME]",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x04\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\xa1\\xac\\x00\\x00'",
    "resource_id": 2,
    "location": "โต๊ะคัดกรอง:จิตเวชเด็กและวัยรุ่น",
    "message": "064-2850063",
    "reminder": null,
    "state": 912201,
    "label_color": 8689404,
    "doctor_code": null,
    "reminder_date": "2020-12-29 08:15:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  },
  {
    "id": 8,
    "parentid": null,
    "sc_type": 0,
    "start_date": "2020-10-09 09:30:00",
    "finish_date": "2020-10-09 09:40:00",
    "options": 2,
    "caption": "[MASKED_FULLNAME]",
    "recurrence_index": -1,
    "recurrence_info": "b'\\xff\\xff\\xff\\xff\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xf0\\xbf\\x04\\x01\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x01\\x00\\x00\\x00\\x00P\\xac\\x00\\x00'",
    "resource_id": 2,
    "location": "โต๊ะคัดกรอง:จิตเวชเด็กและวัยรุ่น",
    "message": "083-3896294",
    "reminder": null,
    "state": 912122,
    "label_color": 8689404,
    "doctor_code": null,
    "reminder_date": "2020-10-09 09:15:00",
    "reminder_minutes_beforestart": 15,
    "reminder_resources_data": null,
    "sync_id": null,
    "hos_guid": null
  }
]
```
