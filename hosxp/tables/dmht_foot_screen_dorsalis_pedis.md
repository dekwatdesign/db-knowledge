# `dmht_foot_screen_dorsalis_pedis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_foot_screen_dorsalis_pedis_id | int(11) | NO | PRI | 0 |  |  |
| dmht_foot_screen_dorsalis_pedis_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_foot_screen_dorsalis_pedis_name | dmht_foot_screen_dorsalis_pedis_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_foot_screen_dorsalis_pedis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "dmht_foot_screen_dorsalis_pedis_id": 0,
    "dmht_foot_screen_dorsalis_pedis_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_dorsalis_pedis_id": 1,
    "dmht_foot_screen_dorsalis_pedis_name": "Absence",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_dorsalis_pedis_id": 2,
    "dmht_foot_screen_dorsalis_pedis_name": "Faint",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_dorsalis_pedis_id": 3,
    "dmht_foot_screen_dorsalis_pedis_name": "Full",
    "hos_guid": null
  }
]
```
