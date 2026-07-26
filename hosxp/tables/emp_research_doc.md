# `emp_research_doc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_research_doc_id | int(11) | NO | PRI | 0 |  |  |
| emp_research_doc_name | varchar(250) | YES |  | NULL |  |  |
| emp_research_doc_file | longblob | YES |  | NULL |  |  |
| emp_research_doc_type_id | int(11) | YES |  | NULL |  |  |
| emp_research_id | int(11) | YES |  | NULL |  |  |
| emp_research_doc_lastupdate | date | YES |  | NULL |  |  |
| emp_research_doc_filename | varchar(250) | YES |  | NULL |  |  |
| emp_research_doc_type | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_research_doc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
