# `home_visit_locate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| home_visit_locate_id | int(11) | NO | PRI | 0 |  |  |
| doctorcode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| home_vt_locate_latitude | varchar(100) | YES |  | NULL |  |  |
| home_vt_locate_longitude | varchar(100) | YES |  | NULL |  |  |
| home_vt_locate_date | date | YES |  | NULL |  |  |
| home_vt_locate_hospcode | varchar(9) | YES |  | NULL |  |  |
| home_vt_locate_distance | double(22,3) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| home_visit_locate_img_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | home_visit_locate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
