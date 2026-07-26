# `emp_expense_document`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_expense_document_id | int(11) | NO | PRI | 0 |  |  |
| emp_expense_document_image | longblob | YES |  | NULL |  |  |
| emp_expense_document_page_no | int(11) | YES |  | NULL |  |  |
| emp_expense_med_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refexpense_medical15 | emp_expense_med_id | no | 1 |
| PRIMARY | emp_expense_document_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
