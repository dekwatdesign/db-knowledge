# `xray_report_document`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_report_document_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES | MUL | NULL |  |  |
| document_name | varchar(200) | YES |  | NULL |  |  |
| document_filename | varchar(200) | YES |  | NULL |  |  |
| document_data_blob | longblob | YES |  | NULL |  |  |
| document_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xn | xn | no | 1 |
| PRIMARY | xray_report_document_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
