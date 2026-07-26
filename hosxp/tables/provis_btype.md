# `provis_btype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
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

## Sample rows (5)

```json
[
  {
    "code": "1",
    "name": "NORMAL",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "2",
    "name": "CESAREAN",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "3",
    "name": "VACUUM",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "4",
    "name": "FORCEPS",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "5",
    "name": "ท่าก้น",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
