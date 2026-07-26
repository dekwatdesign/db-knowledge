# `dmht_foot_screen_temperature`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_foot_screen_temperature_id | int(11) | NO | PRI | 0 |  |  |
| dmht_foot_screen_temperature_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_foot_screen_temperature_name | dmht_foot_screen_temperature_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_foot_screen_temperature_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dmht_foot_screen_temperature_id": 1,
    "dmht_foot_screen_temperature_name": "เย็นซีด ไม่อุ่น",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_temperature_id": 2,
    "dmht_foot_screen_temperature_name": "สัมผัสได้ถึงไออุ่น",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_temperature_id": 0,
    "dmht_foot_screen_temperature_name": "ไม่ได้ตรวจ / ถาม",
    "hos_guid": null
  }
]
```
