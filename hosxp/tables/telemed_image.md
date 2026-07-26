# `telemed_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| telemed_image_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| telemed_image_type_id | int(11) | YES |  | NULL |  |  |
| image | longblob | YES |  | NULL |  |  |
| capture_datetime | datetime | YES |  | NULL |  |  |
| capture_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | telemed_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
