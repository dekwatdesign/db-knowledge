# `offline_track`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| offline_track_id | int(11) | NO | PRI | 0 |  |  |
| table_name | varchar(150) | YES | MUL | NULL |  |  |
| modify_type | varchar(10) | YES |  | NULL |  |  |
| key_value | varchar(250) | YES |  | NULL |  |  |
| track_datetime | datetime | YES | MUL | NULL |  |  |
| sync_ok | char(1) | YES | MUL | NULL |  |  |
| key_field | varchar(150) | YES | MUL | NULL |  |  |
| new_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| user_id | varchar(20) | YES |  | NULL |  |  |
| key_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_key_field_value_sync_ok | key_field | no | 1 |
| ix_key_field_value_sync_ok | key_value | no | 2 |
| ix_key_field_value_sync_ok | sync_ok | no | 3 |
| ix_sync_ok | sync_ok | no | 1 |
| ix_sync_ok_datetime | sync_ok | no | 1 |
| ix_sync_ok_datetime | track_datetime | no | 2 |
| ix_table_name | table_name | no | 1 |
| ix_table_name_datetime | table_name | no | 1 |
| ix_table_name_datetime | track_datetime | no | 2 |
| ix_track_datetime | track_datetime | no | 1 |
| PRIMARY | offline_track_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "offline_track_id": 1,
    "table_name": "ksklog",
    "modify_type": "insert",
    "key_value": "368405",
    "track_datetime": "2012-02-29 09:30:52",
    "sync_ok": "N",
    "key_field": "ksklog_id",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  },
  {
    "offline_track_id": 2,
    "table_name": "onlineuser",
    "modify_type": "insert",
    "key_value": "ID-{139F92AB-A3ED-4077-B9A4-39429A238B52}",
    "track_datetime": "2012-02-29 09:16:34",
    "sync_ok": "N",
    "key_field": "onlineid",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  },
  {
    "offline_track_id": 3,
    "table_name": "ksklog",
    "modify_type": "insert",
    "key_value": "368406",
    "track_datetime": "2012-02-29 09:16:34",
    "sync_ok": "N",
    "key_field": "ksklog_id",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  },
  {
    "offline_track_id": 4,
    "table_name": "onlineuser",
    "modify_type": "insert",
    "key_value": "ID-{B8295218-88CD-4EFE-A635-639843156DF8}",
    "track_datetime": "2012-02-29 12:42:33",
    "sync_ok": "N",
    "key_field": "onlineid",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  },
  {
    "offline_track_id": 5,
    "table_name": "ksklog",
    "modify_type": "insert",
    "key_value": "368820",
    "track_datetime": "2012-02-29 12:42:33",
    "sync_ok": "N",
    "key_field": "ksklog_id",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  },
  {
    "offline_track_id": 6,
    "table_name": "service_time",
    "modify_type": "update",
    "key_value": "550229090000",
    "track_datetime": "2012-02-29 14:13:35",
    "sync_ok": "N",
    "key_field": "vn",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  },
  {
    "offline_track_id": 8,
    "table_name": "report_access_log",
    "modify_type": "insert",
    "key_value": "265327",
    "track_datetime": "2012-02-29 14:14:07",
    "sync_ok": "N",
    "key_field": "report_access_id",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  },
  {
    "offline_track_id": 9,
    "table_name": "kskdepartment",
    "modify_type": "update",
    "key_value": "012",
    "track_datetime": "2012-02-29 14:14:34",
    "sync_ok": "N",
    "key_field": "depcode",
    "new_id": null,
    "hos_guid": null,
    "user_id": null,
    "key_count": null
  }
]
```
