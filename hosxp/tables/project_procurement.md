# `project_procurement`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_procurement_id | int(11) | NO | PRI | 0 |  |  |
| project_group_id | int(11) | YES |  | NULL |  |  |
| project_subgroup_id | int(11) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES |  | NULL |  |  |
| project_budget_type_id | int(11) | YES |  | NULL |  |  |
| total_budget | double(15,3) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| project_status_id | int(11) | YES |  | NULL |  |  |
| project_activity_type_id | int(11) | YES |  | NULL |  |  |
| project_procurement_type_id | int(11) | YES |  | NULL |  |  |
| chart_code | varchar(20) | YES |  | NULL |  |  |
| project_acc_chart_group_id | int(11) | YES |  | NULL |  |  |
| procurement_date | date | YES | MUL | NULL |  |  |
| project_pc_status_type_id | int(11) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| procurement_approve | char(1) | YES |  | NULL |  |  |
| project_department_id | int(11) | YES | MUL | NULL |  |  |
| stat_pc_pr_date | date | YES |  | NULL |  |  |
| stat_pc_po_date | date | YES |  | NULL |  |  |
| stat_pc_deliver_date | date | YES |  | NULL |  |  |
| est_postpone_date | date | YES |  | NULL |  |  |
| est_postpone_approve | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_department_id | project_department_id | no | 1 |
| ix_pro_date | procurement_date | no | 1 |
| PRIMARY | project_procurement_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
