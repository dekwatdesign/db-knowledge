# `operation_cancel_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_cancel_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_cancel_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_cancel_type_name | operation_cancel_type_name | yes | 1 |
| PRIMARY | operation_cancel_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "operation_cancel_type_id": 1,
    "operation_cancel_type_name": "เลื่อนผ่าตัด",
    "hos_guid": "{41907746-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_cancel_type_id": 2,
    "operation_cancel_type_name": "งด Case ผ่าตัด",
    "hos_guid": "{41907976-F61C-11DE-BFF4-00215E472B30}"
  }
]
```
