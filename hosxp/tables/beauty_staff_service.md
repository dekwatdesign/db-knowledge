# `beauty_staff_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_staff_service_id | int(11) | NO | PRI | 0 |  |  |
| beauty_staff_position_id | int(11) | YES | MUL | NULL |  |  |
| beauty_order_detail_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| beauty_staff_service_date | date | YES |  | NULL |  |  |
| staff_code | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fk_beauty_detail_staff_beauty_staff_position1_idx | beauty_staff_position_id | no | 1 |
| ix_fk_bty_staff_detail_bty_order_detail1_idx | beauty_order_detail_id | no | 1 |
| PRIMARY | beauty_staff_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
