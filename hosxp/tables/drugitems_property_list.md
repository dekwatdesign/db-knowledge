# `drugitems_property_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_property_list_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| drugitems_property_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | drugitems_property_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_property_list_id": 3,
    "icode": "1000159",
    "drugitems_property_id": 1,
    "hos_guid": null
  },
  {
    "drugitems_property_list_id": 4,
    "icode": "1000158",
    "drugitems_property_id": 1,
    "hos_guid": null
  },
  {
    "drugitems_property_list_id": 5,
    "icode": "1580002",
    "drugitems_property_id": 1,
    "hos_guid": null
  },
  {
    "drugitems_property_list_id": 6,
    "icode": "1000156",
    "drugitems_property_id": 1,
    "hos_guid": null
  },
  {
    "drugitems_property_list_id": 7,
    "icode": "1000157",
    "drugitems_property_id": 1,
    "hos_guid": null
  },
  {
    "drugitems_property_list_id": 8,
    "icode": "1580006",
    "drugitems_property_id": 1,
    "hos_guid": null
  },
  {
    "drugitems_property_list_id": 9,
    "icode": "1580007",
    "drugitems_property_id": 1,
    "hos_guid": null
  },
  {
    "drugitems_property_list_id": 10,
    "icode": "1660004",
    "drugitems_property_id": 1,
    "hos_guid": null
  }
]
```
