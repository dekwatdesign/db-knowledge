# `ipt_discharge_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "540001091",
    "doctor": null,
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000182",
    "doctor": "065",
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000254",
    "doctor": "060",
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000372",
    "doctor": "052",
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000511",
    "doctor": "052",
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000958",
    "doctor": "064",
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550001242",
    "doctor": null,
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "560001842",
    "doctor": "067",
    "note": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
