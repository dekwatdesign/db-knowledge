# `iclaim_ipd_discharge_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_ipd_discharge_log_id | int(11) | NO | PRI | 0 |  |  |
| request_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| request_message | text | YES |  | NULL |  |  |
| request_ms | text | YES |  | NULL |  |  |
| json | text | YES |  | NULL |  |  |
| iclaim_ipd_discharge_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficlaim_ipd_discharge3 | iclaim_ipd_discharge_id | no | 1 |
| PRIMARY | iclaim_ipd_discharge_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
