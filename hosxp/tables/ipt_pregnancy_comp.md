# `ipt_pregnancy_comp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| comp_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | comp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "comp_id": 1,
    "name": "Mile P.I.H",
    "hos_guid": null
  },
  {
    "comp_id": 2,
    "name": "Severe P.I.H",
    "hos_guid": null
  },
  {
    "comp_id": 3,
    "name": "Eclampsia",
    "hos_guid": null
  },
  {
    "comp_id": 4,
    "name": "Gestational Proteinuria",
    "hos_guid": null
  },
  {
    "comp_id": 5,
    "name": "Gestational Edema",
    "hos_guid": null
  },
  {
    "comp_id": 6,
    "name": "Gestational Hypertention",
    "hos_guid": null
  },
  {
    "comp_id": 7,
    "name": "A.P.H",
    "hos_guid": null
  },
  {
    "comp_id": 8,
    "name": "Placenta Previa",
    "hos_guid": null
  }
]
```
