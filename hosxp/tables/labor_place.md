# `labor_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| labor_place_id | int(11) | NO | PRI | 0 |  |  |
| labor_place_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | labor_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "labor_place_id": 1,
    "labor_place_name": "โรงพยาบาล",
    "hos_guid": null
  },
  {
    "labor_place_id": 2,
    "labor_place_name": "สถานีอนามัย",
    "hos_guid": null
  },
  {
    "labor_place_id": 3,
    "labor_place_name": "บ้าน",
    "hos_guid": null
  },
  {
    "labor_place_id": 4,
    "labor_place_name": "ระหว่างทาง",
    "hos_guid": null
  },
  {
    "labor_place_id": 5,
    "labor_place_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
