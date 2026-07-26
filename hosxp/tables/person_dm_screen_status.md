# `person_dm_screen_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dm_screen_status_id | int(11) | NO | PRI | 0 |  |  |
| person_dm_screen_status_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dm_screen_status_name | person_dm_screen_status_name | yes | 1 |
| PRIMARY | person_dm_screen_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_dm_screen_status_id": 1,
    "person_dm_screen_status_name": "ปกติ",
    "hos_guid": "",
    "hospcode": null
  },
  {
    "person_dm_screen_status_id": 2,
    "person_dm_screen_status_name": "เสี่ยงสูง",
    "hos_guid": "",
    "hospcode": null
  },
  {
    "person_dm_screen_status_id": 3,
    "person_dm_screen_status_name": "สงสัยรายใหม่",
    "hos_guid": "",
    "hospcode": null
  }
]
```
