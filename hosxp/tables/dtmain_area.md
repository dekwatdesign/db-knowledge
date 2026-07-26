# `dtmain_area`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_area_id | int(11) | NO | PRI | 0 |  |  |
| dtmain_id | int(11) | YES | MUL | NULL |  |  |
| dtarea_code | varchar(10) | YES |  | NULL |  |  |
| ext_code | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icd10tm_operation_code | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dtmain_id | dtmain_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dtmain_area_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dtmain_area_id": 2,
    "dtmain_id": 21,
    "dtarea_code": "45",
    "ext_code": "om",
    "hos_guid": null,
    "icd10tm_operation_code": null
  },
  {
    "dtmain_area_id": 3,
    "dtmain_id": 19,
    "dtarea_code": "85",
    "ext_code": null,
    "hos_guid": null,
    "icd10tm_operation_code": null
  },
  {
    "dtmain_area_id": 4,
    "dtmain_id": 23,
    "dtarea_code": "15",
    "ext_code": "",
    "hos_guid": null,
    "icd10tm_operation_code": null
  },
  {
    "dtmain_area_id": 5,
    "dtmain_id": 29,
    "dtarea_code": "36",
    "ext_code": null,
    "hos_guid": null,
    "icd10tm_operation_code": null
  },
  {
    "dtmain_area_id": 6,
    "dtmain_id": 32,
    "dtarea_code": "32",
    "ext_code": null,
    "hos_guid": null,
    "icd10tm_operation_code": null
  },
  {
    "dtmain_area_id": 7,
    "dtmain_id": 36,
    "dtarea_code": "85",
    "ext_code": null,
    "hos_guid": null,
    "icd10tm_operation_code": null
  },
  {
    "dtmain_area_id": 8,
    "dtmain_id": 28,
    "dtarea_code": "37",
    "ext_code": "0",
    "hos_guid": null,
    "icd10tm_operation_code": null
  },
  {
    "dtmain_area_id": 9,
    "dtmain_id": 29,
    "dtarea_code": "00",
    "ext_code": "",
    "hos_guid": null,
    "icd10tm_operation_code": null
  }
]
```
