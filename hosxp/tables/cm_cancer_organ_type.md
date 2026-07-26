# `cm_cancer_organ_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_organ_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_organ_type_name | varchar(200) | YES | UNI | NULL |  |  |
| cm_cancer_organ_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_organ_type_name | cm_cancer_organ_type_name | yes | 1 |
| PRIMARY | cm_cancer_organ_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cm_cancer_organ_type_id": 1,
    "cm_cancer_organ_type_name": "Neoplasm, malignant",
    "cm_cancer_organ_code": "8000"
  },
  {
    "cm_cancer_organ_type_id": 2,
    "cm_cancer_organ_type_name": "Tumor cells, malignant",
    "cm_cancer_organ_code": "8001"
  },
  {
    "cm_cancer_organ_type_id": 3,
    "cm_cancer_organ_type_name": "Malignant tumor, small cell type",
    "cm_cancer_organ_code": "8002"
  },
  {
    "cm_cancer_organ_type_id": 4,
    "cm_cancer_organ_type_name": "Malignant tumor, giant cell type",
    "cm_cancer_organ_code": "8003"
  },
  {
    "cm_cancer_organ_type_id": 5,
    "cm_cancer_organ_type_name": "Malignant tumor, spindle cell type",
    "cm_cancer_organ_code": "8004"
  },
  {
    "cm_cancer_organ_type_id": 6,
    "cm_cancer_organ_type_name": "Malignant tumor, clear cell type",
    "cm_cancer_organ_code": "8005"
  },
  {
    "cm_cancer_organ_type_id": 7,
    "cm_cancer_organ_type_name": "Carcinoma, NOS",
    "cm_cancer_organ_code": "8010"
  },
  {
    "cm_cancer_organ_type_id": 8,
    "cm_cancer_organ_type_name": "Epithelioma, malignant",
    "cm_cancer_organ_code": "8011"
  }
]
```
