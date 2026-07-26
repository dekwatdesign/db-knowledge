# `clinicmember_cancer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cancer_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_id | int(11) | YES | MUL | NULL |  |  |
| doctor_first_visit_date | date | YES |  | NULL |  |  |
| cancer_name_list_text | varchar(250) | YES |  | NULL |  |  |
| doctor_diag_date | date | YES |  | NULL |  |  |
| f53_cm_diag_code | varchar(2) | YES |  | NULL |  |  |
| f53_topography | varchar(10) | YES |  | NULL |  |  |
| f53_morphology | varchar(10) | YES |  | NULL |  |  |
| cm_cancer_grade_type_id | int(11) | YES |  | NULL |  |  |
| f53_cm_stage_code | varchar(2) | YES |  | NULL |  |  |
| nci_export | char(1) | YES |  | NULL |  |  |
| nci_export_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | clinicmember_id | no | 1 |
| PRIMARY | clinicmember_cancer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
