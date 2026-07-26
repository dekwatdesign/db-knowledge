# `online_etl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospcode | varchar(9) | NO | PRI |  |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| last_full_sync_date | date | YES |  | NULL |  |  |
| etl_version | varchar(25) | YES |  | NULL |  |  |
| total_patient | int(11) | YES |  | NULL |  |  |
| total_visit | int(11) | YES |  | NULL |  |  |
| total_ipt | int(11) | YES |  | NULL |  |  |
| transfer_patient | int(11) | YES |  | NULL |  |  |
| transfer_visit | int(11) | YES |  | NULL |  |  |
| transfer_ipt | int(11) | YES |  | NULL |  |  |
| station_count | int(11) | YES |  | NULL |  |  |
| hosxp_version | varchar(100) | YES |  | NULL |  |  |
| wait_tx | varchar(100) | YES |  | NULL |  |  |
| db_version | varchar(50) | YES |  | NULL |  |  |
| total_person | int(11) | YES |  | NULL |  |  |
| etl_begin_time | datetime | YES |  | NULL |  |  |
| etl_end_time | datetime | YES |  | NULL |  |  |
| send_status | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hospcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
