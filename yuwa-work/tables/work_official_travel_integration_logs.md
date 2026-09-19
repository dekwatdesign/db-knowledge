# `work_official_travel_integration_logs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| travel_id | int | YES | MUL | NULL |  |  |
| integration_key | varchar(80) | NO | MUL | NULL |  |  |
| status | varchar(30) | NO |  | NULL |  |  |
| message | varchar(1000) | YES |  | NULL |  |  |
| payload_json | text | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_ot_integration_key | integration_key | no | 1 |
| idx_ot_integration_key | created_at | no | 2 |
| idx_ot_integration_travel | travel_id | no | 1 |
| idx_ot_integration_travel | created_at | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
