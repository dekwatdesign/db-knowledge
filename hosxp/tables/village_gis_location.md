# `village_gis_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_code | varchar(10) | NO | PRI |  |  |  |
| latitude | varchar(100) | YES |  | NULL |  |  |
| longitude | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | village_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_code": "11010201",
    "latitude": "13.6606878591337",
    "longitude": "100.593458401695",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "village_code": "11010202",
    "latitude": "13.6478224153785",
    "longitude": "100.599858220869",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "village_code": "11010203",
    "latitude": "13.6458875767848",
    "longitude": "100.60972348507",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "village_code": "11010204",
    "latitude": "13.6416862302182",
    "longitude": "100.624882398999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "village_code": "11010205",
    "latitude": "13.645843060016",
    "longitude": "100.631607777587",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "village_code": "11010206",
    "latitude": "13.6576009534967",
    "longitude": "100.604164493648",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "village_code": "11010207",
    "latitude": "13.6555352213016",
    "longitude": "100.602289738405",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "village_code": "11010208",
    "latitude": "13.6527760105306",
    "longitude": "100.597558285463",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
