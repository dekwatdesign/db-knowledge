# `xray_contrast_media_use`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_contrast_media_use_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES | MUL | NULL |  |  |
| xray_contrast_media_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| volume_cc | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| allergy_use_reason | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_xn | xn | no | 1 |
| PRIMARY | xray_contrast_media_use_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
