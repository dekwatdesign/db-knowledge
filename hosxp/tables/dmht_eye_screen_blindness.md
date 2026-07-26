# `dmht_eye_screen_blindness`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_eye_screen_blindness_id | int(11) | NO | PRI | 0 |  |  |
| dmht_eye_screen_blindness_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_eye_screen_blindness_name | dmht_eye_screen_blindness_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_eye_screen_blindness_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dmht_eye_screen_blindness_id": 0,
    "dmht_eye_screen_blindness_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_blindness_id": 1,
    "dmht_eye_screen_blindness_name": "ปกติ ไม่บอด",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_blindness_id": 2,
    "dmht_eye_screen_blindness_name": "บอดข้างขวา",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_blindness_id": 3,
    "dmht_eye_screen_blindness_name": "บอดข้างซ้าย",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_blindness_id": 4,
    "dmht_eye_screen_blindness_name": "บอดทั้งสองข้าง ซ้ายและขวา",
    "hos_guid": null
  }
]
```
