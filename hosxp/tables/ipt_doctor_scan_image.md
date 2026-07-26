# `ipt_doctor_scan_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_doctor_scan_image_id | int(11) | NO | PRI | 0 |  |  |
| ipt_doctor_scan_id | int(11) | YES | MUL | NULL |  |  |
| page_number | int(11) | YES |  | NULL |  |  |
| page_image | longblob | YES |  | NULL |  |  |
| page_scan_datetime | datetime | YES |  | NULL |  |  |
| ipt_doctor_scan_type_id | int(11) | YES |  | NULL |  |  |
| scan_filename | varchar(150) | YES |  | NULL |  |  |
| image_type | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_doctor_scan_id | ipt_doctor_scan_id | no | 1 |
| PRIMARY | ipt_doctor_scan_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
