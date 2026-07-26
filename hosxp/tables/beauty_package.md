# `beauty_package`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_package_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| beauty_pkg_name | varchar(200) | YES | MUL | NULL |  |  |
| beauty_pkg_price | decimal(10,0) | YES |  | NULL |  |  |
| beauty_pkg_net_price | decimal(10,0) | YES |  | NULL |  |  |
| beauty_pkg_des | text | YES |  | NULL |  |  |
| beauty_pkg_discount | decimal(10,0) | YES |  | NULL |  |  |
| beauty_pkg_use_price | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| beauty_pkg_last_update | datetime | YES |  | NULL |  |  |
| beauty_pkg_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_beauty_pkg_name | beauty_pkg_name | no | 1 |
| PRIMARY | beauty_package_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
