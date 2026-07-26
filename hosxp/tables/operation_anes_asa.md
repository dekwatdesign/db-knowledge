# `operation_anes_asa`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| asa_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | asa_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "asa_id": 1,
    "name": "1",
    "hos_guid": null
  },
  {
    "asa_id": 2,
    "name": "2",
    "hos_guid": null
  },
  {
    "asa_id": 3,
    "name": "3",
    "hos_guid": null
  },
  {
    "asa_id": 4,
    "name": "4",
    "hos_guid": null
  },
  {
    "asa_id": 5,
    "name": "5",
    "hos_guid": null
  },
  {
    "asa_id": 6,
    "name": "1E",
    "hos_guid": null
  },
  {
    "asa_id": 7,
    "name": "2E",
    "hos_guid": null
  },
  {
    "asa_id": 8,
    "name": "3E",
    "hos_guid": null
  }
]
```
