# `handicapped_hhc_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_image_id | char(11) | NO | PRI |  |  |  |
| handicapped_hhc_image | blob | YES |  | NULL |  |  |
| handicapped_hhc_image_date | date | YES |  | NULL |  |  |
| handicapped_hhc_image_detail | varchar(255) | YES |  | NULL |  |  |
| handicapped_hhc_id | char(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | handicapped_hhc_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
