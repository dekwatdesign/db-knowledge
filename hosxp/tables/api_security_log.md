# `api_security_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| api_security_log_id | int(11) | NO | PRI | 0 |  |  |
| log_ts | datetime | YES | MUL | NULL |  |  |
| request_id | char(36) | YES |  | NULL |  |  |
| event_code | varchar(32) | YES | MUL | NULL |  |  |
| severity | smallint(6) | YES |  | NULL |  |  |
| actor_user | varchar(64) | YES |  | NULL |  |  |
| client_ip | varchar(45) | YES |  | NULL |  |  |
| detail | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_api_security_log_event | event_code | no | 1 |
| ix_api_security_log_event | log_ts | no | 2 |
| ix_api_security_log_ts | log_ts | no | 1 |
| PRIMARY | api_security_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
