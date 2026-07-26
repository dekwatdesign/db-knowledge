# `provis_aptype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(3) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "010",
    "name": "BCG",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "021",
    "name": "dTs1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "022",
    "name": "dTs2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "023",
    "name": "dTs3",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "024",
    "name": "dTs4",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "031",
    "name": "DTP1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "032",
    "name": "DTP2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "033",
    "name": "DTP3",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
