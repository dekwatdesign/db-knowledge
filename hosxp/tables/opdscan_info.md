# `opdscan_info`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| scan_id | int(11) | NO | PRI | 0 |  |  |
| scanner_name | varchar(150) | YES |  | NULL |  |  |
| scan_dpi_x | int(11) | YES |  | NULL |  |  |
| scan_dpi_y | int(11) | YES |  | NULL |  |  |
| scan_color | varchar(50) | YES |  | NULL |  |  |
| scan_image_size | int(11) | YES |  | NULL |  |  |
| scan_computer_name | varchar(100) | YES |  | NULL |  |  |
| scan_depcode | varchar(3) | YES |  | NULL |  |  |
| scan_spclty | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
