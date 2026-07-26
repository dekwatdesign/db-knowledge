# `bms_ops_usage_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint(20) | NO | PRI | 0 |  |  |
| ts | datetime | YES | MUL | NULL |  |  |
| user_session_id | varchar(64) | YES |  | NULL |  |  |
| user_role | varchar(64) | YES |  | NULL |  |  |
| question_text | text | YES |  | NULL |  |  |
| query_category | varchar(32) | YES | MUL | NULL |  |  |
| classifier_confidence | decimal(10,0) | YES |  | NULL |  |  |
| summary_text | text | YES |  | NULL |  |  |
| dashboard_id | varchar(64) | YES |  | NULL |  |  |
| action_recipe | varchar(64) | YES |  | NULL |  |  |
| followup_turn_at | datetime | YES |  | NULL |  |  |
| followup_action | varchar(32) | YES |  | NULL |  |  |
| latency_ms | int(11) | YES |  | NULL |  |  |
| data_freshness_minutes | int(11) | YES |  | NULL |  |  |
| late_wards_count | int(11) | YES |  | NULL |  |  |
| null_rate_critical | decimal(10,0) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_category | query_category | no | 1 |
| ix_idx_ts | ts | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
