# `dtarea`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtarea_code | varchar(10) | NO | PRI |  |  |  |
| dtarea_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| teeth_number | int(11) | YES |  | NULL |  |  |
| dtarea_name_thai | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dtarea_name | dtarea_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | dtarea_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dtarea_code": "00",
    "dtarea_name": "Other Service",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  },
  {
    "dtarea_code": "01",
    "dtarea_name": "Full Mouth",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  },
  {
    "dtarea_code": "01A",
    "dtarea_name": "Full Mouth Area",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  },
  {
    "dtarea_code": "02",
    "dtarea_name": "Upper Arch",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  },
  {
    "dtarea_code": "02A",
    "dtarea_name": "UPPER ARCH AREA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  },
  {
    "dtarea_code": "03",
    "dtarea_name": "LOWER ARCH",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  },
  {
    "dtarea_code": "03A",
    "dtarea_name": "LOWER ARCH AREA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  },
  {
    "dtarea_code": "04",
    "dtarea_name": "QUADRANT 1",
    "hos_guid": null,
    "hos_guid_ext": null,
    "teeth_number": null,
    "dtarea_name_thai": null
  }
]
```
