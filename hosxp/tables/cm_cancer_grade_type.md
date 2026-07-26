# `cm_cancer_grade_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_grade_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_grade_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_grade_type_name | cm_cancer_grade_type_name | yes | 1 |
| PRIMARY | cm_cancer_grade_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cm_cancer_grade_type_id": 1,
    "cm_cancer_grade_type_name": "1, Well differentiated"
  },
  {
    "cm_cancer_grade_type_id": 2,
    "cm_cancer_grade_type_name": "2, Moderately differentiated"
  },
  {
    "cm_cancer_grade_type_id": 3,
    "cm_cancer_grade_type_name": "3, Poorly differentiated"
  },
  {
    "cm_cancer_grade_type_id": 4,
    "cm_cancer_grade_type_name": "4, Undifferentiated"
  },
  {
    "cm_cancer_grade_type_id": 5,
    "cm_cancer_grade_type_name": "Positive T - Cell"
  },
  {
    "cm_cancer_grade_type_id": 6,
    "cm_cancer_grade_type_name": "Positive B - Cell"
  },
  {
    "cm_cancer_grade_type_id": 7,
    "cm_cancer_grade_type_name": "Null cell (Non T - non B)"
  },
  {
    "cm_cancer_grade_type_id": 8,
    "cm_cancer_grade_type_name": "NK cell (natural Killer)"
  }
]
```
