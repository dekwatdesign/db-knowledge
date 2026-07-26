# `project_pc_deliver`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_pc_deliver_id | int(11) | NO | PRI | 0 |  |  |
| project_pc_po_id | int(11) | YES | MUL | NULL |  |  |
| deliver_date | date | YES |  | NULL |  |  |
| period_no | int(11) | YES |  | NULL |  |  |
| deliver_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_po_id | project_pc_po_id | no | 1 |
| PRIMARY | project_pc_deliver_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
