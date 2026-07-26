# `patient_kiosk_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| image_name | varchar(150) | NO | PRI |  |  |  |
| image | longblob | YES |  | NULL |  |  |
| width | int(11) | YES |  | NULL |  |  |
| height | int(11) | YES |  | NULL |  |  |
| capture_date | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_image_name | image_name | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | image_name | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
