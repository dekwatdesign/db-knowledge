# `infant_delivery_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_delivery_type_id | int(11) | NO | PRI | 0 |  |  |
| infant_delivery_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_infant_delivery_type_name | infant_delivery_type_name | yes | 1 |
| PRIMARY | infant_delivery_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "infant_delivery_type_id": 1,
    "infant_delivery_type_name": "ND",
    "hos_guid": null
  },
  {
    "infant_delivery_type_id": 2,
    "infant_delivery_type_name": "C/S",
    "hos_guid": null
  },
  {
    "infant_delivery_type_id": 3,
    "infant_delivery_type_name": "F/E",
    "hos_guid": null
  },
  {
    "infant_delivery_type_id": 4,
    "infant_delivery_type_name": "V/E",
    "hos_guid": null
  },
  {
    "infant_delivery_type_id": 5,
    "infant_delivery_type_name": "Breech assiting",
    "hos_guid": null
  },
  {
    "infant_delivery_type_id": 6,
    "infant_delivery_type_name": "Breech extraction",
    "hos_guid": null
  },
  {
    "infant_delivery_type_id": 7,
    "infant_delivery_type_name": "BBA",
    "hos_guid": null
  },
  {
    "infant_delivery_type_id": 8,
    "infant_delivery_type_name": "Twin",
    "hos_guid": null
  }
]
```
