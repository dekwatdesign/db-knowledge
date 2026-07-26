# `labour_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labour_place_id | int(11) | NO | PRI | 0 |  |  |
| place_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | labour_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "labour_place_id": 1,
    "place_name": "คลินิก",
    "hos_guid": null
  },
  {
    "labour_place_id": 2,
    "place_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "labour_place_id": 3,
    "place_name": "โรงพยาบาล",
    "hos_guid": null
  }
]
```
