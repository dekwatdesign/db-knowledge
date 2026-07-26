# `operation_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| room_id | int(11) | NO | PRI | 0 |  |  |
| room_name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| floor_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | room_id | yes | 1 |
| room_name | room_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "room_id": 1,
    "room_name": "ห้องผ่าตัด 1",
    "hos_guid": null,
    "floor_name": null
  },
  {
    "room_id": 2,
    "room_name": "ห้องผ่าตัด 2",
    "hos_guid": null,
    "floor_name": null
  },
  {
    "room_id": 3,
    "room_name": "ห้องผ่าตัด 3",
    "hos_guid": null,
    "floor_name": null
  }
]
```
