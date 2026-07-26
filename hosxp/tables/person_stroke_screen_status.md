# `person_stroke_screen_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_stroke_screen_status_id | int(11) | NO | PRI | 0 |  |  |
| person_stroke_screen_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_stroke_screen_status_name | person_stroke_screen_status_name | yes | 1 |
| PRIMARY | person_stroke_screen_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "person_stroke_screen_status_id": 1,
    "person_stroke_screen_status_name": "กลุ่มปกติ",
    "hos_guid": "{11639313-AB9D-11E0-8C61-6C760DDF3878}"
  },
  {
    "person_stroke_screen_status_id": 2,
    "person_stroke_screen_status_name": "กลุ่มเสี่ยง",
    "hos_guid": "{11639F14-AB9D-11E0-8C61-6C760DDF3878}"
  }
]
```
