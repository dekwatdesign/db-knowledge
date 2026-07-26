# `patient_pttype_lock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| lock_pttype | char(1) | YES |  | NULL |  |  |
| lock_opdcard | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "000000001",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000002",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000006",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000011",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000013",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000014",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000023",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "000000025",
    "lock_pttype": "N",
    "lock_opdcard": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
