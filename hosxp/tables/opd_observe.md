# `opd_observe`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| observe_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| send_doctor | varchar(7) | YES | MUL | NULL |  |  |
| send_date_time | datetime | YES | MUL | NULL |  |  |
| symptom | text | YES |  | NULL |  |  |
| leave_date_time | datetime | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| observe_status | int(11) | YES | MUL | NULL |  |  |
| nurse_activity | text | YES |  | NULL |  |  |
| bedno | varchar(6) | YES |  | NULL |  |  |
| roomno | varchar(6) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| send_date | date | YES | MUL | NULL |  |  |
| send_time | time | YES |  | NULL |  |  |
| leave_date | date | YES |  | NULL |  |  |
| leave_time | time | YES |  | NULL |  |  |
| observe_depcode | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_observe_date | send_date | no | 1 |
| observe_status | observe_status | no | 1 |
| PRIMARY | observe_id | yes | 1 |
| send_date_time | send_date_time | no | 1 |
| send_doctor | send_doctor | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "observe_id": 1,
    "vn": "550125082414",
    "send_doctor": null,
    "send_date_time": "2012-01-25 08:38:33",
    "symptom": null,
    "leave_date_time": null,
    "note": null,
    "observe_status": null,
    "nurse_activity": null,
    "bedno": null,
    "roomno": null,
    "ward": null,
    "hos_guid": null,
    "send_date": null,
    "send_time": null,
    "leave_date": null,
    "leave_time": null,
    "observe_depcode": null
  }
]
```
