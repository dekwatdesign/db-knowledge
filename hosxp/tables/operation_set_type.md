# `operation_set_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_set_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_set_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_set_type_name | operation_set_type_name | yes | 1 |
| PRIMARY | operation_set_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "operation_set_type_id": 1,
    "operation_set_type_name": "รอการเปิด Visit",
    "hos_guid": null
  },
  {
    "operation_set_type_id": 2,
    "operation_set_type_name": "สั่งผ่าตัดแล้ว",
    "hos_guid": null
  },
  {
    "operation_set_type_id": 3,
    "operation_set_type_name": "ผ่าตัดเสร็จแล้ว",
    "hos_guid": null
  }
]
```
