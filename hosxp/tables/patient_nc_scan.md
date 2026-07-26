# `patient_nc_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_nc_scan_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| scan_image | longblob | YES |  | NULL |  |  |
| scan_datetime | datetime | YES |  | NULL |  |  |
| scan_staff | varchar(50) | YES |  | NULL |  |  |
| patient_nc_scan_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_nc_scan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
