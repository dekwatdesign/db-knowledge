# `bsc_project_document`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bsc_project_document_id | int(11) | NO | PRI | 0 |  |  |
| bsc_project_id | int(11) | YES | MUL | NULL |  |  |
| bsc_project_document_name | varchar(200) | YES |  | NULL |  |  |
| bsc_project_document_datetime | datetime | YES |  | NULL |  |  |
| bsc_project_document_data | longblob | YES |  | NULL |  |  |
| bsc_project_document_file_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | bsc_project_id | no | 1 |
| PRIMARY | bsc_project_document_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
