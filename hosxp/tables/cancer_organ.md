# `cancer_organ`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_organ_id | int(11) | NO | PRI | 0 |  |  |
| cancer_organ_code | varchar(5) | YES |  | NULL |  |  |
| cancer_organ_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_organ_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_organ_id": 1,
    "cancer_organ_code": "8000",
    "cancer_organ_name": "Neoplasm, malignant",
    "hos_guid": null
  },
  {
    "cancer_organ_id": 2,
    "cancer_organ_code": "8001",
    "cancer_organ_name": "Tumor cells, malignant",
    "hos_guid": null
  },
  {
    "cancer_organ_id": 3,
    "cancer_organ_code": "8002",
    "cancer_organ_name": "Malignant tumor, small cell type",
    "hos_guid": null
  },
  {
    "cancer_organ_id": 4,
    "cancer_organ_code": "8003",
    "cancer_organ_name": "Malignant tumor, giant cell type",
    "hos_guid": null
  },
  {
    "cancer_organ_id": 5,
    "cancer_organ_code": "8004",
    "cancer_organ_name": "Malignant tumor, spindle cell type",
    "hos_guid": null
  },
  {
    "cancer_organ_id": 6,
    "cancer_organ_code": "8005",
    "cancer_organ_name": "Malignant tumor, clear cell type",
    "hos_guid": null
  },
  {
    "cancer_organ_id": 7,
    "cancer_organ_code": "8010",
    "cancer_organ_name": "Carcinoma, NOS",
    "hos_guid": null
  },
  {
    "cancer_organ_id": 8,
    "cancer_organ_code": "8011",
    "cancer_organ_name": "Epithelioma, malignant",
    "hos_guid": null
  }
]
```
