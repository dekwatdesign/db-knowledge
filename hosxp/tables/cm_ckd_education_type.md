# `cm_ckd_education_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_ckd_education_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_ckd_education_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_ckd_education_type_name | cm_ckd_education_type_name | yes | 1 |
| PRIMARY | cm_ckd_education_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "cm_ckd_education_type_id": 4,
    "cm_ckd_education_type_name": "Dialysis"
  },
  {
    "cm_ckd_education_type_id": 3,
    "cm_ckd_education_type_name": "Exercise"
  },
  {
    "cm_ckd_education_type_id": 5,
    "cm_ckd_education_type_name": "Kidney Transplantation"
  },
  {
    "cm_ckd_education_type_id": 6,
    "cm_ckd_education_type_name": "Nutrition (with Dietitian counseling)"
  },
  {
    "cm_ckd_education_type_id": 7,
    "cm_ckd_education_type_name": "Nutrition (without Dietitian counseling)"
  },
  {
    "cm_ckd_education_type_id": 1,
    "cm_ckd_education_type_name": "Smoking"
  },
  {
    "cm_ckd_education_type_id": 2,
    "cm_ckd_education_type_name": "Vaccination"
  }
]
```
