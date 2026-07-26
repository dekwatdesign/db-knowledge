# `ckup_room_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_room_service_id | int(11) | NO | PRI | 0 |  |  |
| ckup_service_id | int(11) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_service_id | ckup_service_id | no | 1 |
| PRIMARY | ckup_room_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
