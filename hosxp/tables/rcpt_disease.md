# `rcpt_disease`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(100) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": " ค่าน้ำมันรถ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": " ไซค์นัด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(รพ.เจ็ดเสมียน)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "-",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": ".",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "100",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "104",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "210",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
