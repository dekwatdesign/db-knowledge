# `cancer_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_treatment_id | int(11) | NO | PRI | 0 |  |  |
| cancer_treatment_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_treatment_name | cancer_treatment_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_treatment_id": 1,
    "cancer_treatment_name": "Surgery",
    "hos_guid": null
  },
  {
    "cancer_treatment_id": 2,
    "cancer_treatment_name": "Radiation",
    "hos_guid": null
  },
  {
    "cancer_treatment_id": 3,
    "cancer_treatment_name": "Chemotherapy",
    "hos_guid": null
  },
  {
    "cancer_treatment_id": 4,
    "cancer_treatment_name": "Hormone",
    "hos_guid": null
  },
  {
    "cancer_treatment_id": 5,
    "cancer_treatment_name": "Immo.",
    "hos_guid": null
  },
  {
    "cancer_treatment_id": 6,
    "cancer_treatment_name": "Sup.",
    "hos_guid": null
  },
  {
    "cancer_treatment_id": 7,
    "cancer_treatment_name": "Interventional",
    "hos_guid": null
  },
  {
    "cancer_treatment_id": 8,
    "cancer_treatment_name": "Other",
    "hos_guid": null
  }
]
```
