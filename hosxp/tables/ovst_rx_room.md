# `ovst_rx_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_rx_room_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_depcode | depcode | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | ovst_rx_room_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_rx_room_id": 1,
    "vn": "541010110648",
    "doctor": "999",
    "depcode": "016",
    "entry_staff": "bms",
    "hos_guid": null
  },
  {
    "ovst_rx_room_id": 2,
    "vn": "541011135156",
    "doctor": "999",
    "depcode": "013",
    "entry_staff": "bms",
    "hos_guid": null
  },
  {
    "ovst_rx_room_id": 3,
    "vn": "541014060048",
    "doctor": "999",
    "depcode": "012",
    "entry_staff": "bms",
    "hos_guid": null
  },
  {
    "ovst_rx_room_id": 4,
    "vn": "541018082330",
    "doctor": "040",
    "depcode": "",
    "entry_staff": "yuwa027",
    "hos_guid": null
  },
  {
    "ovst_rx_room_id": 5,
    "vn": "541019105936",
    "doctor": "",
    "depcode": "009",
    "entry_staff": "yuwa027",
    "hos_guid": null
  },
  {
    "ovst_rx_room_id": 6,
    "vn": "541021060102",
    "doctor": "246",
    "depcode": "004",
    "entry_staff": "yuwa187",
    "hos_guid": null
  },
  {
    "ovst_rx_room_id": 7,
    "vn": "541021060059",
    "doctor": "246",
    "depcode": "004",
    "entry_staff": "yuwa187",
    "hos_guid": null
  },
  {
    "ovst_rx_room_id": 8,
    "vn": "541021085708",
    "doctor": "246",
    "depcode": "004",
    "entry_staff": "yuwa187",
    "hos_guid": null
  }
]
```
