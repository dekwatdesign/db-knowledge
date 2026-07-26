# `lab_auto_print_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_auto_print_queue_id | int(11) | NO | PRI | 0 |  |  |
| lab_auto_print_queue_datetime | datetime | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_order_number | lab_order_number | yes | 1 |
| PRIMARY | lab_auto_print_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "lab_auto_print_queue_id": 1,
    "lab_auto_print_queue_datetime": "2022-06-10 08:54:05",
    "lab_order_number": 18287,
    "hos_guid": null
  }
]
```
