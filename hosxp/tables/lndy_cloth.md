# `lndy_cloth`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_name | varchar(250) | YES |  | NULL |  |  |
| lndy_cloth_engname | varchar(30) | YES |  | NULL |  |  |
| lndy_cloth_weight_dry | double(15,2) | YES |  | NULL |  |  |
| lndy_cloth_note | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_use_status | char(10) | YES |  | NULL |  |  |
| lndy_cloth_type_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_unit_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_group_id | int(11) | YES | MUL | NULL |  |  |
| lndy_cloth_weight_wet | double(15,2) | YES |  | NULL |  |  |
| lndy_cloth_details | varchar(200) | YES |  | NULL |  |  |
| lndy_cloth_active | char(10) | YES |  | NULL |  |  |
| lndy_cloth_serial | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_barcode | varchar(10) | YES |  | NULL |  |  |
| lndy_cloth_work_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_work_type_id | lndy_cloth_work_type_id | no | 1 |
| ix_Reflndy_cloth_group3 | lndy_cloth_group_id | no | 1 |
| ix_Reflndy_cloth_type2 | lndy_cloth_type_id | no | 1 |
| ix_Reflndy_cloth_unit1 | lndy_cloth_unit_id | no | 1 |
| PRIMARY | lndy_cloth_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
