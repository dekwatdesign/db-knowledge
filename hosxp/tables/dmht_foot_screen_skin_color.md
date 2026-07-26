# `dmht_foot_screen_skin_color`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_foot_screen_skin_color_id | int(11) | YES |  | NULL |  |  |
| dmht_foot_screen_skin_color_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_foot_screen_skin_color_name | dmht_foot_screen_skin_color_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dmht_foot_screen_skin_color_id": 4,
    "dmht_foot_screen_skin_color_name": "คล้ำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dmht_foot_screen_skin_color_id": 3,
    "dmht_foot_screen_skin_color_name": "ซีด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dmht_foot_screen_skin_color_id": 2,
    "dmht_foot_screen_skin_color_name": "แดง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dmht_foot_screen_skin_color_id": 1,
    "dmht_foot_screen_skin_color_name": "ปกติ สีผิวราวกับคนปกติทั่วไป",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dmht_foot_screen_skin_color_id": 0,
    "dmht_foot_screen_skin_color_name": "ไม่ได้ตรวจ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
