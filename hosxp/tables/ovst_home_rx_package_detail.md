# `ovst_home_rx_package_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_home_rx_package_detail_id | int(11) | NO | PRI | 0 |  |  |
| ovst_home_rx_package_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ovst_home_rx_package_id | ovst_home_rx_package_id | no | 1 |
| ix_ovst_home_rx_package_id_vn | ovst_home_rx_package_id | no | 1 |
| ix_ovst_home_rx_package_id_vn | vn | no | 2 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_home_rx_package_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
