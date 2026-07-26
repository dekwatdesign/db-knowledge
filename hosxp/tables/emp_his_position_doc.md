# `emp_his_position_doc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_his_position_doc_id | int(11) | NO | PRI | 0 |  |  |
| emp_his_position_doc_name | varchar(30) | YES |  | NULL |  |  |
| emp_his_position_doc_filename | text | YES |  | NULL |  |  |
| emp_his_position_doc_filetype | char(10) | YES |  | NULL |  |  |
| emp_his_position_doc_file | longblob | YES |  | NULL |  |  |
| emp_his_position_doc_update | date | YES |  | NULL |  |  |
| emp_his_position_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_his_position_doc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
