# `provis_vcctype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(3) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
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
    "hos_guid": null
  },
  {
    "code": "021",
    "name": "dTs1",
    "hos_guid": null
  },
  {
    "code": "022",
    "name": "dTs2",
    "hos_guid": null
  },
  {
    "code": "023",
    "name": "dTs3",
    "hos_guid": null
  },
  {
    "code": "024",
    "name": "dTs4",
    "hos_guid": null
  },
  {
    "code": "031",
    "name": "DTP1",
    "hos_guid": null
  },
  {
    "code": "032",
    "name": "DTP2",
    "hos_guid": null
  },
  {
    "code": "033",
    "name": "DTP3",
    "hos_guid": null
  }
]
```
