# `physic_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| physic_group_id | int(11) | YES | MUL | NULL |  |  |
| doctor2 | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| begin_datetime | datetime | YES |  | NULL |  |  |
| end_datetime | datetime | YES |  | NULL |  |  |
| at_device_code | varchar(10) | YES |  | NULL |  |  |
| at_device_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| ix_id | physic_group_id | no | 1 |
| physic_items_id | physic_items_id | no | 1 |
| PRIMARY | physic_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_id": 2,
    "vn": "640308140014",
    "physic_items_id": 1,
    "doctor": "233",
    "icode": "3001893",
    "price": null,
    "opi_guid": null,
    "physic_group_id": null,
    "doctor2": null,
    "hos_guid": null,
    "begin_datetime": "2021-03-08 15:47:12",
    "end_datetime": "2021-03-08 15:57:12",
    "at_device_code": null,
    "at_device_qty": null
  },
  {
    "physic_id": 3,
    "vn": "640308093026",
    "physic_items_id": 1,
    "doctor": "233",
    "icode": "3001893",
    "price": null,
    "opi_guid": null,
    "physic_group_id": null,
    "doctor2": null,
    "hos_guid": null,
    "begin_datetime": "2021-03-08 16:06:59",
    "end_datetime": "2021-03-08 16:16:59",
    "at_device_code": null,
    "at_device_qty": null
  }
]
```
