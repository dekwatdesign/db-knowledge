# `nhso_cancer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_cancer_type_code | varchar(10) | NO | PRI |  |  |  |
| nhso_cancer_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_cancer_type_name | nhso_cancer_type_name | yes | 1 |
| PRIMARY | nhso_cancer_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_cancer_type_code": "Bd",
    "nhso_cancer_type_name": "Bladder"
  },
  {
    "nhso_cancer_type_code": "Br",
    "nhso_cancer_type_name": "Breast"
  },
  {
    "nhso_cancer_type_code": "Ch",
    "nhso_cancer_type_name": "Cholangiocarcinoma"
  },
  {
    "nhso_cancer_type_code": "Cr",
    "nhso_cancer_type_name": "Colon & Rectum"
  },
  {
    "nhso_cancer_type_code": "Cx",
    "nhso_cancer_type_name": "Cervix"
  },
  {
    "nhso_cancer_type_code": "Es",
    "nhso_cancer_type_name": "Esophagus"
  },
  {
    "nhso_cancer_type_code": "Ln",
    "nhso_cancer_type_name": "Lung (Non small cell)"
  },
  {
    "nhso_cancer_type_code": "Lu",
    "nhso_cancer_type_name": "Lung (Small cell)"
  }
]
```
