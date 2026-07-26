# `person_obesity_screen_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_obesity_screen_status_id | int(11) | NO | PRI | 0 |  |  |
| person_obesity_screen_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_obesity_screen_status_name | person_obesity_screen_status_name | yes | 1 |
| PRIMARY | person_obesity_screen_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "person_obesity_screen_status_id": 1,
    "person_obesity_screen_status_name": "กลุ่มปกติ",
    "hos_guid": "{0F3F123E-AB9D-11E0-8C61-6C760DDF3878}"
  },
  {
    "person_obesity_screen_status_id": 2,
    "person_obesity_screen_status_name": "กลุ่มเสี่ยง",
    "hos_guid": "{0F3F18E9-AB9D-11E0-8C61-6C760DDF3878}"
  }
]
```
