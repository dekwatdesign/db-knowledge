# `cancer_report_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_report_treatment_id | int(11) | NO | PRI | 0 |  |  |
| cancer_report_id | int(11) | YES | MUL | NULL |  |  |
| cancer_pttype_id | int(11) | YES |  | NULL |  |  |
| treatment_date | date | YES |  | NULL |  |  |
| treatment_hospcode | varchar(9) | YES |  | NULL |  |  |
| admit_no | varchar(9) | YES |  | NULL |  |  |
| icd9cm | varchar(9) | YES |  | NULL |  |  |
| doctor_license_no | varchar(25) | YES |  | NULL |  |  |
| doctor_name | varchar(150) | YES |  | NULL |  |  |
| treatment_desc | varchar(250) | YES |  | NULL |  |  |
| cancer_department_type_id | int(11) | YES |  | NULL |  |  |
| cancer_treatment_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_report_id | cancer_report_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_report_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
