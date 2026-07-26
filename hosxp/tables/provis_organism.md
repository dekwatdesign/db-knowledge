# `provis_organism`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(3) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "011",
    "name": "Cholera ELTOR INABA (E.I)",
    "hos_guid": null
  },
  {
    "code": "012",
    "name": "Cholera ELTOR OGAWA (E.O)",
    "hos_guid": null
  },
  {
    "code": "013",
    "name": "Cholera ELTOR HIROSHIMA (E.H)",
    "hos_guid": null
  },
  {
    "code": "016",
    "name": "Cholera 0139 (0139)",
    "hos_guid": null
  },
  {
    "code": "019",
    "name": "Unknown",
    "hos_guid": null
  },
  {
    "code": "031",
    "name": "V.P (Vibrio Parahaemolyticus)",
    "hos_guid": null
  },
  {
    "code": "032",
    "name": "Salmonella",
    "hos_guid": null
  },
  {
    "code": "033",
    "name": "Staphylococcus",
    "hos_guid": null
  }
]
```
