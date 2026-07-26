# `operation_anes_technique`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| technique_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | technique_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "technique_id": 1,
    "name": "GA Tube",
    "hos_guid": null
  },
  {
    "technique_id": 2,
    "name": "GA Mask",
    "hos_guid": null
  },
  {
    "technique_id": 3,
    "name": "Spinal Block",
    "hos_guid": null
  },
  {
    "technique_id": 4,
    "name": "TIVA",
    "hos_guid": null
  },
  {
    "technique_id": 5,
    "name": "MAC",
    "hos_guid": null
  }
]
```
