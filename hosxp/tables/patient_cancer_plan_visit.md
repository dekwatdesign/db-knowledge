# `patient_cancer_plan_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_plan_visit_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| from_dep | varchar(5) | YES |  | NULL |  |  |
| cur_dep | varchar(5) | YES |  | NULL |  |  |
| next_dep | varchar(5) | YES |  | NULL |  |  |
| visit_note | text | YES |  | NULL |  |  |
| send_date | date | YES |  | NULL |  |  |
| send_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_plan_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
