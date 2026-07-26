# `cancer_metastasis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_metastasis_id | int(11) | NO | PRI | 0 |  |  |
| cancer_metastasis_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_metastasis_name | cancer_metastasis_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_metastasis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_metastasis_id": 1,
    "cancer_metastasis_name": "Bone",
    "hos_guid": null
  },
  {
    "cancer_metastasis_id": 2,
    "cancer_metastasis_name": "Brain",
    "hos_guid": null
  },
  {
    "cancer_metastasis_id": 3,
    "cancer_metastasis_name": "Liver",
    "hos_guid": null
  },
  {
    "cancer_metastasis_id": 4,
    "cancer_metastasis_name": "Lung",
    "hos_guid": null
  },
  {
    "cancer_metastasis_id": 5,
    "cancer_metastasis_name": "Lymph Node",
    "hos_guid": null
  },
  {
    "cancer_metastasis_id": 6,
    "cancer_metastasis_name": "Peritoneum",
    "hos_guid": null
  },
  {
    "cancer_metastasis_id": 7,
    "cancer_metastasis_name": "Other",
    "hos_guid": null
  },
  {
    "cancer_metastasis_id": 8,
    "cancer_metastasis_name": "Not known",
    "hos_guid": null
  }
]
```
