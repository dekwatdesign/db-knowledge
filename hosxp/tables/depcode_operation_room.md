# `depcode_operation_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depcode_operation_room_id | int(11) | NO | PRI | 0 |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| operation_room_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| ix_depcode_room | depcode | yes | 1 |
| ix_depcode_room | operation_room_id | yes | 2 |
| PRIMARY | depcode_operation_room_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
