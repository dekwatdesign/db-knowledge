# `lab_patho_icdo`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_icdo_id | int(11) | NO | PRI | 0 |  |  |
| lab_patho_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_number_type_id | int(11) | YES |  | NULL |  |  |
| cm_cancer_organ_code | varchar(10) | YES |  | NULL |  |  |
| cm_cancer_grade_type_id | int(11) | YES |  | NULL |  |  |
| icd_o | varchar(5) | YES |  | NULL |  |  |
| cm_cancer_field_type_id | int(11) | YES |  | NULL |  |  |
| pathology_number | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| behaviour | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_patho_icdo_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
