# `dmht_eye_screen_surgery`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_eye_screen_surgery_id | int(11) | NO | PRI | 0 |  |  |
| dmht_eye_screen_surgery_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_eye_screen_surgery_name | dmht_eye_screen_surgery_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_eye_screen_surgery_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dmht_eye_screen_surgery_id": 0,
    "dmht_eye_screen_surgery_name": "ไม่มีข้อมูล",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_surgery_id": 1,
    "dmht_eye_screen_surgery_name": "ไม่ได้ผ่าตัด",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_surgery_id": 2,
    "dmht_eye_screen_surgery_name": "ผ่าข้างขวา",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_surgery_id": 3,
    "dmht_eye_screen_surgery_name": "ผ่าข้างซ้าย",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_surgery_id": 4,
    "dmht_eye_screen_surgery_name": "ผ่าทั้งสองข้าง",
    "hos_guid": null
  }
]
```
