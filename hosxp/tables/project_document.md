# `project_document`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_document_id | int(11) | NO | PRI | 0 |  |  |
| project_document_type_id | int(11) | YES |  | NULL |  |  |
| project_document_name | varchar(250) | YES |  | NULL |  |  |
| doc_raw_file_name | varchar(250) | YES |  | NULL |  |  |
| doc_create_datetime | datetime | YES |  | NULL |  |  |
| doc_update_datetime | datetime | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| ref_id | int(11) | YES | MUL | NULL |  |  |
| ref_key | varchar(150) | YES |  | NULL |  |  |
| doc_raw_data_blob | longblob | YES |  | NULL |  |  |
| doc_ext_name | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ref_key_id | ref_id | no | 1 |
| ix_ref_key_id | ref_key | no | 2 |
| PRIMARY | project_document_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
