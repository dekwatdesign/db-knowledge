# `opdquickccscreen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| quickname | varchar(250) | YES | UNI | NULL |  |  |
| user | varchar(25) | YES |  | NULL |  |  |
| full_text | blob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| quickname_unique | quickname | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "quickname": "",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "quickname": "dressing wound",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "quickname": "TRCS 2",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "quickname": "trcs 3",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "quickname": "TT",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "quickname": "TT2",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "quickname": "TT3",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "quickname": "ขับมอเตอร์ไซต์ชนมอเตอร์ไซต์",
    "user": null,
    "full_text": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
