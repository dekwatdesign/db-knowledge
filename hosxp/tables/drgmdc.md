# `drgmdc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dg | varchar(5) | NO | PRI |  |  |  |
| mdc | char(2) | YES |  | NULL |  |  |
| note | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| dc | varchar(5) | YES |  | NULL |  |  |
| rw | double(22,5) | YES |  | NULL |  |  |
| wtlos | double(22,2) | YES |  | NULL |  |  |
| ot | int(11) | YES |  | NULL |  |  |
| mdf | double(22,2) | YES |  | NULL |  |  |
| description | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | dg | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dg": "00019",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0001",
    "rw": 55.315,
    "wtlos": 28.51,
    "ot": 86,
    "mdf": 1.0,
    "description": "Liver transplant"
  },
  {
    "dg": "00029",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0002",
    "rw": 79.4635,
    "wtlos": 49.14,
    "ot": 147,
    "mdf": 1.0,
    "description": "Heart and/or lung transplant"
  },
  {
    "dg": "00049",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0004",
    "rw": 49.0264,
    "wtlos": 36.28,
    "ot": 109,
    "mdf": 1.0,
    "description": "Bone marrow transplant"
  },
  {
    "dg": "00060",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0006",
    "rw": 4.3287,
    "wtlos": 9.96,
    "ot": 30,
    "mdf": 0.58,
    "description": "Trach w other proc for upper airway conditions wo sig CCC"
  },
  {
    "dg": "00061",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0006",
    "rw": 7.9014,
    "wtlos": 12.65,
    "ot": 38,
    "mdf": 0.18,
    "description": "Trach w other proc for upper airway conditions w min CCC"
  },
  {
    "dg": "00070",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0007",
    "rw": 2.5975,
    "wtlos": 7.14,
    "ot": 21,
    "mdf": 0.79,
    "description": "Trach for upper airway conditions wo sig CCC"
  },
  {
    "dg": "00071",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0007",
    "rw": 5.3188,
    "wtlos": 10.96,
    "ot": 33,
    "mdf": 0.45,
    "description": "Trach for upper airway conditions w min CCC"
  },
  {
    "dg": "00099",
    "mdc": "00",
    "note": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "dc": "0009",
    "rw": 8.4995,
    "wtlos": 19.57,
    "ot": 59,
    "mdf": 1.0,
    "description": "Laryngectomy"
  }
]
```
