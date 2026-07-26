# `beauty_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_order_id | int(11) | NO | PRI | 0 |  |  |
| beauty_package_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| staff_code | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| beauty_order_date | date | YES |  | NULL |  |  |
| beauty_order_net_price | decimal(10,0) | YES |  | NULL |  |  |
| beauty_order_des | text | YES |  | NULL |  |  |
| beauty_order_note | text | YES |  | NULL |  |  |
| beauty_order_last_update | datetime | YES |  | NULL |  |  |
| beauty_order_is_completed | char(1) | YES |  | NULL |  |  |
| saler_code | varchar(7) | YES |  | NULL |  |  |
| sale_commission_price | decimal(10,0) | YES |  | NULL |  |  |
| sale_commission_percent | decimal(10,0) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fk_beauty_order_beauty_package1_idx | beauty_package_id | no | 1 |
| PRIMARY | beauty_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
