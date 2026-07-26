# `stock_app_version_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_app_version_data_id | int(11) | NO | PRI | 0 |  |  |
| stock_app_version_id | int(11) | YES | MUL | NULL |  |  |
| stock_app_version_data_filename | varchar(200) | YES |  | NULL |  |  |
| stock_app_version_data_filedata | longblob | YES |  | NULL |  |  |
| stock_app_version_data_filedata_md5 | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_app_version_id | stock_app_version_id | no | 1 |
| PRIMARY | stock_app_version_data_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
