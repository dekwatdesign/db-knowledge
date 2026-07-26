# `person_epi_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_epi_place_id | int(11) | NO | PRI | 0 |  |  |
| person_epi_place_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_epi_place_name | person_epi_place_name | yes | 1 |
| PRIMARY | person_epi_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_epi_place_id": 1,
    "person_epi_place_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "person_epi_place_id": 2,
    "person_epi_place_name": "โรงพยาบาล",
    "hos_guid": null
  },
  {
    "person_epi_place_id": 3,
    "person_epi_place_name": "บ้าน",
    "hos_guid": null
  }
]
```
