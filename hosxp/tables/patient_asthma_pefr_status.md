# `patient_asthma_pefr_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_asthma_pefr_status_id | int(11) | NO | PRI | 0 |  |  |
| patient_asthma_pefr_status_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_asthma_pefr_status_name | patient_asthma_pefr_status_name | yes | 1 |
| PRIMARY | patient_asthma_pefr_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_asthma_pefr_status_id": 1,
    "patient_asthma_pefr_status_name": "วัดค่าได้",
    "hos_guid": null
  },
  {
    "patient_asthma_pefr_status_id": 2,
    "patient_asthma_pefr_status_name": "วัดไม่ได้ (เด็ก / ผู้ป่วยมีข้อจำกัด)",
    "hos_guid": null
  },
  {
    "patient_asthma_pefr_status_id": 3,
    "patient_asthma_pefr_status_name": "ไม่ได้วัด",
    "hos_guid": null
  }
]
```
