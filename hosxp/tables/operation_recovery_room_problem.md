# `operation_recovery_room_problem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_recovery_room_problem_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| complication_id | int(11) | YES |  | NULL |  |  |
| treatment | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_id | operation_id | no | 1 |
| PRIMARY | operation_recovery_room_problem_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "operation_recovery_room_problem_id": 1,
    "operation_id": 57,
    "complication_id": 16,
    "treatment": null,
    "hos_guid": "{9EFCE7C8-FB4B-11DE-BFF4-00215E472B30}"
  }
]
```
