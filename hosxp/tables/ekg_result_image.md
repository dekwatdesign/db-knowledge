# `ekg_result_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ekg_result_image_id | int(11) | NO | PRI | 0 |  |  |
| ekg_result_image_blob | longblob | YES |  | NULL |  |  |
| ekg_result_doctor | varchar(20) | YES |  | NULL |  |  |
| ekg_result_note | text | YES |  | NULL |  |  |
| ekg_request_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_id | ekg_request_id | no | 1 |
| PRIMARY | ekg_result_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
