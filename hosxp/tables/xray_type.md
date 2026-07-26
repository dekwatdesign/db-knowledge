# `xray_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_type | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| xray_items_code | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| ix_xray_items_code | xray_items_code | no | 1 |
| PRIMARY | xray_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "xray_type": 1,
    "name": "AP",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  },
  {
    "xray_type": 2,
    "name": "PA",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  },
  {
    "xray_type": 3,
    "name": "Lateral",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  },
  {
    "xray_type": 4,
    "name": "Axial",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  },
  {
    "xray_type": 5,
    "name": "Frogleg",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  },
  {
    "xray_type": 6,
    "name": "Oblique",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  },
  {
    "xray_type": 7,
    "name": "Supine",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  },
  {
    "xray_type": 8,
    "name": "Upright",
    "icode": null,
    "xray_items_code": null,
    "hos_guid": null
  }
]
```
