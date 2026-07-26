# `patient_asthma_exa_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_asthma_exa_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_asthma_exa_type_name | varchar(200) | YES | UNI | NULL |  |  |
| nhso_export_code | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_asthma_exa_type_name | patient_asthma_exa_type_name | yes | 1 |
| PRIMARY | patient_asthma_exa_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_asthma_exa_type_id": 1,
    "patient_asthma_exa_type_name": "ไม่มีอาการกำเริบ",
    "nhso_export_code": "0",
    "hos_guid": null
  },
  {
    "patient_asthma_exa_type_id": 2,
    "patient_asthma_exa_type_name": "มีอาการกำเริบ",
    "nhso_export_code": "1",
    "hos_guid": null
  },
  {
    "patient_asthma_exa_type_id": 3,
    "patient_asthma_exa_type_name": "ไม่ได้ซัก",
    "nhso_export_code": "N",
    "hos_guid": null
  }
]
```
