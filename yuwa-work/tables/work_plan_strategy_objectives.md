# `work_plan_strategy_objectives`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| dimension_key | varchar(50) | YES | MUL | NULL |  |  |
| title | varchar(600) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| fiscal_year_start | smallint | YES |  | NULL |  |  |
| fiscal_year_end | smallint | YES |  | NULL |  |  |
| owner_dep_index | tinyint | YES | MUL | NULL |  |  |
| owner_dep_id | int | YES |  | NULL |  |  |
| progress_percent | decimal(8,2) | NO |  | 0.00 |  |  |
| status | enum('active','completed','delayed','archived') | NO |  | active |  |  |
| sort_order | int | NO |  | 0 |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| deleted_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_strategy_dimension | dimension_key | no | 1 |
| idx_plan_strategy_dimension | status | no | 2 |
| idx_plan_strategy_owner | owner_dep_index | no | 1 |
| idx_plan_strategy_owner | owner_dep_id | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
