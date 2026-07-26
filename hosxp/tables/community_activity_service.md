# `community_activity_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| community_activity_service_id | int(11) | NO | PRI | 0 |  |  |
| community_activity_service_date_start | date | YES |  | NULL |  |  |
| community_activity_service_date_finish | date | YES |  | NULL |  |  |
| community_activity_service_date_entry | datetime | YES |  | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| community_activity_service_tambon_id | varchar(6) | YES |  | NULL |  |  |
| community_activity_service_moo | varchar(2) | YES |  | NULL |  |  |
| provis_comactivity_code | char(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | community_activity_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "community_activity_service_id": 1,
    "community_activity_service_date_start": "2016-10-01",
    "community_activity_service_date_finish": "2017-09-30",
    "community_activity_service_date_entry": "2016-11-10 14:46:20",
    "doctor": null,
    "community_activity_service_tambon_id": "110101",
    "community_activity_service_moo": "0",
    "provis_comactivity_code": "1A33",
    "hos_guid": null
  },
  {
    "community_activity_service_id": 2,
    "community_activity_service_date_start": "2016-10-01",
    "community_activity_service_date_finish": "2017-09-30",
    "community_activity_service_date_entry": "2016-11-10 14:46:56",
    "doctor": null,
    "community_activity_service_tambon_id": "110101",
    "community_activity_service_moo": "0",
    "provis_comactivity_code": "1A34",
    "hos_guid": null
  },
  {
    "community_activity_service_id": 4,
    "community_activity_service_date_start": "2016-10-01",
    "community_activity_service_date_finish": "2017-09-30",
    "community_activity_service_date_entry": "2016-11-18 14:49:00",
    "doctor": "185",
    "community_activity_service_tambon_id": "110101",
    "community_activity_service_moo": "0",
    "provis_comactivity_code": "1A33",
    "hos_guid": null
  }
]
```
