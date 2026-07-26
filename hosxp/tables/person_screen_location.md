# `person_screen_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_screen_location_id | int(11) | NO | PRI | 0 |  |  |
| person_screen_location_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_screen_location_name | person_screen_location_name | yes | 1 |
| PRIMARY | person_screen_location_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "person_screen_location_id": 1,
    "person_screen_location_name": "สถานีอนามัย / รพ.",
    "hos_guid": null
  },
  {
    "person_screen_location_id": 2,
    "person_screen_location_name": "บ้าน",
    "hos_guid": null
  },
  {
    "person_screen_location_id": 3,
    "person_screen_location_name": "ชุมชน",
    "hos_guid": null
  },
  {
    "person_screen_location_id": 4,
    "person_screen_location_name": "โรงเรียน",
    "hos_guid": null
  }
]
```
