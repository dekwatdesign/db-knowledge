# `ct2bimdc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(5) | YES | MUL | NULL |  |  |
| dcfem | char(4) | YES |  | NULL |  |  |
| dcmale | char(4) | YES |  | NULL |  |  |
| mdcfem | char(2) | YES |  | NULL |  |  |
| mdcmale | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A510",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A540",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A541",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A542",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A55",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A56",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A560",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "A561",
    "dcfem": "368",
    "dcmale": "350",
    "mdcfem": "13",
    "mdcmale": "12",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
