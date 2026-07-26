# `operation_wound`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_wound_id | int(11) | NO | PRI | 0 |  |  |
| operation_wound_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_wound_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "operation_wound_id": 1,
    "operation_wound_name": "Clean wound",
    "hos_guid": null
  },
  {
    "operation_wound_id": 2,
    "operation_wound_name": "Clean contaminate",
    "hos_guid": null
  },
  {
    "operation_wound_id": 3,
    "operation_wound_name": "Contaminate wound",
    "hos_guid": null
  },
  {
    "operation_wound_id": 4,
    "operation_wound_name": "Dirty wound",
    "hos_guid": null
  }
]
```
