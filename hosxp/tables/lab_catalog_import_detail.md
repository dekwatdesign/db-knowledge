# `lab_catalog_import_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_catalog_import_detail_id | int(11) | NO | PRI | 0 |  |  |
| lab_catalog_lc_code | varchar(10) | YES |  | NULL |  |  |
| lab_catalog_bill_group | varchar(10) | YES |  | NULL |  |  |
| lab_catalog_cs_code | varchar(10) | YES |  | NULL |  |  |
| lab_catalog_tmlt | varchar(10) | YES |  | NULL |  |  |
| lab_catalog_loinc | varchar(10) | YES |  | NULL |  |  |
| lab_catalog_panel | varchar(10) | YES |  | NULL |  |  |
| lab_catalog_name | varchar(250) | YES |  | NULL |  |  |
| lab_catalog_sflag | char(1) | YES |  | NULL |  |  |
| lab_catalog_charge_cat | char(1) | YES |  | NULL |  |  |
| lab_catalog_unit_price | double(22,3) | YES |  | NULL |  |  |
| lab_catalog_benefit_plan | varchar(50) | YES |  | NULL |  |  |
| lab_catalog_reimb_price | double(22,3) | YES |  | NULL |  |  |
| lab_catalog_update_flag | char(1) | YES |  | NULL |  |  |
| lab_catalog_update_begin | datetime | YES |  | NULL |  |  |
| lab_catalog_update_end | datetime | YES |  | NULL |  |  |
| lab_catalog_rp_date_begin | datetime | YES |  | NULL |  |  |
| lab_catalog_rp_date_end | datetime | YES |  | NULL |  |  |
| lab_catalog_date_update | datetime | YES |  | NULL |  |  |
| lab_catalog_import_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reflab_catalog_import1 | lab_catalog_import_id | no | 1 |
| PRIMARY | lab_catalog_import_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
