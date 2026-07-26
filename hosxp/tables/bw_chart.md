# `bw_chart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sex | char(1) | NO | PRI |  |  |  |
| height | int(11) | NO | PRI | 0 |  |  |
| bw_min | double(22,3) | NO | PRI | 0.000 |  |  |
| bw_max | double(22,3) | NO | PRI | 0.000 |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | sex | yes | 1 |
| PRIMARY | height | yes | 2 |
| PRIMARY | bw_min | yes | 3 |
| PRIMARY | bw_max | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sex": "1",
    "height": 45,
    "bw_min": 0.0,
    "bw_max": 1.9,
    "nutrition_level": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "height": 45,
    "bw_min": 2.0,
    "bw_max": 2.0,
    "nutrition_level": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "height": 45,
    "bw_min": 2.1,
    "bw_max": 2.8,
    "nutrition_level": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "height": 45,
    "bw_min": 2.9,
    "bw_max": 3.0,
    "nutrition_level": 4,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "height": 45,
    "bw_min": 3.1,
    "bw_max": 3.3,
    "nutrition_level": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "height": 45,
    "bw_min": 3.4,
    "bw_max": 26.0,
    "nutrition_level": 6,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "height": 46,
    "bw_min": 0.0,
    "bw_max": 2.0,
    "nutrition_level": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "1",
    "height": 46,
    "bw_min": 2.1,
    "bw_max": 2.1,
    "nutrition_level": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
