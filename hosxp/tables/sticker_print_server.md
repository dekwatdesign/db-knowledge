# `sticker_print_server`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sticker_print_server_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(200) | YES | UNI | NULL |  |  |
| ip_address | varchar(200) | YES |  | NULL |  |  |
| printserver_name | varchar(50) | YES | MUL | NULL |  |  |
| start_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | yes | 1 |
| ix_printservername | printserver_name | no | 1 |
| PRIMARY | sticker_print_server_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
