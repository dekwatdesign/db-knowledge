# `stock_project_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_plan_id | int(11) | NO | PRI | 0 |  |  |
| project_plan_name | varchar(200) | YES | MUL | NULL |  |  |
| project_plan_status | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name_unique | project_plan_name | no | 1 |
| ix_status | project_plan_status | no | 1 |
| PRIMARY | project_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
