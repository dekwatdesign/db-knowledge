# `kskdepartment_fs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode | char(3) | NO | PRI |  |  |  |
| force_print_sticker | char(1) | YES |  | NULL |  |  |
| print_header | char(1) | YES |  | NULL |  |  |
| print_detail | char(1) | YES |  | NULL |  |  |
| header_print_server | varchar(100) | YES |  | NULL |  |  |
| detail_print_server | varchar(100) | YES |  | NULL |  |  |
| print_header_summary | char(1) | YES |  | NULL |  |  |
| print_sticker_detail | char(1) | YES |  | NULL |  |  |
| print_use_pttype | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | depcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
