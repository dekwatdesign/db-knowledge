# `project_pc_cmt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_pc_cmt_id | int(11) | NO | PRI | 0 |  |  |
| project_pc_cmt_type_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| project_pc_emp_type_id | int(11) | YES |  | NULL |  |  |
| responsibility_text | text | YES |  | NULL |  |  |
| project_procurement_id | int(11) | YES | MUL | NULL |  |  |
| ref_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pro_id | project_procurement_id | no | 1 |
| PRIMARY | project_pc_cmt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
