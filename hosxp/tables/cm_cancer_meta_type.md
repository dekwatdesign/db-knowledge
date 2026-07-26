# `cm_cancer_meta_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_meta_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_meta_type_name | varchar(200) | YES | UNI | NULL |  |  |
| cm_cancer_meta_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_meta_type_name | cm_cancer_meta_type_name | yes | 1 |
| PRIMARY | cm_cancer_meta_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cm_cancer_meta_type_id": 1,
    "cm_cancer_meta_type_name": "ไม่สามารถประเมินการแพร่กระจายได้",
    "cm_cancer_meta_code": "Mx"
  },
  {
    "cm_cancer_meta_type_id": 2,
    "cm_cancer_meta_type_name": "ไม่พบการแพร่กระจายไปยังอวัยวะอื่น",
    "cm_cancer_meta_code": "M0"
  },
  {
    "cm_cancer_meta_type_id": 3,
    "cm_cancer_meta_type_name": "แพร่กระจายไปยังอวัยวะอื่น",
    "cm_cancer_meta_code": "M1"
  }
]
```
