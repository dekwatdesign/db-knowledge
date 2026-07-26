# `patient_photo`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_photo_id | int(11) | NO | PRI | 0 |  |  |
| patient_photo_group_service_id | int(11) | YES | MUL | NULL |  |  |
| patient_photo_type_image_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| patient_photo_image | longblob | YES |  | NULL |  |  |
| patient_photo_note | text | YES |  | NULL |  |  |
| patient_photo_import_date | datetime | YES |  | NULL |  |  |
| last_visit | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| display_order | varchar(15) | YES |  | NULL |  |  |
| patient_photo_type_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_Refpatient_photo_group_service1 | patient_photo_group_service_id | no | 1 |
| ix_Refpatient_photo_type_image2 | patient_photo_type_image_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | patient_photo_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
