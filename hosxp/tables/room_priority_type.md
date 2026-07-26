# `room_priority_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| room_priority_type_id | int(11) | NO | PRI | 0 |  |  |
| room_priority_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_room_priority_type_name | room_priority_type_name | yes | 1 |
| PRIMARY | room_priority_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "room_priority_type_id": 1,
    "room_priority_type_name": "ปกติ"
  },
  {
    "room_priority_type_id": 2,
    "room_priority_type_name": "VIP"
  }
]
```
