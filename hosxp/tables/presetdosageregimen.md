# `presetdosageregimen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iname | varchar(150) | YES | MUL | NULL |  |  |
| istrength | varchar(150) | YES |  | NULL |  |  |
| iunits | varchar(150) | YES |  | NULL |  |  |
| maxage | int(11) | YES |  | NULL |  |  |
| minage | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| iname | iname | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "iname": "PARACETAMOL",
    "istrength": "500 mg.",
    "iunits": "เม็ด",
    "maxage": 100,
    "minage": 12,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "iname": "PARACETAMOL",
    "istrength": "500 mg.",
    "iunits": "เม็ด",
    "maxage": 100,
    "minage": 12,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
