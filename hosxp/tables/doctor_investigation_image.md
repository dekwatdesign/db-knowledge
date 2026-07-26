# `doctor_investigation_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_investigation_image_id | int(11) | NO | PRI | 0 |  |  |
| doctor_investigation_report_id | int(11) | YES |  | NULL |  |  |
| image_datetime | datetime | YES |  | NULL |  |  |
| image_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doctor_investigation_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
