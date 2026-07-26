# `beauty_order_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_order_detail_id | int(11) | NO | PRI | 0 |  |  |
| beauty_order_id | int(11) | YES |  | NULL |  |  |
| beauty_pre_order_detail_id | int(11) | YES |  | NULL |  |  |
| beauty_package_detail_id | int(11) | YES |  | NULL |  |  |
| operrater_code | varchar(7) | YES |  | NULL |  |  |
| helper_code | varchar(7) | YES |  | NULL |  |  |
| beauty_order_dtl_price | decimal(10,0) | YES |  | NULL |  |  |
| beauty_order_dtl_used_qty | int(11) | YES |  | NULL |  |  |
| beauty_order_dtl_use_qty | int(11) | YES |  | NULL |  |  |
| beauty_order_dtl_start_date | date | YES |  | NULL |  |  |
| beauty_order_dtl_start_time | time | YES |  | NULL |  |  |
| beauty_order_dtl_end_date | date | YES |  | NULL |  |  |
| beauty_order_dtl_end_time | time | YES |  | NULL |  |  |
| beauty_order_dtl_des | text | YES |  | NULL |  |  |
| beauty_order_dtl_last_update | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |
| beauty_order_dtl_is_completed | char(1) | YES |  | NULL |  |  |
| beauty_treatment_area_list | varchar(255) | YES |  | NULL |  |  |
| beauty_sale_type_id | int(11) | YES |  | NULL |  |  |
| beauty_service_type_id | int(11) | YES |  | NULL |  |  |
| beauty_order_type_date | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | beauty_order_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
