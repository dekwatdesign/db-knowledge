# `drugitems_inc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| add_icode | varchar(7) | NO | PRI |  |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | add_icode | yes | 1 |
| PRIMARY | icode | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "icode": "1000025",
    "add_icode": "3000010",
    "qty": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000074",
    "add_icode": "3000010",
    "qty": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000078",
    "add_icode": "3000010",
    "qty": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000082",
    "add_icode": "3000010",
    "qty": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1670060",
    "add_icode": "3000010",
    "qty": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
