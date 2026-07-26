# `lab_catalog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_catalog_items_id | int(11) | NO | PRI | 0 |  |  |
| lab_catalog_items_code | int(11) | YES |  | NULL |  |  |
| lab_catalog_items_name | varchar(100) | YES |  | NULL |  |  |
| lab_catalog_price | double(22,3) | YES |  | NULL |  |  |
| lab_catalog_result_type | varchar(100) | YES |  | NULL |  |  |
| lab_catalog_items_unit | varchar(100) | YES |  | NULL |  |  |
| lab_catalog_specimen | varchar(100) | YES |  | NULL |  |  |
| lab_catalog_method | varchar(100) | YES |  | NULL |  |  |
| lab_catalog_billcode | varchar(255) | YES |  | NULL |  |  |
| lab_catalog_tmlt_id | int(11) | YES |  | NULL |  |  |
| lab_catalog_export_id | int(11) | YES |  | NULL |  |  |
| lab_catalog_date | datetime | YES |  | NULL |  |  |
| lab_catalog_type | int(11) | YES |  | NULL |  |  |
| lab_catalog_location | int(11) | YES |  | NULL |  |  |
| lab_catalog_component | varchar(250) | YES |  | NULL |  |  |
| lab_catalog_scale | varchar(250) | YES |  | NULL |  |  |
| lab_catalog_cscode | varchar(10) | YES |  | NULL |  |  |
| lab_catalog_loinc_num | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_catalog_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
