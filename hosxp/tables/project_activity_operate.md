# `project_activity_operate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_activity_operate_id | int(11) | NO | PRI | 0 |  |  |
| project_activity_id | int(11) | YES | MUL | NULL |  |  |
| project_activity_operate_type_id | int(11) | YES |  | NULL |  |  |
| activity_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_activity_id | project_activity_id | no | 1 |
| PRIMARY | project_activity_operate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
