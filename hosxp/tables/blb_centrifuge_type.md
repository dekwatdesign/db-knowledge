# `blb_centrifuge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_centrifuge_id | int(11) | NO | PRI | 0 |  |  |
| blb_centrifuge_code | char(1) | YES |  | NULL |  |  |
| blb_centrifuge_name | varchar(200) | YES |  | NULL |  |  |
| blb_centrifuge_group | char(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blb_centrifuge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_centrifuge_id": 1,
    "blb_centrifuge_code": "R",
    "blb_centrifuge_name": "RED CELL",
    "blb_centrifuge_group": "CEL",
    "hos_guid": null
  },
  {
    "blb_centrifuge_id": 2,
    "blb_centrifuge_code": "W",
    "blb_centrifuge_name": "WASHED RC",
    "blb_centrifuge_group": "CEL",
    "hos_guid": null
  },
  {
    "blb_centrifuge_id": 3,
    "blb_centrifuge_code": "L",
    "blb_centrifuge_name": "LEUKOCYTES POOR RED CELLL",
    "blb_centrifuge_group": "CEL",
    "hos_guid": null
  },
  {
    "blb_centrifuge_id": 4,
    "blb_centrifuge_code": "P",
    "blb_centrifuge_name": "PLASMA PHERESIS",
    "blb_centrifuge_group": "CEL",
    "hos_guid": null
  },
  {
    "blb_centrifuge_id": 5,
    "blb_centrifuge_code": "P",
    "blb_centrifuge_name": "PLATELETS",
    "blb_centrifuge_group": "PLT",
    "hos_guid": null
  },
  {
    "blb_centrifuge_id": 6,
    "blb_centrifuge_code": "B",
    "blb_centrifuge_name": "BUFFY COAT",
    "blb_centrifuge_group": "PLT",
    "hos_guid": null
  },
  {
    "blb_centrifuge_id": 7,
    "blb_centrifuge_code": "A",
    "blb_centrifuge_name": "FFP",
    "blb_centrifuge_group": "PLS",
    "hos_guid": null
  },
  {
    "blb_centrifuge_id": 8,
    "blb_centrifuge_code": "B",
    "blb_centrifuge_name": "FDP",
    "blb_centrifuge_group": "PLS",
    "hos_guid": null
  }
]
```
