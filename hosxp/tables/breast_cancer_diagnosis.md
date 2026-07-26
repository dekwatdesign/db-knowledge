# `breast_cancer_diagnosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| breast_cancer_diagnosis_id | int(11) | NO | PRI | 0 |  |  |
| breast_cancer_diagnosis_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_breast_cancer_diagnosis_name | breast_cancer_diagnosis_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | breast_cancer_diagnosis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "breast_cancer_diagnosis_id": 1,
    "breast_cancer_diagnosis_name": "Stage 1",
    "hos_guid": null
  },
  {
    "breast_cancer_diagnosis_id": 2,
    "breast_cancer_diagnosis_name": "Stage 2",
    "hos_guid": null
  },
  {
    "breast_cancer_diagnosis_id": 3,
    "breast_cancer_diagnosis_name": "Stage 3",
    "hos_guid": null
  },
  {
    "breast_cancer_diagnosis_id": 4,
    "breast_cancer_diagnosis_name": "Stage 4",
    "hos_guid": null
  },
  {
    "breast_cancer_diagnosis_id": 9,
    "breast_cancer_diagnosis_name": "ไม่เป็น",
    "hos_guid": null
  }
]
```
