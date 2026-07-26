# `aninsert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| inserttype | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000786",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000788",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000789",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000791",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000792",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000793",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
