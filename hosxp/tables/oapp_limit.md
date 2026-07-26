# `oapp_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_limit_id | int(11) | NO | PRI | 0 |  |  |
| oapp_date | date | YES | MUL | NULL |  |  |
| oapp_clinic | char(3) | YES | MUL | NULL |  |  |
| oapp_limit | int(11) | YES |  | NULL |  |  |
| start_time | time | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| check_time | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| limit_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_date | oapp_date | no | 1 |
| ix_oapp_limit_clinic | oapp_date | no | 1 |
| ix_oapp_limit_clinic | oapp_clinic | no | 2 |
| ix_oapp_limit_clinic_index | oapp_clinic | no | 1 |
| ix_oapp_limit_clinic_index | oapp_date | no | 2 |
| PRIMARY | oapp_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "oapp_limit_id": 9,
    "oapp_date": null,
    "oapp_clinic": null,
    "oapp_limit": 15,
    "start_time": "9:00:00",
    "end_time": "10:30:00",
    "check_time": "Y",
    "hos_guid": null,
    "limit_note": null
  },
  {
    "oapp_limit_id": 10,
    "oapp_date": "2014-06-18",
    "oapp_clinic": "013",
    "oapp_limit": 15,
    "start_time": "9:00:00",
    "end_time": "10:30:00",
    "check_time": "Y",
    "hos_guid": null,
    "limit_note": null
  },
  {
    "oapp_limit_id": 12,
    "oapp_date": "2021-01-04",
    "oapp_clinic": "041",
    "oapp_limit": 30,
    "start_time": "9:00:00",
    "end_time": "15:00:00",
    "check_time": "N",
    "hos_guid": null,
    "limit_note": null
  },
  {
    "oapp_limit_id": 13,
    "oapp_date": "2021-01-06",
    "oapp_clinic": "042",
    "oapp_limit": 15,
    "start_time": "9:00:00",
    "end_time": "15:00:00",
    "check_time": null,
    "hos_guid": null,
    "limit_note": null
  },
  {
    "oapp_limit_id": 14,
    "oapp_date": "2021-01-04",
    "oapp_clinic": "043",
    "oapp_limit": 5,
    "start_time": "9:00:00",
    "end_time": "15:00:00",
    "check_time": null,
    "hos_guid": null,
    "limit_note": null
  },
  {
    "oapp_limit_id": 15,
    "oapp_date": "2022-03-28",
    "oapp_clinic": "045",
    "oapp_limit": 14,
    "start_time": "9:00:00",
    "end_time": "15:00:00",
    "check_time": null,
    "hos_guid": null,
    "limit_note": null
  },
  {
    "oapp_limit_id": 16,
    "oapp_date": "2022-04-18",
    "oapp_clinic": "044",
    "oapp_limit": 12,
    "start_time": "9:00:00",
    "end_time": "15:00:00",
    "check_time": null,
    "hos_guid": null,
    "limit_note": null
  },
  {
    "oapp_limit_id": 17,
    "oapp_date": "2022-04-25",
    "oapp_clinic": "044",
    "oapp_limit": 12,
    "start_time": "9:00:00",
    "end_time": "15:00:00",
    "check_time": null,
    "hos_guid": null,
    "limit_note": null
  }
]
```
