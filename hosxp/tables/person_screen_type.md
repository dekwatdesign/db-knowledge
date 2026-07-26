# `person_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| person_screen_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_screen_type_name | person_screen_type_name | yes | 1 |
| PRIMARY | person_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_screen_type_id": 1,
    "person_screen_type_name": "คัดกรองเบาหวาน",
    "hos_guid": null
  },
  {
    "person_screen_type_id": 2,
    "person_screen_type_name": "คัดกรองความดัน",
    "hos_guid": null
  },
  {
    "person_screen_type_id": 3,
    "person_screen_type_name": "คัดกรองมะเร็งเต้านม",
    "hos_guid": null
  }
]
```
