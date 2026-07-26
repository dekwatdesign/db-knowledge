# `dchstts`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dchstts | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| nhso_dchstts | char(2) | YES |  | NULL |  |  |
| oldcode | varchar(5) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oldcode | oldcode | no | 1 |
| PRIMARY | dchstts | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dchstts": "01",
    "name": "Complete Recovery",
    "nhso_dchstts": "1",
    "oldcode": null,
    "hos_guid": null
  },
  {
    "dchstts": "02",
    "name": "Improved",
    "nhso_dchstts": "2",
    "oldcode": null,
    "hos_guid": null
  },
  {
    "dchstts": "03",
    "name": "Not Improved",
    "nhso_dchstts": "3",
    "oldcode": null,
    "hos_guid": null
  },
  {
    "dchstts": "04",
    "name": "Normal Delivery",
    "nhso_dchstts": "4",
    "oldcode": null,
    "hos_guid": null
  },
  {
    "dchstts": "05",
    "name": "Un-Delivery",
    "nhso_dchstts": "5",
    "oldcode": null,
    "hos_guid": null
  },
  {
    "dchstts": "06",
    "name": "Normal Child Discharged with Mother",
    "nhso_dchstts": "6",
    "oldcode": null,
    "hos_guid": null
  },
  {
    "dchstts": "07",
    "name": "Normal Child Discharged separately",
    "nhso_dchstts": "7",
    "oldcode": null,
    "hos_guid": null
  },
  {
    "dchstts": "08",
    "name": "Dead Still Birth",
    "nhso_dchstts": "8",
    "oldcode": null,
    "hos_guid": null
  }
]
```
