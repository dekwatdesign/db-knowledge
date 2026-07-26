# `opdscan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| scan_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| scan_date_time | datetime | YES | MUL | NULL |  |  |
| pageno | int(11) | YES |  | NULL |  |  |
| scan_image | longblob | YES |  | NULL |  |  |
| image_type | char(3) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| scan_type_id | int(11) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| check_right | char(1) | YES |  | NULL |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | scan_id | yes | 1 |
| scan_date_time | scan_date_time | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
