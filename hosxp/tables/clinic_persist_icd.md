# `clinic_persist_icd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| icd10 | varchar(6) | NO | PRI |  |  |  |
| dxtype | char(1) | YES |  | NULL |  |  |
| clinic | varchar(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| doctor_prv_cid | varchar(13) | YES |  | NULL |  |  |
| doctor_prv_name | varchar(50) | YES |  | NULL |  |  |
| diagnosis_datetime | datetime | YES |  | NULL |  |  |
| diagnosis_note | varchar(1000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| icd10 | icd10 | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | icd10 | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "hn": "530108053",
    "icd10": "G403",
    "dxtype": null,
    "clinic": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "doctor_prv_cid": null,
    "doctor_prv_name": null,
    "diagnosis_datetime": null,
    "diagnosis_note": null
  },
  {
    "hn": "530118852",
    "icd10": "",
    "dxtype": null,
    "clinic": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "doctor_prv_cid": null,
    "doctor_prv_name": null,
    "diagnosis_datetime": null,
    "diagnosis_note": null
  },
  {
    "hn": "530118852",
    "icd10": "F840",
    "dxtype": null,
    "clinic": "000",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "doctor_prv_cid": null,
    "doctor_prv_name": null,
    "diagnosis_datetime": null,
    "diagnosis_note": null
  },
  {
    "hn": "610000430",
    "icd10": "F701",
    "dxtype": null,
    "clinic": "000",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "doctor_prv_cid": null,
    "doctor_prv_name": null,
    "diagnosis_datetime": null,
    "diagnosis_note": null
  },
  {
    "hn": "610000430",
    "icd10": "G403",
    "dxtype": null,
    "clinic": "000",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "doctor_prv_cid": null,
    "doctor_prv_name": null,
    "diagnosis_datetime": null,
    "diagnosis_note": null
  }
]
```
