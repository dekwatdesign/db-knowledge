# `project_pc_pr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_pc_pr_detail_id | int(11) | NO | PRI | 0 |  |  |
| project_pc_pr_id | int(11) | YES | MUL | NULL |  |  |
| project_act_1_detail_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unit_price | double(22,3) | YES |  | NULL |  |  |
| total_price | double(22,3) | YES |  | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_pc_pr_id | project_pc_pr_id | no | 1 |
| PRIMARY | project_pc_pr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
