# `person_deformed_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_level_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_level_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_deformed_level_name | person_deformed_level_name | yes | 1 |
| PRIMARY | person_deformed_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_deformed_level_id": 1,
    "person_deformed_level_name": "ระดับที่ 1",
    "hos_guid": null
  },
  {
    "person_deformed_level_id": 2,
    "person_deformed_level_name": "ระดับที่ 2",
    "hos_guid": null
  },
  {
    "person_deformed_level_id": 3,
    "person_deformed_level_name": "ระดับที่ 3",
    "hos_guid": null
  },
  {
    "person_deformed_level_id": 4,
    "person_deformed_level_name": "ระดับที่ 4",
    "hos_guid": null
  },
  {
    "person_deformed_level_id": 5,
    "person_deformed_level_name": "ระดับที่ 5",
    "hos_guid": null
  }
]
```
