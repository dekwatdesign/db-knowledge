# `person_women_breast_cancer_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_women_breast_cancer_check_id | int(11) | NO | PRI | 0 |  |  |
| person_women_breast_cancer_test_id | int(11) | YES | MUL | NULL |  |  |
| breast_cancer_check_id | int(11) | YES |  | NULL |  |  |
| check_result | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_pmbcti | person_women_breast_cancer_test_id | no | 1 |
| PRIMARY | person_women_breast_cancer_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
