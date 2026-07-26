# `cancer_nursenote_admissionassessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| admissionassessment_id | int(11) | NO | PRI | 0 |  |  |
| AdmissionAssessment_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | admissionassessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "admissionassessment_id": 1,
    "AdmissionAssessment_name": "Non-Urgent",
    "hos_guid": null
  },
  {
    "admissionassessment_id": 2,
    "AdmissionAssessment_name": "Urgent",
    "hos_guid": null
  },
  {
    "admissionassessment_id": 3,
    "AdmissionAssessment_name": "Emergency",
    "hos_guid": null
  }
]
```
