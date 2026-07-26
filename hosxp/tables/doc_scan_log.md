# `doc_scan_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doc_scan_log_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| scanner_name | varchar(150) | YES |  | NULL |  |  |
| dpi_x | int(11) | YES |  | NULL |  |  |
| dpi_y | int(11) | YES |  | NULL |  |  |
| scan_mode | varchar(15) | YES |  | NULL |  |  |
| image_jpg_size | int(11) | YES |  | NULL |  |  |
| image_jpg_data_size | int(11) | YES |  | NULL |  |  |
| doc_scan_log_datetime | datetime | YES |  | NULL |  |  |
| scan_time_second | double(15,3) | YES |  | NULL |  |  |
| barcode_time_second | double(15,3) | YES |  | NULL |  |  |
| save_time_second | double(15,3) | YES |  | NULL |  |  |
| image_scan_width | int(11) | YES |  | NULL |  |  |
| image_scan_height | int(11) | YES |  | NULL |  |  |
| image_resize_width | int(11) | YES |  | NULL |  |  |
| image_resize_height | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doc_scan_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
