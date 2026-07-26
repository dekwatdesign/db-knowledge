# `project_acc_chart_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_acc_chart_group_id | int(11) | NO | PRI | 0 |  |  |
| chart_code | varchar(20) | YES | MUL | NULL |  |  |
| project_acc_chart_group_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_chart_code | chart_code | no | 1 |
| PRIMARY | project_acc_chart_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
