# `height_chart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sex | char(1) | NO | PRI |  |  |  |
| age_month | int(11) | NO | PRI | 0 |  |  |
| height_min | double(15,3) | NO | PRI | 0.000 |  |  |
| height_max | double(15,3) | NO | PRI | 0.000 |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | sex | yes | 1 |
| PRIMARY | age_month | yes | 2 |
| PRIMARY | height_min | yes | 3 |
| PRIMARY | height_max | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sex": "1",
    "age_month": 0,
    "height_min": 0.0,
    "height_max": 46.0,
    "nutrition_level": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "age_month": 0,
    "height_min": 46.1,
    "height_max": 46.9,
    "nutrition_level": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "age_month": 0,
    "height_min": 47.0,
    "height_max": 52.7,
    "nutrition_level": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "age_month": 0,
    "height_min": 52.8,
    "height_max": 53.7,
    "nutrition_level": 4,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "age_month": 0,
    "height_min": 53.8,
    "height_max": 61.2,
    "nutrition_level": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "age_month": 1,
    "height_min": 0.0,
    "height_max": 50.7,
    "nutrition_level": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "age_month": 1,
    "height_min": 50.8,
    "height_max": 51.6,
    "nutrition_level": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "age_month": 1,
    "height_min": 51.7,
    "height_max": 57.6,
    "nutrition_level": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
