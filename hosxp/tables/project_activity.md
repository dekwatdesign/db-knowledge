# `project_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_activity_id | int(11) | NO | PRI | 0 |  |  |
| project_id | int(11) | YES | MUL | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| activity_start_date | date | YES |  | NULL |  |  |
| activity_finish_date | date | YES |  | NULL |  |  |
| activity_detail_text | text | YES |  | NULL |  |  |
| activity_status_id | int(11) | YES |  | NULL |  |  |
| activity_budget | double(15,3) | YES |  | NULL |  |  |
| project_budget_type_id | int(11) | YES |  | NULL |  |  |
| project_activity_type_id | int(11) | YES |  | NULL |  |  |
| project_activity_duration | int(11) | YES |  | NULL |  |  |
| project_act_item_count | int(11) | YES |  | NULL |  |  |
| chart_code | varchar(20) | YES |  | NULL |  |  |
| project_acc_chart_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_id | project_id | no | 1 |
| PRIMARY | project_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
