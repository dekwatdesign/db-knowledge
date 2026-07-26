# `operation_specimen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_specimen_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES |  | NULL |  |  |
| operation_specimen_type_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| specimen_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_specimen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "operation_specimen_id": 1,
    "operation_id": 23,
    "operation_specimen_type_id": 2,
    "qty": 1,
    "price": 500.0,
    "opi_guid": "{1B320CC4-6224-45DB-8701-FEBBB89D6707}",
    "total_price": 500.0,
    "icode": "3071002",
    "hos_guid": "{0717A6CE-F61D-11DE-BFF4-00215E472B30}",
    "specimen_name": null
  },
  {
    "operation_specimen_id": 3,
    "operation_id": 50,
    "operation_specimen_type_id": 1,
    "qty": 2,
    "price": 350.0,
    "opi_guid": "{3522564D-E75E-43C8-9D4B-91A0F45D2F9A}",
    "total_price": 700.0,
    "icode": "3071001",
    "hos_guid": "{0717A91C-F61D-11DE-BFF4-00215E472B30}",
    "specimen_name": null
  }
]
```
