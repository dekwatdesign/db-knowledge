# `patient_history_source`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_history_source_id | int(11) | NO | PRI | 0 |  |  |
| patient_history_source_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_history_source_name | patient_history_source_name | yes | 1 |
| PRIMARY | patient_history_source_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "patient_history_source_id": 1,
    "patient_history_source_name": "เวชระเบียน",
    "hos_guid": null
  },
  {
    "patient_history_source_id": 2,
    "patient_history_source_name": "ผู้ป่วย",
    "hos_guid": null
  },
  {
    "patient_history_source_id": 3,
    "patient_history_source_name": "ญาติ",
    "hos_guid": null
  },
  {
    "patient_history_source_id": 4,
    "patient_history_source_name": "ใบ Refer",
    "hos_guid": null
  }
]
```
