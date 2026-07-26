# `room_reserve_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| room_reserve_type_id | int(11) | NO | PRI | 0 |  |  |
| room_reserve_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_room_reserve_type_name | room_reserve_type_name | yes | 1 |
| PRIMARY | room_reserve_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "room_reserve_type_id": 1,
    "room_reserve_type_name": "ผู้ป่วยธรรมดา",
    "hos_guid": null
  },
  {
    "room_reserve_type_id": 2,
    "room_reserve_type_name": "เจ้าหน้าที่ของ รพ.",
    "hos_guid": null
  },
  {
    "room_reserve_type_id": 3,
    "room_reserve_type_name": "ผู้ป่วย VIP",
    "hos_guid": null
  }
]
```
