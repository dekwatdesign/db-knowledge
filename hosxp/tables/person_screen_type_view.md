# `person_screen_type_view`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_screen_type_view_id | int(11) | NO | PRI | 0 |  |  |
| person_screen_type_id | int(11) | YES |  | NULL |  |  |
| person_screen_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_screen_id | person_screen_id | no | 1 |
| PRIMARY | person_screen_type_view_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_screen_type_view_id": 1,
    "person_screen_type_id": 1,
    "person_screen_id": 1,
    "hos_guid": null
  },
  {
    "person_screen_type_view_id": 2,
    "person_screen_type_id": 1,
    "person_screen_id": 2,
    "hos_guid": null
  },
  {
    "person_screen_type_view_id": 3,
    "person_screen_type_id": 1,
    "person_screen_id": 3,
    "hos_guid": null
  },
  {
    "person_screen_type_view_id": 4,
    "person_screen_type_id": 1,
    "person_screen_id": 4,
    "hos_guid": null
  },
  {
    "person_screen_type_view_id": 5,
    "person_screen_type_id": 1,
    "person_screen_id": 5,
    "hos_guid": null
  },
  {
    "person_screen_type_view_id": 6,
    "person_screen_type_id": 1,
    "person_screen_id": 6,
    "hos_guid": null
  },
  {
    "person_screen_type_view_id": 7,
    "person_screen_type_id": 1,
    "person_screen_id": 7,
    "hos_guid": null
  },
  {
    "person_screen_type_view_id": 8,
    "person_screen_type_id": 2,
    "person_screen_id": 1,
    "hos_guid": null
  }
]
```
