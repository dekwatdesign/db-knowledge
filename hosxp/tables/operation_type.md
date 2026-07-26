# `operation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_type_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "operation_type_id": 1,
    "name": "MAJOR",
    "hos_guid": null
  },
  {
    "operation_type_id": 2,
    "name": "MINOR",
    "hos_guid": null
  }
]
```
