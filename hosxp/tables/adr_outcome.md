# `adr_outcome`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_outcome_id | int(11) | NO | PRI | 0 |  |  |
| adr_outcome_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_outcome_name | adr_outcome_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_outcome_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "adr_outcome_id": 1,
    "adr_outcome_name": "หายเป็นปกติโดยไม่มีร่องรอยเดิม",
    "hos_guid": null
  },
  {
    "adr_outcome_id": 2,
    "adr_outcome_name": "หายโดยมีร่องรอยเดิม",
    "hos_guid": null
  },
  {
    "adr_outcome_id": 3,
    "adr_outcome_name": "ยังมีอาการอยู่",
    "hos_guid": null
  },
  {
    "adr_outcome_id": 4,
    "adr_outcome_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "adr_outcome_id": 5,
    "adr_outcome_name": "ไม่สามารถติดตามผลได้",
    "hos_guid": null
  }
]
```
