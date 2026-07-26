# `replicate_trigger_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| service_start_datetime | timestamp | YES |  | NULL |  |  |
| last_service_active | timestamp | YES |  | NULL |  |  |
| transaction_process | int(11) | YES |  | NULL |  |  |
| transaction_queue | int(11) | YES |  | NULL |  |  |
| service_host_name | varchar(50) | YES |  | NULL |  |  |
| slave_information | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
