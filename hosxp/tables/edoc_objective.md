# `edoc_objective`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_objective_id | int(11) | NO | PRI | 0 |  |  |
| edoc_objective_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_objective_name | edoc_objective_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_objective_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "edoc_objective_id": 1,
    "edoc_objective_name": "เพื่อทราบ",
    "hos_guid": null
  },
  {
    "edoc_objective_id": 2,
    "edoc_objective_name": "เพื่อดำเนินการ",
    "hos_guid": null
  },
  {
    "edoc_objective_id": 3,
    "edoc_objective_name": "เพื่อถือปฏิบัติ",
    "hos_guid": null
  },
  {
    "edoc_objective_id": 4,
    "edoc_objective_name": "เพื่อทราบและพิจารณา",
    "hos_guid": null
  },
  {
    "edoc_objective_id": 5,
    "edoc_objective_name": "เพื่อทราบและพิจารณาดำเนินการ",
    "hos_guid": null
  },
  {
    "edoc_objective_id": 6,
    "edoc_objective_name": "เพื่อทราบและพิจารณาสั่งการ",
    "hos_guid": null
  },
  {
    "edoc_objective_id": 7,
    "edoc_objective_name": "เพื่อทราบและพิจารณาอนุมัติ",
    "hos_guid": null
  },
  {
    "edoc_objective_id": 8,
    "edoc_objective_name": "เพื่อโปรดทราบ",
    "hos_guid": null
  }
]
```
