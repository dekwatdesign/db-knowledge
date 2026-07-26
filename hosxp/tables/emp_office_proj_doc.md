# `emp_office_proj_doc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_proj_doc_id | int(11) | NO | PRI | 0 |  |  |
| emp_office_proj_doc_name | varchar(100) | YES |  | NULL |  |  |
| emp_office_proj_doc_detail | text | YES |  | NULL |  |  |
| emp_office_proj_doc_file | blob | YES |  | NULL |  |  |
| emp_office_proj_doc_filename | varchar(100) | YES |  | NULL |  |  |
| emp_office_proj_doc_filetype | varchar(10) | YES |  | NULL |  |  |
| emp_office_proj_doc_staff | varchar(20) | YES |  | NULL |  |  |
| emp_office_proj_doc_lastupdate | date | YES |  | NULL |  |  |
| emp_office_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_proj_doc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
