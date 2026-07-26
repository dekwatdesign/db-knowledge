# `drug_catalog_import_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_catalog_import_detail_id | int(11) | NO | PRI | 0 |  |  |
| drug_catalog_hospdrugcode | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_productcat | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_tmtid | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_specprep | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_genericname | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_tradename | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_dsfcode | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_dosageform | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_strength | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_content | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_unitprice | double(13,3) | YES |  | NULL |  |  |
| drug_catalog_distributor | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_manufacturer | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_ised | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_ndc24 | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_packsize | varchar(250) | YES |  | NULL |  |  |
| drug_catalog_packprice | double(13,3) | YES |  | NULL |  |  |
| drug_catalog_updateflag | char(1) | YES |  | NULL |  |  |
| drug_catalog_datechange | datetime | YES |  | NULL |  |  |
| drug_catalog_dateupdate | datetime | YES |  | NULL |  |  |
| drug_catalog_dateeffective | datetime | YES |  | NULL |  |  |
| drug_catalog_export_id | int(11) | YES |  | NULL |  |  |
| drug_catalog_datecheck | datetime | YES |  | NULL |  |  |
| drug_catalog_rp | double(13,3) | YES |  | NULL |  |  |
| drug_catalog_import_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_catalog_import_id | drug_catalog_import_id | no | 1 |
| PRIMARY | drug_catalog_import_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
