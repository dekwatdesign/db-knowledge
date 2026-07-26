# `cm_cancer_number_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_number_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_number_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_number_type_name | cm_cancer_number_type_name | yes | 1 |
| PRIMARY | cm_cancer_number_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "cm_cancer_number_type_id": 1,
    "cm_cancer_number_type_name": "Primary"
  },
  {
    "cm_cancer_number_type_id": 2,
    "cm_cancer_number_type_name": "Recurrent"
  }
]
```
