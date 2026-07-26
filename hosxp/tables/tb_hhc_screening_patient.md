# `tb_hhc_screening_patient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_screening_patient_id | int(11) | NO | PRI | 0 |  |  |
| tb_hhc_plan_drug_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_date | date | YES |  | NULL |  |  |
| tb_hhc_screening_patient_family | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_baby | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_check_tb | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_xray | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_check_sputum | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_find_tb | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_treatment | int(11) | YES |  | NULL |  |  |
| tb_hhc_screening_patient_anti_drug | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_screening_patient_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
