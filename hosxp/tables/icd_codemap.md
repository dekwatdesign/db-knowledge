# `icd_codemap`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(250) | NO | PRI |  |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "# ACETABULUM",
    "icd10": "S324",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "# ACROMION",
    "icd10": "S421",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "# ALVEOLUS",
    "icd10": "S028",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "# ANKLE",
    "icd10": "S82",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "# ARM",
    "icd10": "T10",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "# ATLAS",
    "icd10": "S120",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "# AXIS",
    "icd10": "S121",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "# BASE OF SKULL",
    "icd10": "S021",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
