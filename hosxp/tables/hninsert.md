# `hninsert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| inserttype | varchar(10) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| inserttype_hn | inserttype | no | 1 |
| inserttype_hn | hn | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_ix_hn | hn | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | inserttype | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "000000000",
    "inserttype": "SKIP",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000003",
    "inserttype": "SKIP",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "470000013",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "53 161754",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000153",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000154",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000243",
    "inserttype": "SUCCESS",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
