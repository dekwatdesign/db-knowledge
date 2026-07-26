# `comdep`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer | varchar(50) | NO | PRI |  |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| documentprinter | varchar(250) | YES |  | NULL |  |  |
| documentserver | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | computer | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer": "A08000201-00077",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0049",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0062",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0069",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0078",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0079",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0080",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0082",
    "depcode": "000",
    "documentprinter": null,
    "documentserver": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
