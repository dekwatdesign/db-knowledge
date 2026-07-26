# `dw_refer_person_refer_diagnosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_refer_diagnosis_id | int(11) | NO | PRI | 0 |  |  |
| person_refer_id | int(11) | YES | MUL | NULL |  |  |
| icd10 | varchar(9) | YES |  | NULL |  |  |
| diag_doctor_name | varchar(50) | YES |  | NULL |  |  |
| diagtype | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_refer_id | person_refer_id | no | 1 |
| PRIMARY | person_refer_diagnosis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
