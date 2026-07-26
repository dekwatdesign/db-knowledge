# `emp_wf_nurse_receipt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_wf_nurse_receipt_id | int(11) | NO | PRI | 0 |  |  |
| emp_wf_nurse_receipt_file | blob | YES |  | NULL |  |  |
| emp_wf_nurse_receipt_filename | varchar(100) | YES |  | NULL |  |  |
| emp_wf_nurse_receipt_filetype | varchar(10) | YES |  | NULL |  |  |
| emp_wf_nurse_receipt_update | date | YES |  | NULL |  |  |
| emp_wf_nurse_id | int(11) | YES |  | NULL |  |  |
| emp_wf_nurse_receipt_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_wf_nurse_receipt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
