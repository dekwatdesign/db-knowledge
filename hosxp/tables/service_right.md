# `service_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| pttype | char(2) | NO | PRI |  |  |  |
| allow_order | char(1) | YES |  | NULL |  |  |
| allow_order_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | icode | yes | 1 |
| PRIMARY | pttype | yes | 2 |
| pttype | pttype | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icode": "3001514",
    "pttype": "02",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001514",
    "pttype": "13",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001514",
    "pttype": "26",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001515",
    "pttype": "02",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001515",
    "pttype": "13",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001515",
    "pttype": "26",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001517",
    "pttype": "02",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "3001517",
    "pttype": "13",
    "allow_order": null,
    "allow_order_note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
