# `pe_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pe_name | varchar(250) | NO | PRI |  |  |  |
| pe_section | varchar(20) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_pe_section | pe_section | no | 1 |
| PRIMARY | pe_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pe_name": "Axillary LN not enlarge",
    "pe_section": "LN",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pe_name": "Cervical LN not enlange",
    "pe_section": "LN",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pe_name": "Clear breath sound, Rt=Lt",
    "pe_section": "LUNG",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pe_name": "Conscious well cooperate",
    "pe_section": "NEURO",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pe_name": "Enlarge LN",
    "pe_section": "LN",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pe_name": "Full ROM",
    "pe_section": "EXT",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pe_name": "Groin node not enlarge",
    "pe_section": "LN",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pe_name": "HR regular",
    "pe_section": "HEART",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
