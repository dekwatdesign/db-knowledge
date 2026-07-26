# `drugitems_pharmacology`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_pharmacology_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| pharmacology_group_id | int(11) | YES |  | NULL |  |  |
| pharmacology_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| show_combine_alert | char(1) | YES |  | NULL |  |  |
| pharmacology_group_id_2 | int(11) | YES |  | NULL |  |  |
| pharmacology_group_id_3 | int(11) | YES |  | NULL |  |  |
| pharmacology_group_id_4 | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_pharmacology_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_pharmacology_id": 1,
    "icode": "1000107",
    "pharmacology_group_id": null,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": null,
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  },
  {
    "drugitems_pharmacology_id": 2,
    "icode": "1000110",
    "pharmacology_group_id": 8,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": null,
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  },
  {
    "drugitems_pharmacology_id": 3,
    "icode": "1000234",
    "pharmacology_group_id": 168,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": "Y",
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  },
  {
    "drugitems_pharmacology_id": 4,
    "icode": "1640035",
    "pharmacology_group_id": 68,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": null,
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  },
  {
    "drugitems_pharmacology_id": 5,
    "icode": "1640006",
    "pharmacology_group_id": 68,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": null,
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  },
  {
    "drugitems_pharmacology_id": 6,
    "icode": "1640023",
    "pharmacology_group_id": 68,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": null,
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  },
  {
    "drugitems_pharmacology_id": 7,
    "icode": "1640008",
    "pharmacology_group_id": 68,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": null,
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  },
  {
    "drugitems_pharmacology_id": 8,
    "icode": "1000112",
    "pharmacology_group_id": 168,
    "pharmacology_type_id": null,
    "staff": null,
    "update_datetime": null,
    "show_combine_alert": "Y",
    "pharmacology_group_id_2": null,
    "pharmacology_group_id_3": null,
    "pharmacology_group_id_4": null
  }
]
```
