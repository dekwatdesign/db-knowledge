# `health_med_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "item_id": 1,
    "name": "นวดไทยโบราณ",
    "icode": null,
    "hos_guid": null
  },
  {
    "item_id": 2,
    "name": "นวดน้ำมัน",
    "icode": null,
    "hos_guid": null
  },
  {
    "item_id": 3,
    "name": "นวดสมุนไพร",
    "icode": null,
    "hos_guid": null
  },
  {
    "item_id": 4,
    "name": "ประคบร้อน",
    "icode": null,
    "hos_guid": null
  }
]
```
