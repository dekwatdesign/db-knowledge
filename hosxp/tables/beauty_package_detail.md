# `beauty_package_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_package_detail_id | int(11) | NO | PRI | 0 |  |  |
| beauty_package_id | int(11) | YES | MUL | NULL |  |  |
| beauty_treatment_area_list | varchar(40) | YES |  | NULL |  |  |
| beauty_sale_type_id | int(11) | YES | MUL | NULL |  |  |
| beauty_service_type_id | int(11) | YES | MUL | NULL |  |  |
| beauty_pkg_dtl_price_unit | decimal(10,0) | YES |  | NULL |  |  |
| beauty_pkg_dtl_is_comm | char(1) | YES |  | NULL |  |  |
| beauty_pkg_dtl_use_qty | int(11) | YES |  | NULL |  |  |
| beauty_pkg_dtl_type_date | varchar(10) | YES |  | NULL |  |  |
| beauty_pkg_dtl_last_update | datetime | YES |  | NULL |  |  |
| beauty_pkg_dtl_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fk_beauty_sub_package_beauty_package_idx | beauty_package_id | no | 1 |
| ix_fk_beauty_sub_package_beauty_sale_type1_idx | beauty_sale_type_id | no | 1 |
| ix_fk_beauty_sub_package_beauty_service_type1_idx | beauty_service_type_id | no | 1 |
| PRIMARY | beauty_package_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
