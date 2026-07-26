# `image_dropbox`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| image_dropbox_id | int(11) | NO | PRI | 0 |  |  |
| key_value | varchar(12) | YES | MUL | NULL |  |  |
| image_data | longblob | YES |  | NULL |  |  |
| image_thumb_data | longblob | YES |  | NULL |  |  |
| image_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_keyvalue | key_value | no | 1 |
| PRIMARY | image_dropbox_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
