# `operation_complication_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| complication_type_id | int(11) | NO | PRI | 0 |  |  |
| complication_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | complication_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "complication_type_id": 1,
    "complication_type_name": "Pre",
    "hos_guid": null
  },
  {
    "complication_type_id": 2,
    "complication_type_name": "Intra",
    "hos_guid": null
  },
  {
    "complication_type_id": 3,
    "complication_type_name": "Post",
    "hos_guid": null
  }
]
```
