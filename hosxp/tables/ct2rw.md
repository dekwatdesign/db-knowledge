# `ct2rw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drg | char(3) | YES | MUL | NULL |  |  |
| amlos | double(22,3) | YES |  | NULL |  |  |
| los | double(22,3) | YES |  | NULL |  |  |
| ot | double(22,3) | YES |  | NULL |  |  |
| rw | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| drg | drg | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drg": "1",
    "amlos": 9.3,
    "los": 13.51,
    "ot": 62.0,
    "rw": 4.672,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg": "10",
    "amlos": 6.6,
    "los": 6.37,
    "ot": 38.0,
    "rw": 1.333,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg": "100",
    "amlos": 2.2,
    "los": 2.72,
    "ot": 11.0,
    "rw": 0.377,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg": "101",
    "amlos": 4.4,
    "los": 5.18,
    "ot": 22.0,
    "rw": 0.582,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg": "102",
    "amlos": 2.7,
    "los": 3.83,
    "ot": 16.0,
    "rw": 0.53,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg": "103",
    "amlos": 56.5,
    "los": 2.0,
    "ot": 3.0,
    "rw": 10.975,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg": "104",
    "amlos": 11.9,
    "los": 11.9,
    "ot": 34.0,
    "rw": 5.49,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "drg": "105",
    "amlos": 9.4,
    "los": 25.1,
    "ot": 81.0,
    "rw": 6.88,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
