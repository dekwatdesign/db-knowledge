# `emp_insignia_doc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_insignia_doc_id | int(11) | NO | PRI | 0 |  |  |
| emp_insignia_doc_name | varchar(30) | YES |  | NULL |  |  |
| emp_insignia_doc_filename | text | YES |  | NULL |  |  |
| emp_insignia_doc_filetype | varchar(10) | YES |  | NULL |  |  |
| emp_insignia_doc_lastupdate | date | YES |  | NULL |  |  |
| emp_insignia_id | int(11) | YES |  | NULL |  |  |
| emp_insignia_file | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_insignia_doc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
