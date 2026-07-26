# `teenage_preg_hhc_pregnancy_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_pregnancy_image_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_pregnancy_image_blob | blob | YES |  | NULL |  |  |
| teenage_preg_hhc_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_hhc_pregnancy_image_detail | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_hhc103 | teenage_preg_hhc_id | no | 1 |
| PRIMARY | teenage_preg_hhc_pregnancy_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
