# `beauty_pre_order_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_pre_order_detail_id | int(11) | NO | PRI | 0 |  |  |
| beauty_order_id | int(11) | YES |  | NULL |  |  |
| beauty_package_detail_id | int(11) | YES |  | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |
| beauty_treatment_area_list | varchar(40) | YES |  | NULL |  |  |
| beauty_sale_type_id | int(11) | YES |  | NULL |  |  |
| beauty_service_type_id | int(11) | YES |  | NULL |  |  |
| beauty_p_order_dtl_price | decimal(10,0) | YES |  | NULL |  |  |
| beauty_p_order_dtl_qty_total | int(11) | YES |  | NULL |  |  |
| beauty_p_order_dtl_qty_used | int(11) | YES |  | NULL |  |  |
| beauty_p_order_type_unit | varchar(10) | YES |  | NULL |  |  |
| beauty_p_order_dtl_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| is_completed | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | beauty_pre_order_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
