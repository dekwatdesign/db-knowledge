# `service_pay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| pttype | char(2) | NO | PRI |  |  |  |
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
    "icode": "1000001",
    "pttype": "04",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000001",
    "pttype": "10",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000001",
    "pttype": "14",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000001",
    "pttype": "17",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000001",
    "pttype": "19",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000001",
    "pttype": "23",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000001",
    "pttype": "25",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000002",
    "pttype": "04",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
