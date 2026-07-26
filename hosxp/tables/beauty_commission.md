# `beauty_commission`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_commission_id | int(11) | NO | PRI | 0 |  |  |
| beauty_staff_position_id | int(11) | YES | MUL | NULL |  |  |
| beauty_package_detail_id | int(11) | YES | MUL | NULL |  |  |
| beauty_price_source_id | int(11) | YES | MUL | NULL |  |  |
| beauty_commission_percent | decimal(10,0) | YES |  | NULL |  |  |
| beauty_commission_price | decimal(10,0) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fk_bty_commission_bty_package_detail1_idx | beauty_package_detail_id | no | 1 |
| ix_fk_bty_commission_bty_price_source1_idx | beauty_price_source_id | no | 1 |
| ix_fk_bty_commission_bty_staff_position1_idx | beauty_staff_position_id | no | 1 |
| PRIMARY | beauty_commission_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
