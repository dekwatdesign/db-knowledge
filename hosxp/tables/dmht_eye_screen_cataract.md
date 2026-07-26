# `dmht_eye_screen_cataract`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_eye_screen_cataract_id | int(11) | NO | PRI | 0 |  |  |
| dmht_eye_screen_cataract_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_eye_screen_cataract_name | dmht_eye_screen_cataract_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_eye_screen_cataract_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dmht_eye_screen_cataract_id": 0,
    "dmht_eye_screen_cataract_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_cataract_id": 1,
    "dmht_eye_screen_cataract_name": "ปกติ ไม่เป็นต้อกระจก",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_cataract_id": 2,
    "dmht_eye_screen_cataract_name": "เป็นต้อกระจกข้างขวา",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_cataract_id": 3,
    "dmht_eye_screen_cataract_name": "เป็นต้อกระจกข้างซ้าย",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_cataract_id": 4,
    "dmht_eye_screen_cataract_name": "เป็นต้อกระจกทั้งสองข้าง ซ้ายและขวา",
    "hos_guid": null
  }
]
```
