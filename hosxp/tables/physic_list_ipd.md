# `physic_list_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_ipd_id | int(11) | NO | PRI | 0 |  |  |
| physic_main_ipd_id | int(11) | YES | MUL | NULL |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| physic_group_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| at_device_code | varchar(10) | YES |  | NULL |  |  |
| at_device_qty | int(11) | YES |  | NULL |  |  |
| begin_datetime | datetime | YES |  | NULL |  |  |
| end_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| ix_physic_group_id | physic_group_id | no | 1 |
| ix_physic_items_id | physic_items_id | no | 1 |
| ix_physic_main_ipd_id | physic_main_ipd_id | no | 1 |
| PRIMARY | physic_ipd_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "physic_ipd_id": 1,
    "physic_main_ipd_id": 9,
    "physic_items_id": null,
    "doctor": null,
    "icode": null,
    "price": 0.0,
    "opi_guid": null,
    "physic_group_id": null,
    "hos_guid": null,
    "at_device_code": null,
    "at_device_qty": null,
    "begin_datetime": null,
    "end_datetime": null
  }
]
```
