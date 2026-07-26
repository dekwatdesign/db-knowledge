# `cancer_register_home_visit_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_register_home_visit_image_id | int(11) | NO | PRI | 0 |  |  |
| cancer_register_home_visit_image_data | longblob | YES |  | NULL |  |  |
| cancer_register_home_visit_image_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_id | int(11) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_register_home_visit_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
