# `person_ht_screen_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_ht_screen_status_id | int(11) | NO | PRI | 0 |  |  |
| person_ht_screen_status_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_ht_screen_status_name | person_ht_screen_status_name | yes | 1 |
| PRIMARY | person_ht_screen_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "person_ht_screen_status_id": 1,
    "person_ht_screen_status_name": "กลุ่มปกติ (ไม่พบความเสี่ยง)",
    "hos_guid": ""
  },
  {
    "person_ht_screen_status_id": 2,
    "person_ht_screen_status_name": "กลุ่มปกติ (มีปัจจัยเสี่ยง)",
    "hos_guid": null
  },
  {
    "person_ht_screen_status_id": 3,
    "person_ht_screen_status_name": "กลุ่มเสี่ยงสูง",
    "hos_guid": ""
  },
  {
    "person_ht_screen_status_id": 4,
    "person_ht_screen_status_name": "สงสัยรายใหม่",
    "hos_guid": ""
  }
]
```
