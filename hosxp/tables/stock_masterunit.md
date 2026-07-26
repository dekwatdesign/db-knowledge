# `stock_masterunit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_masterunit_id | int(11) | NO | PRI | 0 |  |  |
| stock_masterunit_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_unique | stock_masterunit_name | yes | 1 |
| PRIMARY | stock_masterunit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stock_masterunit_id": 1,
    "stock_masterunit_name": "tablet",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "stock_masterunit_id": 2,
    "stock_masterunit_name": "bottle",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "stock_masterunit_id": 3,
    "stock_masterunit_name": "capsule",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "stock_masterunit_id": 4,
    "stock_masterunit_name": "measure",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "stock_masterunit_id": 5,
    "stock_masterunit_name": "ampoule",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "stock_masterunit_id": 6,
    "stock_masterunit_name": "sachet",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "stock_masterunit_id": 7,
    "stock_masterunit_name": "vial",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "stock_masterunit_id": 8,
    "stock_masterunit_name": "prefilled syr",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
