# `api_access_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| api_access_log_id | int(11) | NO | PRI | 0 |  |  |
| log_ts | datetime | YES | MUL | NULL |  |  |
| request_id | char(36) | YES | MUL | NULL |  |  |
| actor_user | varchar(64) | YES | MUL | NULL |  |  |
| actor_app | varchar(128) | YES |  | NULL |  |  |
| actor_addon | varchar(128) | YES |  | NULL |  |  |
| client_ip | varchar(45) | YES |  | NULL |  |  |
| action | varchar(16) | YES |  | NULL |  |  |
| lawful_basis | smallint(6) | YES |  | NULL |  |  |
| purpose_code | varchar(64) | YES |  | NULL |  |  |
| subjects_json | longtext | YES |  | NULL |  |  |
| fields_json | longtext | YES |  | NULL |  |  |
| row_count | int(11) | YES |  | NULL |  |  |
| hash_prev | char(64) | YES |  | NULL |  |  |
| hash_self | char(64) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_api_access_log_actor | actor_user | no | 1 |
| ix_api_access_log_actor | log_ts | no | 2 |
| ix_api_access_log_request | request_id | no | 1 |
| ix_api_access_log_ts | log_ts | no | 1 |
| PRIMARY | api_access_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
