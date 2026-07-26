# `bmi_chart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sex | char(1) | NO | PRI |  |  |  |
| age_month | int(11) | NO | PRI | 0 |  |  |
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
| PRIMARY | age_month | yes | 2 |
| PRIMARY | bw_min | yes | 3 |
| PRIMARY | bw_max | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sex": "2",
    "age_month": 54,
    "bw_min": 13.0,
    "bw_max": 13.8,
    "nutrition_level": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "2",
    "age_month": 54,
    "bw_min": 0.0,
    "bw_max": 12.9,
    "nutrition_level": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "2",
    "age_month": 53,
    "bw_min": 23.0,
    "bw_max": 99.0,
    "nutrition_level": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "2",
    "age_month": 53,
    "bw_min": 21.3,
    "bw_max": 22.9,
    "nutrition_level": 4,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "2",
    "age_month": 53,
    "bw_min": 13.8,
    "bw_max": 21.2,
    "nutrition_level": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "2",
    "age_month": 53,
    "bw_min": 12.9,
    "bw_max": 13.7,
    "nutrition_level": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "2",
    "age_month": 53,
    "bw_min": 0.0,
    "bw_max": 12.8,
    "nutrition_level": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sex": "2",
    "age_month": 52,
    "bw_min": 22.7,
    "bw_max": 99.0,
    "nutrition_level": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
