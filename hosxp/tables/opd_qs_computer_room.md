# `opd_qs_computer_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_computer_room_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_computer_id | int(11) | YES | MUL | NULL |  |  |
| opd_qs_room_id | int(11) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cr | opd_qs_computer_id | yes | 1 |
| ix_cr | opd_qs_room_id | yes | 2 |
| PRIMARY | opd_qs_computer_room_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
