# `serial`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(50) | NO | PRI |  |  |  |
| serial_no | int(11) | YES |  | NULL |  |  |
| node_id | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "finance_number",
    "serial_no": 357262,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "doctor_formula_code",
    "serial_no": 2165,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "doctor_order_print_code",
    "serial_no": 7652160,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "rx_sticker_queue",
    "serial_no": 517,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "room_reserve_queue",
    "serial_no": 226,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "room_reserve_queue_sp_01",
    "serial_no": 132,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "room_reserve_queue_sp_08",
    "serial_no": 33,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "room_reserve_queue_sp_02",
    "serial_no": 7,
    "node_id": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
