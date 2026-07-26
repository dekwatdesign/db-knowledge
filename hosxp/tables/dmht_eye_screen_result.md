# `dmht_eye_screen_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_eye_screen_result_id | int(11) | NO | PRI | 0 |  |  |
| dmht_eye_screen_result_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_eye_screen_result_name | dmht_eye_screen_result_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_eye_screen_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "dmht_eye_screen_result_id": 0,
    "dmht_eye_screen_result_name": "ไม่ได้ทำการตรวจ",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_result_id": 1,
    "dmht_eye_screen_result_name": "NO DR",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_result_id": 2,
    "dmht_eye_screen_result_name": "Mild NPDR",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_result_id": 3,
    "dmht_eye_screen_result_name": "Moderate NPDR",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_result_id": 4,
    "dmht_eye_screen_result_name": "Severe NPDR",
    "hos_guid": null
  },
  {
    "dmht_eye_screen_result_id": 5,
    "dmht_eye_screen_result_name": "PDR",
    "hos_guid": null
  }
]
```
