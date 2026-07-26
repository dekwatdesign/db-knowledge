# `lab_lis_import`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| filename | varchar(150) | NO | PRI |  |  |  |
| import_date_time | datetime | YES | MUL | NULL |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| text_data | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| import_date_time | import_date_time | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lab_order_number | lab_order_number | no | 1 |
| PRIMARY | filename | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
