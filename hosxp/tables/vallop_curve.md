# `vallop_curve`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pa_week | int(11) | NO | PRI | 0 |  |  |
| height | double(15,3) | NO | PRI | 0.000 |  |  |
| bw_min | double(15,3) | NO | PRI | 0.000 |  |  |
| bw_max | double(15,3) | NO | PRI | 0.000 |  |  |
| bmi | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | pa_week | yes | 1 |
| PRIMARY | height | yes | 2 |
| PRIMARY | bw_min | yes | 3 |
| PRIMARY | bw_max | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pa_week": 12,
    "height": 140.0,
    "bw_min": 40.0,
    "bw_max": 40.79,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pa_week": 12,
    "height": 141.0,
    "bw_min": 40.8,
    "bw_max": 41.39,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pa_week": 12,
    "height": 142.0,
    "bw_min": 41.4,
    "bw_max": 41.99,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pa_week": 12,
    "height": 143.0,
    "bw_min": 42.0,
    "bw_max": 42.59,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pa_week": 12,
    "height": 144.0,
    "bw_min": 42.6,
    "bw_max": 43.19,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pa_week": 12,
    "height": 145.0,
    "bw_min": 43.2,
    "bw_max": 43.79,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pa_week": 12,
    "height": 146.0,
    "bw_min": 43.8,
    "bw_max": 44.39,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pa_week": 12,
    "height": 147.0,
    "bw_min": 44.4,
    "bw_max": 44.99,
    "bmi": 99.0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
