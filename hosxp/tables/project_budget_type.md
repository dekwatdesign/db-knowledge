# `project_budget_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_budget_type_id | int(11) | NO | PRI | 0 |  |  |
| project_budget_type_name | varchar(200) | YES | UNI | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| budget_total | double(15,3) | YES |  | NULL |  |  |
| budget_use | double(15,3) | YES |  | NULL |  |  |
| budget_remain | double(15,3) | YES |  | NULL |  |  |
| project_budget_subtype_id | int(11) | YES |  | NULL |  |  |
| is_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_budget_type_name | project_budget_type_name | yes | 1 |
| PRIMARY | project_budget_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
