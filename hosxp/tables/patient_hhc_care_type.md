# `patient_hhc_care_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_care_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_care_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_hhc_care_type_name | patient_hhc_care_type_name | yes | 1 |
| PRIMARY | patient_hhc_care_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_hhc_care_type_id": 1,
    "patient_hhc_care_type_name": "ผู้ป่วยหรือญาติขาดความรู้ความเข้าใจในการดูแลผู้ป่วย (ระบุ)",
    "hos_guid": null
  },
  {
    "patient_hhc_care_type_id": 2,
    "patient_hhc_care_type_name": "ผู้ป่วย on Tracheostomy tube",
    "hos_guid": null
  },
  {
    "patient_hhc_care_type_id": 3,
    "patient_hhc_care_type_name": "ผู้ป่วย on NG tube",
    "hos_guid": null
  },
  {
    "patient_hhc_care_type_id": 4,
    "patient_hhc_care_type_name": "ผู้ป่วย on Colostomy",
    "hos_guid": null
  },
  {
    "patient_hhc_care_type_id": 5,
    "patient_hhc_care_type_name": "ผู้ป่วย on Cystostomy",
    "hos_guid": null
  },
  {
    "patient_hhc_care_type_id": 6,
    "patient_hhc_care_type_name": "ผู้ป่วย on Gastrostomy",
    "hos_guid": null
  },
  {
    "patient_hhc_care_type_id": 7,
    "patient_hhc_care_type_name": "ผู้ป่ว Retained foley s cath",
    "hos_guid": null
  },
  {
    "patient_hhc_care_type_id": 8,
    "patient_hhc_care_type_name": "ผู้ป่วยมีแผลกดทับตำแหน่ง (ระบุ)",
    "hos_guid": null
  }
]
```
