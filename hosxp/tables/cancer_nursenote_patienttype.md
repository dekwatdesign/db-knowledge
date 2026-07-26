# `cancer_nursenote_patienttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patienttype_id | int(11) | NO | PRI | 0 |  |  |
| patienttype_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patienttype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "patienttype_id": 1,
    "patienttype_name": "Check up",
    "hos_guid": null
  },
  {
    "patienttype_id": 2,
    "patienttype_name": "F/U OPD เฉพาะทางฯ",
    "hos_guid": null
  },
  {
    "patienttype_id": 3,
    "patienttype_name": "F/U OPD CMT",
    "hos_guid": null
  },
  {
    "patienttype_id": 4,
    "patienttype_name": "F/U OPD RT",
    "hos_guid": null
  },
  {
    "patienttype_id": 5,
    "patienttype_name": "Consult",
    "hos_guid": null
  },
  {
    "patienttype_id": 6,
    "patienttype_name": "Refer",
    "hos_guid": null
  },
  {
    "patienttype_id": 7,
    "patienttype_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
