# `dmht_foot_screen_sensory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_foot_screen_sensory_id | int(11) | NO | PRI | 0 |  |  |
| dmht_foot_screen_sensory_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_foot_screen_sensory_name | dmht_foot_screen_sensory_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_foot_screen_sensory_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dmht_foot_screen_sensory_id": 0,
    "dmht_foot_screen_sensory_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_sensory_id": 1,
    "dmht_foot_screen_sensory_name": "ปกติ",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_sensory_id": 2,
    "dmht_foot_screen_sensory_name": "สูญเสียประสาท เท้าขวาอย่างเดียว แต่เท้าซ้ายปกติ",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_sensory_id": 3,
    "dmht_foot_screen_sensory_name": "สูญเสียประสาทเท้าซ้าย แต่เท้าขวาปกติ",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_sensory_id": 4,
    "dmht_foot_screen_sensory_name": "สูญเสียประสาทเท้าทั้งสองข้าง ทั้งซ้ายและขวา",
    "hos_guid": null
  }
]
```
