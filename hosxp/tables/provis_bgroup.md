# `provis_bgroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
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
    "code": "01",
    "name": "A",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "02",
    "name": "B",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "03",
    "name": "AB",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "04",
    "name": "O",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "05",
    "name": "A-negative",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "06",
    "name": "B-negative",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "07",
    "name": "AB-negative",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "08",
    "name": "O-negative",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
