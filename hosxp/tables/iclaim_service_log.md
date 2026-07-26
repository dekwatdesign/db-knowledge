# `iclaim_service_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_service_log_id | int(11) | NO | PRI | 0 |  |  |
| ref_id | varchar(50) | YES |  | NULL |  |  |
| insure_code | varchar(15) | YES |  | NULL |  |  |
| request_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| request_second | int(11) | YES |  | NULL |  |  |
| url | varchar(200) | YES |  | NULL |  |  |
| request_ms | int(11) | YES |  | NULL |  |  |
| jwt | text | YES |  | NULL |  |  |
| json | text | YES |  | NULL |  |  |
| request_json | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_service_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
