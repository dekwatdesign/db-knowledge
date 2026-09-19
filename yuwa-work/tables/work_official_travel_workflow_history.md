# `work_official_travel_workflow_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | bigint | NO | PRI | NULL | auto_increment |  |
| travel_id | int | NO | MUL | NULL |  |  |
| from_status | varchar(40) | YES |  | NULL |  |  |
| to_status | varchar(40) | NO | MUL | NULL |  |  |
| action | varchar(40) | NO |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| acted_by | int | YES |  | NULL |  |  |
| acted_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_ot_workflow_status | to_status | no | 1 |
| idx_ot_workflow_status | acted_at | no | 2 |
| idx_ot_workflow_travel | travel_id | no | 1 |
| idx_ot_workflow_travel | acted_at | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| travel_id | `work_official_travel.id` | fk_ot_workflow_travel |

## Sample rows (0)

```json
[]
```
