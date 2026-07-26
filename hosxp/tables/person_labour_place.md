# `person_labour_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_labor_place_id | int(11) | NO | PRI | 0 |  |  |
| person_labour_place_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_labour_place_name | person_labour_place_name | yes | 1 |
| PRIMARY | person_labor_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "person_labor_place_id": 1,
    "person_labour_place_name": "โรงพยาบาล",
    "hos_guid": null
  },
  {
    "person_labor_place_id": 2,
    "person_labour_place_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "person_labor_place_id": 3,
    "person_labour_place_name": "บ้าน",
    "hos_guid": null
  },
  {
    "person_labor_place_id": 4,
    "person_labour_place_name": "ระหว่างทาง",
    "hos_guid": null
  },
  {
    "person_labor_place_id": 5,
    "person_labour_place_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
