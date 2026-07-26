# `dmht_foot_screen_history_ulcer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dmht_foot_screen_history_ulcer_id | int(11) | NO | PRI | 0 |  |  |
| dmht_foot_screen_history_ulcer_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dmht_foot_screen_ulcer_history_name | dmht_foot_screen_history_ulcer_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dmht_foot_screen_history_ulcer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dmht_foot_screen_history_ulcer_id": 0,
    "dmht_foot_screen_history_ulcer_name": "ไม่ได้ตรวจ/ถาม",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_history_ulcer_id": 1,
    "dmht_foot_screen_history_ulcer_name": "เคยเป็นแผลที่เท้า",
    "hos_guid": null
  },
  {
    "dmht_foot_screen_history_ulcer_id": 2,
    "dmht_foot_screen_history_ulcer_name": "ไม่เคยเป็นแผลที่เท้ามาก่อน",
    "hos_guid": null
  }
]
```
