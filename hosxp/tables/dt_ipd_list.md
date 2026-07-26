# `dt_ipd_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| request_date_time | datetime | YES | MUL | NULL |  |  |
| request_note | text | YES |  | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| list_string | varchar(250) | YES |  | NULL |  |  |
| operation_complete | char(1) | YES |  | NULL |  |  |
| doctor | varchar(9) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dt_id | yes | 1 |
| request_date_time | request_date_time | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dt_id": 3,
    "an": "540000801",
    "request_date_time": "2011-10-13 14:56:41",
    "request_note": "อุดฟัน",
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "008",
    "hos_guid": null
  },
  {
    "dt_id": 7,
    "an": "540000894",
    "request_date_time": "2011-11-01 13:25:42",
    "request_note": "ตรวจฟัน",
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "021",
    "hos_guid": null
  },
  {
    "dt_id": 9,
    "an": "540000890",
    "request_date_time": "2011-11-10 10:00:00",
    "request_note": "ฟันข้างหน้าโยก",
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "082",
    "hos_guid": null
  },
  {
    "dt_id": 10,
    "an": "540000861",
    "request_date_time": "2011-11-10 10:30:00",
    "request_note": "ตรวจฟัน",
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "050",
    "hos_guid": null
  },
  {
    "dt_id": 13,
    "an": "540000979",
    "request_date_time": "2011-12-08 16:08:31",
    "request_note": null,
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "007",
    "hos_guid": null
  },
  {
    "dt_id": 15,
    "an": "540001041",
    "request_date_time": "2011-12-08 16:23:39",
    "request_note": null,
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "053",
    "hos_guid": null
  },
  {
    "dt_id": 16,
    "an": "540000990",
    "request_date_time": "2011-12-08 16:24:55",
    "request_note": null,
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "053",
    "hos_guid": null
  },
  {
    "dt_id": 17,
    "an": "540000984",
    "request_date_time": "2011-12-08 16:25:29",
    "request_note": null,
    "staff": null,
    "list_string": "",
    "operation_complete": null,
    "doctor": "045",
    "hos_guid": null
  }
]
```
