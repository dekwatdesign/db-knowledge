# `iclaim_opd_discharge_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_opd_discharge_log_id | int(11) | NO | PRI | 0 |  |  |
| request_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| request_message | text | YES |  | NULL |  |  |
| request_ms | text | YES |  | NULL |  |  |
| json | text | YES |  | NULL |  |  |
| iclaim_opd_discharge_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_iclaim_opd_discharge_id | iclaim_opd_discharge_id | no | 1 |
| PRIMARY | iclaim_opd_discharge_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
