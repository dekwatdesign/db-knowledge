# `work_plan_strategy_initiatives`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| objective_id | int | YES | MUL | NULL |  |  |
| title | varchar(600) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| owner_dep_index | tinyint | YES | MUL | NULL |  |  |
| owner_dep_id | int | YES |  | NULL |  |  |
| budget_amount | decimal(14,2) | YES |  | NULL |  |  |
| date_start | date | YES |  | NULL |  |  |
| date_end | date | YES |  | NULL |  |  |
| progress_percent | decimal(8,2) | NO |  | 0.00 |  |  |
| status | enum('active','completed','delayed','archived') | NO |  | active |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| deleted_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_initiative_objective | objective_id | no | 1 |
| idx_plan_initiative_objective | status | no | 2 |
| idx_plan_initiative_owner | owner_dep_index | no | 1 |
| idx_plan_initiative_owner | owner_dep_id | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| objective_id | `work_plan_strategy_objectives.id` | fk_plan_initiative_objective |

## Sample rows (0)

```json
[]
```
