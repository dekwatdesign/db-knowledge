# `ct2ax`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ax | char(4) | NO | PRI |  |  |  |
| code | char(5) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ax | ax | no | 1 |
| code | code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | ax | yes | 1 |
| PRIMARY | code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ax": "104",
    "code": "3721",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ax": "104",
    "code": "3722",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ax": "104",
    "code": "3723",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ax": "104",
    "code": "3726",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ax": "104",
    "code": "8852",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ax": "104",
    "code": "8853",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ax": "104",
    "code": "8854",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ax": "104",
    "code": "8855",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
