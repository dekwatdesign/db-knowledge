# `palliative_care_patient_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_patient_status_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_patient_status_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_patient_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "palliative_care_patient_status_id": 1,
    "palliative_care_patient_status_name": "ดูแลตัวเองได้",
    "hos_guid": null
  },
  {
    "palliative_care_patient_status_id": 2,
    "palliative_care_patient_status_name": "ต้องการผู้ดูแลบางเวลา",
    "hos_guid": null
  },
  {
    "palliative_care_patient_status_id": 3,
    "palliative_care_patient_status_name": "ต้องการผู้ดูแลตลอดเวลา",
    "hos_guid": null
  },
  {
    "palliative_care_patient_status_id": 4,
    "palliative_care_patient_status_name": "เสียชีวิต",
    "hos_guid": null
  }
]
```
