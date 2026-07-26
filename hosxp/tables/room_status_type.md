# `room_status_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| room_status_type_id | int(11) | NO | PRI | 0 |  |  |
| room_status_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_room_status_type_name | room_status_type_name | yes | 1 |
| PRIMARY | room_status_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "room_status_type_id": 1,
    "room_status_type_name": "เตียงว่าง",
    "hos_guid": null
  },
  {
    "room_status_type_id": 2,
    "room_status_type_name": "จ่ายเตียง",
    "hos_guid": null
  },
  {
    "room_status_type_id": 3,
    "room_status_type_name": "ปิดเตียง",
    "hos_guid": null
  },
  {
    "room_status_type_id": 4,
    "room_status_type_name": "ซ่อมแซม",
    "hos_guid": null
  }
]
```
