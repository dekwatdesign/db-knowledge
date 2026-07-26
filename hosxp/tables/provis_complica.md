# `provis_complica`

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
    "code": "221",
    "name": "Pneumonia",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "222",
    "name": "Diarrhoea",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "223",
    "name": "Encephalitis",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "224",
    "name": "Otitis media",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "225",
    "name": "อื่น ๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "226",
    "name": "ไม่ทราบ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "227",
    "name": "1 + 2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "228",
    "name": "1 + 3",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
