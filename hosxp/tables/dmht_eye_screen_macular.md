# `dmht_eye_screen_macular`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_eye_screen_macular_id | int(11) | NO | PRI | 0 |  |  |
| dmht_eye_screen_macular_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_eye_screen_macular_name | dmht_eye_screen_macular_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_eye_screen_macular_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "dmht_eye_screen_macular_id": 0,
    "dmht_eye_screen_macular_name": "ไม่ได้ตรวจ",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_macular_id": 1,
    "dmht_eye_screen_macular_name": "ไม่มี / ไม่เป็น",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_macular_id": 2,
    "dmht_eye_screen_macular_name": "เป็นข้างขวา",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_macular_id": 3,
    "dmht_eye_screen_macular_name": "เป็นข้างซ้าย",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_macular_id": 4,
    "dmht_eye_screen_macular_name": "เป็นทั้งสองข้าง ซ้ายและขวา",
    "hos_guid": null
  }
]
```
