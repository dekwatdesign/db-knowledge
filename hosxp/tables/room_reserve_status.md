# `room_reserve_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| room_reserve_status_id | int(11) | NO | PRI | 0 |  |  |
| room_reserve_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_room_reserve_status_name | room_reserve_status_name | yes | 1 |
| PRIMARY | room_reserve_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "room_reserve_status_id": 1,
    "room_reserve_status_name": "รอคิว",
    "hos_guid": ""
  },
  {
    "room_reserve_status_id": 2,
    "room_reserve_status_name": "ได้คิวแล้ว",
    "hos_guid": ""
  },
  {
    "room_reserve_status_id": 3,
    "room_reserve_status_name": "ยกเลิก",
    "hos_guid": ""
  }
]
```
