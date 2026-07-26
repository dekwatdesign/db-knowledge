# `operation_respiration`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_respiration_id | int(11) | NO | PRI | 0 |  |  |
| operation_respiration_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_respiration_name | operation_respiration_name | yes | 1 |
| PRIMARY | operation_respiration_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "operation_respiration_id": 1,
    "operation_respiration_name": "หายใจเอง",
    "hos_guid": "{02B678A8-F61D-11DE-BFF4-00215E472B30}",
    "score": null
  },
  {
    "operation_respiration_id": 2,
    "operation_respiration_name": "ON OXZYGEN",
    "hos_guid": "{02B67AD8-F61D-11DE-BFF4-00215E472B30}",
    "score": null
  },
  {
    "operation_respiration_id": 3,
    "operation_respiration_name": "ON ET TUBE",
    "hos_guid": "{02B67BF0-F61D-11DE-BFF4-00215E472B30}",
    "score": null
  },
  {
    "operation_respiration_id": 4,
    "operation_respiration_name": "ON TT TUBE",
    "hos_guid": "{02B67CE0-F61D-11DE-BFF4-00215E472B30}",
    "score": null
  }
]
```
