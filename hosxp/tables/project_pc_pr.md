# `project_pc_pr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_pc_pr_id | int(11) | NO | PRI | 0 |  |  |
| project_procurement_id | int(11) | YES | MUL | NULL |  |  |
| project_pc_pr_date | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| po_subject_text | text | YES |  | NULL |  |  |
| po_officer_text | text | YES |  | NULL |  |  |
| project_pc_po_type_id | int(11) | YES |  | NULL |  |  |
| pr_document_no | varchar(50) | YES |  | NULL |  |  |
| pr_note_text | text | YES |  | NULL |  |  |
| announce_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pc_id | project_procurement_id | no | 1 |
| PRIMARY | project_pc_pr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
