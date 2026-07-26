# `drug_catalog_import`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_catalog_import_id | int(11) | NO | PRI | 0 |  |  |
| drug_catalog_import_file_name | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_import_datetime | datetime | YES |  | NULL |  |  |
| drug_catalog_import_count | int(11) | YES |  | NULL |  |  |
| drug_catalog_import_confirm | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drug_catalog_import_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
