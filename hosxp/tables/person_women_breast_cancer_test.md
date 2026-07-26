# `person_women_breast_cancer_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_women_breast_cancer_test_id | int(11) | NO | PRI | 0 |  |  |
| person_women_id | int(11) | YES |  | NULL |  |  |
| test_date | date | YES |  | NULL |  |  |
| test_result | varchar(25) | YES |  | NULL |  |  |
| breast_test_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| breast_cancer_result_id | int(11) | YES |  | NULL |  |  |
| breast_tumor_type_id | int(11) | YES |  | NULL |  |  |
| refer_out | char(1) | YES |  | NULL |  |  |
| refer_out_hospcode | varchar(9) | YES |  | NULL |  |  |
| breast_cancer_diagnosis_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_women_breast_cancer_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
