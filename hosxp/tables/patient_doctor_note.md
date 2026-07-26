# `patient_doctor_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| doctor_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "530059450",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530148847",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530179143",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "540001816",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "550000071",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "550000751",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "550001897",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "550001899",
    "doctor_note": "",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
