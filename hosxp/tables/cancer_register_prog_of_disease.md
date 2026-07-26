# `cancer_register_prog_of_disease`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_register_prog_of_disease_id | int(11) | NO | PRI | 0 |  |  |
| cancer_register_prog_of_disease_date | date | YES |  | NULL |  |  |
| cancer_register_prog_of_disease_diag_code | char(7) | YES |  | NULL |  |  |
| cancer_register_prog_of_disease_metastasis_id | int(11) | YES |  | NULL |  |  |
| cancer_register_prog_of_disease_treatment | varchar(255) | YES |  | NULL |  |  |
| cancer_register_prog_of_disease_treatment_result | varchar(255) | YES |  | NULL |  |  |
| doctor_code | char(7) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| vn | char(13) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_register_prog_of_disease_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
