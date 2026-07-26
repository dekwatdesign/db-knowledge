# `drug_catalog_export`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_catalog_export_id | int(11) | NO | PRI | 0 |  |  |
| drug_catalog_export_date | date | YES |  | NULL |  |  |
| drug_catalog_export_time | time | YES |  | NULL |  |  |
| drug_catalog_export_doctor | char(6) | YES |  | NULL |  |  |
| drug_catalog_export_no | int(11) | YES |  | NULL |  |  |
| drug_catalog_export_name | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_export_version | varchar(50) | YES | MUL | NULL |  |  |
| drug_catalog_export_note | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_export_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_catalog_export_version | drug_catalog_export_version | no | 1 |
| PRIMARY | drug_catalog_export_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
