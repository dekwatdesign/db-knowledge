# `operation_time_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_time_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_time_type_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_time_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "operation_time_type_id": 1,
    "operation_time_type_name": "ในเวลา",
    "hos_guid": null
  },
  {
    "operation_time_type_id": 2,
    "operation_time_type_name": "นอกเวลา",
    "hos_guid": null
  }
]
```
