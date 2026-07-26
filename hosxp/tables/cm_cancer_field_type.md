# `cm_cancer_field_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_field_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_field_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_field_type_name | cm_cancer_field_type_name | yes | 1 |
| PRIMARY | cm_cancer_field_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cm_cancer_field_type_id": 1,
    "cm_cancer_field_type_name": "Right"
  },
  {
    "cm_cancer_field_type_id": 2,
    "cm_cancer_field_type_name": "Left"
  },
  {
    "cm_cancer_field_type_id": 3,
    "cm_cancer_field_type_name": "Bilateral"
  },
  {
    "cm_cancer_field_type_id": 4,
    "cm_cancer_field_type_name": "Unilateral"
  },
  {
    "cm_cancer_field_type_id": 5,
    "cm_cancer_field_type_name": "ไม่ระบุ"
  }
]
```
