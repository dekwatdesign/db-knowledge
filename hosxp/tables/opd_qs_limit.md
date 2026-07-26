# `opd_qs_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_limit_id | int(11) | NO | PRI | 0 |  |  |
| opd_queue_slot_type_id | int(11) | YES | MUL | NULL |  |  |
| limit_qty | int(11) | YES |  | NULL |  |  |
| opd_qs_limit_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_limit_type_id | opd_qs_limit_type_id | no | 1 |
| ix_slot_type_unique | opd_queue_slot_type_id | yes | 1 |
| ix_slot_type_unique | opd_qs_limit_type_id | yes | 2 |
| ix_slot_type_unique_index | opd_qs_limit_type_id | yes | 1 |
| ix_slot_type_unique_index | opd_queue_slot_type_id | yes | 2 |
| PRIMARY | opd_qs_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "opd_qs_limit_id": 1,
    "opd_queue_slot_type_id": 1,
    "limit_qty": 5,
    "opd_qs_limit_type_id": 1
  },
  {
    "opd_qs_limit_id": 2,
    "opd_queue_slot_type_id": 2,
    "limit_qty": 3,
    "opd_qs_limit_type_id": 1
  },
  {
    "opd_qs_limit_id": 3,
    "opd_queue_slot_type_id": 3,
    "limit_qty": 2,
    "opd_qs_limit_type_id": 1
  }
]
```
