# `family_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | YES | UNI | NULL |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code_unique | code | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": 1,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": 2,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": 3,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": 4,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": 5,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": 6,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": 7,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": 8,
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
