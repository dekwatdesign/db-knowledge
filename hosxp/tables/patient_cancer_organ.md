# `patient_cancer_organ`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_organ_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_registeration_id | int(11) | YES |  | NULL |  |  |
| patient_cancer_organ_code | varchar(5) | YES |  | NULL |  |  |
| patient_cancer_organ_name | varchar(30) | YES |  | NULL |  |  |
| icd_o | varchar(7) | YES |  | NULL |  |  |
| icd_10 | varchar(7) | YES |  | NULL |  |  |
| diag_result | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_organ_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
