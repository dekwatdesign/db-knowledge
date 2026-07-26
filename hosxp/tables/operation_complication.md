# `operation_complication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| complication_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| operation_complication_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | complication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "complication_id": 1,
    "name": "หายใจเหนื่อย / มี Wheezing",
    "hos_guid": null,
    "operation_complication_type_id": null
  },
  {
    "complication_id": 2,
    "name": "CARDIOVASCULAROTHER",
    "hos_guid": null,
    "operation_complication_type_id": null
  },
  {
    "complication_id": 3,
    "name": "ARRHYTHMIA",
    "hos_guid": null,
    "operation_complication_type_id": null
  },
  {
    "complication_id": 4,
    "name": "CARDIAC ARREST",
    "hos_guid": null,
    "operation_complication_type_id": null
  },
  {
    "complication_id": 5,
    "name": "BRADYCARDIA",
    "hos_guid": null,
    "operation_complication_type_id": null
  },
  {
    "complication_id": 6,
    "name": "HYPERTENSION",
    "hos_guid": null,
    "operation_complication_type_id": null
  },
  {
    "complication_id": 7,
    "name": "HYPOTENSION",
    "hos_guid": null,
    "operation_complication_type_id": null
  },
  {
    "complication_id": 8,
    "name": "SHOCK",
    "hos_guid": null,
    "operation_complication_type_id": null
  }
]
```
