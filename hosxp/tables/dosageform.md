# `dosageform`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(150) | NO | PRI |  |  |  |
| dosage_image | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| snomed_ct_code | varchar(20) | YES |  | NULL |  |  |

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
    "name": "CAPSULES",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  },
  {
    "name": "EMULSIONS",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  },
  {
    "name": "INJECTIONS",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  },
  {
    "name": "POWDERS",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  },
  {
    "name": "SOLUTIONS",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  },
  {
    "name": "SUSPENSIONS",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  },
  {
    "name": "SYRUPS",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  },
  {
    "name": "TABLETS",
    "dosage_image": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "snomed_ct_code": null
  }
]
```
