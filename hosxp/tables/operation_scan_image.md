# `operation_scan_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_scan_image_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| page_number | int(11) | YES |  | NULL |  |  |
| page_image | longblob | YES |  | NULL |  |  |
| scan_datetime | datetime | YES |  | NULL |  |  |
| scan_staff | varchar(150) | YES |  | NULL |  |  |
| scan_filename | varchar(150) | YES |  | NULL |  |  |
| image_type | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_id | operation_id | no | 1 |
| PRIMARY | operation_scan_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
