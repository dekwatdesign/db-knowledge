# `sticker_prepack`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sticker_prepack_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| usage_line1 | varchar(250) | YES |  | NULL |  |  |
| usage_line2 | varchar(250) | YES |  | NULL |  |  |
| usage_line3 | varchar(250) | YES |  | NULL |  |  |
| usage_line4 | varchar(250) | YES |  | NULL |  |  |
| ref_date | date | YES |  | NULL |  |  |
| item_qty | int(11) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| bottle_qty | int(11) | YES |  | NULL |  |  |
| print_qty | int(11) | YES |  | NULL |  |  |
| print_staff | varchar(50) | YES |  | NULL |  |  |
| print_datetime | datetime | YES |  | NULL |  |  |
| item_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | sticker_prepack_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
