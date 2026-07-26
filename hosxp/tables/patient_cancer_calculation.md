# `patient_cancer_calculation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_calculation_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_calculation_param_id | int(11) | YES |  | NULL |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| field_count | int(11) | YES |  | NULL |  |  |
| field_1 | varchar(50) | YES |  | NULL |  |  |
| field_2 | varchar(50) | YES |  | NULL |  |  |
| field_3 | varchar(50) | YES |  | NULL |  |  |
| field_4 | varchar(50) | YES |  | NULL |  |  |
| field_5 | varchar(50) | YES |  | NULL |  |  |
| field_6 | varchar(50) | YES |  | NULL |  |  |
| field_7 | varchar(50) | YES |  | NULL |  |  |
| field_8 | varchar(50) | YES |  | NULL |  |  |
| field_9 | varchar(50) | YES |  | NULL |  |  |
| field_10 | varchar(50) | YES |  | NULL |  |  |
| field_11 | varchar(50) | YES |  | NULL |  |  |
| field_12 | varchar(50) | YES |  | NULL |  |  |
| field_13 | varchar(50) | YES |  | NULL |  |  |
| field_14 | varchar(50) | YES |  | NULL |  |  |
| field_15 | varchar(50) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_calculation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
