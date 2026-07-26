# `ipd_doctor_order_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_image_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_id | int(11) | YES | MUL | NULL |  |  |
| image_data | longblob | YES |  | NULL |  |  |
| document_data | longblob | YES |  | NULL |  |  |
| thumbnail_image_data | longblob | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| image_note | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | ipd_doctor_order_id | no | 1 |
| PRIMARY | ipd_doctor_order_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
