# `dt_photo`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_photo_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| dt_photo_image_date | datetime | YES |  | NULL |  |  |
| dt_photo_image_note | text | YES |  | NULL |  |  |
| dt_photo_image | longblob | YES |  | NULL |  |  |
| dt_depcode_code | varchar(20) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| datetime_entry | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_photo_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
