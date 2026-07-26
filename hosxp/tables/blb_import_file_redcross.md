# `blb_import_file_redcross`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_import_file_redcross_id | int(11) | NO | PRI | 0 |  |  |
| file_name | varchar(250) | YES |  | NULL |  |  |
| import_datetime | datetime | YES |  | NULL |  |  |
| record_count | int(11) | YES |  | NULL |  |  |
| text_file | longblob | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| cds_file | longblob | YES |  | NULL |  |  |
| md5_text_file | varchar(32) | YES |  | NULL |  |  |
| import_full | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_import_file_redcross_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
