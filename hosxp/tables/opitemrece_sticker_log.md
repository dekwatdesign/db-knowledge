# `opitemrece_sticker_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_sticker_log_id | int(11) | NO | PRI | 0 |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| print_datetime | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| print_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opitemrece_sticker_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
