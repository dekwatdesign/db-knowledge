# `sticker_pttype_control`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sticker_pttype_control_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(200) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| print_server_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer | computer_name | no | 1 |
| ix_computer_pttype | computer_name | yes | 1 |
| ix_computer_pttype | pttype | yes | 2 |
| PRIMARY | sticker_pttype_control_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
