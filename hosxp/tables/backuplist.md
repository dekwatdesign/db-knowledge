# `backuplist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| groupname | varchar(150) | YES |  | NULL |  |  |
| tablename | varchar(150) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | tablename | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "groupname": "VolatileDB",
    "tablename": "ACCESSOPERATION",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "groupname": "VolatileDB",
    "tablename": "ANINSERT",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "groupname": "VolatileDB",
    "tablename": "BackupList",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "groupname": "VolatileDB",
    "tablename": "BedNo",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "groupname": "VolatileDB",
    "tablename": "BedType",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "groupname": "VolatileDB",
    "tablename": "CardType",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "groupname": "VolatileDB",
    "tablename": "DchStts",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "groupname": "VolatileDB",
    "tablename": "DchType",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
